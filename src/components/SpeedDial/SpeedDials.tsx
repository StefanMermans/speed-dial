import { useMemo } from 'react';

import Clock from '../Clock/Clock';
import background from "../../background-compressed.jpg"
import useWindowResize from '../../hooks/useWindowResize';
import SpeedDialShows from '../SpeedDialShows/SpeedDialShows';
import { BOOKMARK_WIDTH, SiteList } from "../SiteList/SiteList"

import styles from "./SpeedDial.module.scss";

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
      <SiteList padding={padding} />
      <div className={styles.bottomWrapper}
        style={{
          padding: `40px ${padding}px`,
        }}
      >
        <Clock />
        <SpeedDialShows />
      </div>
    </div>
  );
}
