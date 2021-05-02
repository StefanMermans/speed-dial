import React from "react";
import NextEpisode from "./NextEpisode";
import styles from "./showItem.module.scss";
import ThumbNail from "./thumbnail";

export default function ShowItem({ show }) {
  return (
    <div className={styles.showItem}>
      <ThumbNail show={show} />
      <div className={styles.content}>
        <div>
          <div className={styles.romaji}>{show.media.title.romaji}</div>
          <div className={styles.english}>{show.media.title.english}</div>
        </div>
        <NextEpisode show={show} />
      </div>
    </div>
  )
}
