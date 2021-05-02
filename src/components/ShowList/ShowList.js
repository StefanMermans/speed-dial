import React from "react";
import ShowItem from "./ShowItem/ShowItem";

import styles from "./showList.module.scss";
import useShows from "./useShows";

export default function ShowList() {
  const [shows] = useShows();

  return (
    <div className={styles.showListPage}>
      <div className={styles.showListWrapper}>
        {shows.map(show => <ShowItem key={show.media.id} show={show} />)}
      </div>
    </div>
  );
}
