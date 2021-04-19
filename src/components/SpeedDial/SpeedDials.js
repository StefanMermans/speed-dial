import React from 'react';
import SiteList from "../SiteList/SiteList"
import background from "../../background-compressed.jpg"
import Clock from '../Clock/Clock';

import styles from "./SpeedDial.module.scss";

export default function SpeedDial() {
  return (
      <div className={styles.appContainer} style={{
        backgroundImage: `url(${background})`
      }}>
        <SiteList />
        <div className={styles.bottomWrapper}>
          <Clock />
        </div>
      </div>
  );
}
