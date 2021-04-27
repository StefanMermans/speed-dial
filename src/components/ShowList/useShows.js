import { gql } from "graphql-request";
import { useMemo } from "react";
import useAnilistRequest from "../../hooks/useAnilistRequest";


const QUERY = gql`
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

export default function useShows() {
  const variables = useMemo(() => {
    return {
      name: "Skyflyer97"
    }
  }, []);

  const query = useMemo(() => {
    return QUERY;
  }, []);

  const [data, isLoading] = useAnilistRequest(query, variables);

  return useMemo(() => {
    if (isLoading) {
      return [[], isLoading];
    }

    const watchingList = data.MediaListCollection.lists
      .find(list => list.name === 'Watching')
      .entries

    return [watchingList, isLoading];
  }, [data, isLoading]);

}