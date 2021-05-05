import React, { useMemo } from 'react';
import SiteList, { BOOKMARK_WIDTH } from "../SiteList/SiteList"
import Clock from '../Clock/Clock';
import background from "../../background-compressed.jpg"
import styles from "./SpeedDial.module.scss";
import useWindowResize from '../../hooks/useWindowResize';
import SpeedDialShows from '../SpeedDialShows/SpeedDialShows';

function usePadding() {
  const [windowWidth] = useWindowResize();

  return useMemo(() => {
    const count = Math.floor(windowWidth / BOOKMARK_WIDTH);
    const excessSpace = windowWidth - (count * BOOKMARK_WIDTH);
    return excessSpace / 2;
  }, [windowWidth]);
}

export default function SpeedDial() {
  const padding = usePadding();

  return (
    <div className={styles.appContainer} style={{
      backgroundImage: `url(${background})`
    }}>
      <SiteList paddingLeft={padding} />
      <div className={styles.bottomWrapper}
      style={{
        padding: `40px ${20 + padding}px`,
      }}
      >
        <Clock />
        <SpeedDialShows />
      </div>
    </div>
  );
}
