import React, { useState, useMemo } from "react";
import { ShowListWrapper } from "./styles";
import ShowItem from "./ShowItem/ShowItem";
import { useQuery, gql } from "@apollo/client"

const QUERY = gql`
query ($name: String = "Skyflyer97") {
  MediaListCollection(userName: $name, type:ANIME) {
		lists {
      name
      isCustomList
      isSplitCompletedList
      status
      entries {
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
          status
          title {
            english
          }
        }
      }
    }
  }
}
`;

function cleanDate(date) {
  const newDate = new Date(date);
  newDate.setHours(23);
  newDate.setMinutes(59);
  newDate.setSeconds(0);
  newDate.setMilliseconds(0);
  return newDate;
}

function isTomorrow(date) {
  const tomorrow = cleanDate(new Date());
  tomorrow.setDate(tomorrow.getDate() + 1);

  return date.getTime() === tomorrow.getTime();
}

function isToday(date) {
  const today = cleanDate(new Date());

  return date.getTime() === today.getTime();
}

export default function ShowList() {
  const { loading, error, data } = useQuery(QUERY);

  const [todayList, tomorrowList, laterList, finishedList] = useMemo(() => {
    if (loading) {
      return [[],[],[],[]];
    }

    if (error) {
      console.error("graphql error!");
      console.error(error);
      return [[],[],[],[]];
    }

    const result = data.MediaListCollection.lists.find(((mediaList) => mediaList.name === "Watching")).entries;

    const today = [];
    const tomorrow = [];
    const later = [];
    const finished = [];

    for (const media of result) {
      const mediaItem = media.media;
      
      if (mediaItem.status === "FINISHED") {
        finished.push(mediaItem);
      } else {
        const date = cleanDate(new Date(mediaItem.nextAiringEpisode.airingAt * 1000));

        if (isToday(date)) {
          today.push(mediaItem);
        } else if (isTomorrow(date)) {
          tomorrow.push(mediaItem);
        } else {
          later.push(mediaItem);
        }
      }
    }

    return [today, tomorrow, later, finished];
  }, [loading, error, data]);

  return (
    <ShowListWrapper>
      <div>Today</div>
      {todayList && todayList.map(media => <ShowItem key={media.id} media={media} />)}
      <div>Tomorrow</div>
      {tomorrowList && tomorrowList.map(media => <ShowItem key={media.id} media={media} />)}
      <div>Later</div>
      {laterList && laterList.map(media => <ShowItem key={media.id} media={media} />)}
      <div>Finished</div>
      {finishedList && finishedList.map(media => <ShowItem key={media.id} media={media} />)}
    </ShowListWrapper>
  );
}
