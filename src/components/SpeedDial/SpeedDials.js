import React from 'react';
import SiteList from "../SiteList/SiteList"
import Clock from '../Clock/Clock';
import useShows from  "../ShowList/useShows";
import background from "../../background-compressed.jpg"
import ShowItem from "../ShowList/ShowItem/ShowItem";

import styles from "./SpeedDial.module.scss";

export default function SpeedDial() {
  const [shows, areShowLoading] = useShows();

  return (
    <div className={styles.appContainer} style={{
      backgroundImage: `url(${background})`
    }}>
      <SiteList />
      <div className={styles.bottomWrapper}>
        <Clock />
        <div className={styles.showList}>
          {areShowLoading || shows.map(show => <ShowItem key={show.media.id} show={show} />)}
        </div>
      </div>
    </div>
  );
}
