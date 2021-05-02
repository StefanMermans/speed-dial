import { gql } from "graphql-request";
import { useMemo } from "react";
import useAnilistRequest from "../../hooks/useAnilistRequest";
import Show from "../../models/Show";

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

function showSort(showA, showB) {
  return showB.episodesToWatch() - showA.episodesToWatch();
}

function toModel(show) {
  return Object.assign(new Show(), show);
}

function useFilterShows(data, isLoading) {
  return useMemo(() => {
    if (isLoading) {
      return [[], isLoading];
    }

    const watchingList = data.MediaListCollection.lists
      .find(list => list.name === 'Watching')
      .entries
      .map(toModel)
      .sort(showSort);

    return [watchingList, isLoading];
  }, [data, isLoading]);
}

export default function useShows() {
  const variables = useMemo(() => {
    return {
      name: "Skyflyer97"
    }
  }, []);

  const query = useQuery();
  const [data, isLoading] = useAnilistRequest(query, variables);
  return useFilterShows(data, isLoading);
}