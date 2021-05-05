import React from "react";

import styles from "./siteList.module.scss";
import useSiteList from "./useSiteList";

export const BOOKMARK_WIDTH = 120;

export default function SiteList({paddingLeft}) {
  const sites = useSiteList();
  
  return (
    <div className={styles.container} style={{
      paddingLeft: paddingLeft
    }}>
      {sites}
    </div>
  )
}