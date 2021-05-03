import React from "react";

import styles from "./thumbnail.module.scss";

export default function ThumbNail({ show }) {
  return (
      <img alt={show.media.title.romaji} className={styles.thumbnail} src={show.media.coverImage.medium}/>
  )
}
