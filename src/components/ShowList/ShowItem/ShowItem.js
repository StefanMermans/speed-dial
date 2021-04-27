import React from "react";
import NextEpisode from "./NextEpisode";

import styles from "./showItem.module.scss";

export default function ShowItem({ show }) {

  console.log(show);

  return (
    <div className={styles.showItem}>
      <div>{show.media.title.romaji}</div>
      {/* <div>{show.title.english}</div> */}
      <NextEpisode show={show} />
    </div>
  )
}
