import React from "react";

import styles from "./showItem.module.scss";

export default function ShowItem({ media }) {
  const next = media.nextAiringEpisode.airingAt * 1000;
  const nextDate = new Date(next);
  nextDate.setHours(24);
  nextDate.setMinutes(59);
  let now = new Date();
  now.setHours(24);
  now.setMinutes(59);
  now.setSeconds(0);
  now.setMilliseconds(0);

  let when = 'later';
  let tomorrow = new Date(now.getTime()); 
  tomorrow.setDate(tomorrow.getDate()+1);
  if (nextDate.getTime() <= tomorrow.getTime()) {
    when = "tomorrow";
  }

  return (
    <div class={styles.content}>
      <div class={styles.thumbnail} src={media.coverImage.medium} />
      <div class={styles.text}>
        <div>{media.title.english}</div>
        <div>{nextDate.toISOString()}</div>
      </div>
    </div>
  )
}
