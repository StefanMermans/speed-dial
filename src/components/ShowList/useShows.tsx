import { useMemo } from "react";

import { gql } from "graphql-request";

import Show from "../../models/Show";
import useAnilistRequest from "../../hooks/useAnilistRequest";

function useQuery() {
  return gql`
  query ($name: String!) {
    MediaListCollection(userName: $name, type:ANIME) {
      lists {
        name
        isCustomList
        isSplitCompletedList
        status
        entries {
          progress
          media {
            type
            id
            coverImage {
              extraLarge
              large
              medium
              color
            }
            nextAiringEpisode {
              id
              airingAt
              timeUntilAiring
            }
            airingSchedule (perPage: 100) {
              pageInfo {
                total
                perPage
                currentPage
                lastPage
                hasNextPage
              }
              nodes {
                id
                airingAt
                timeUntilAiring
              }
            }
            episodes
            status
            title {
              english
              romaji
            }
          }
        }
      }
    }
  }
  `;
}

function showSort(showA: Show, showB: Show) {
  const aEps = showA.episodesToWatch();
  const bEps = showB.episodesToWatch();

  if (aEps !== 0 || bEps !== 0) {
    return showB.episodesToWatch() - showA.episodesToWatch();
  }

  const [nextA] = showA.getNextEpisode();
  const [nextB] = showB.getNextEpisode();

  return nextA.timeUntilAiring - nextB.timeUntilAiring;
}

function toModel(show: any): Show {
  return Object.assign(new Show(), show);
}

function useFilterShows(data: any, isLoading: boolean): [Show[], boolean] {
  return useMemo(() => {
    if (isLoading) {
      return [[], isLoading];
    }

    const watchingList = data.MediaListCollection.lists
      .find((list: any) => list.name === 'Watching')
      .entries
      .map(toModel)
      .sort(showSort);

    return [watchingList, isLoading];
  }, [data, isLoading]);
}

export default function useShows(): [Show[], boolean] {
  const variables = useMemo(() => {
    return {
      name: "Skyflyer97"
    }
  }, []);

  const query = useQuery();
  const [data, isLoading] = useAnilistRequest(query, variables);

  return useFilterShows(data, isLoading);
}