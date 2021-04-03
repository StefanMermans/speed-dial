import React, { useMemo } from "react";
import useWindowResize from "../../hooks/useWindowResize";

import styles from "./siteList.module.scss";
import useSiteList from "./useSiteList";

const BOOKMARK_WIDTH = 120;


function calculatePadding(windowWidth) {
  const count = Math.floor(windowWidth / BOOKMARK_WIDTH);
  const excessSpace = windowWidth - (count * BOOKMARK_WIDTH);
  return excessSpace / 2;
}

export default function SiteList() {
  const [windowWidth] = useWindowResize();
  const sites = useSiteList();

  const paddingLeft = useMemo(() => {
    return calculatePadding(windowWidth);
  }, [windowWidth]);
  
  return (
    <div className={styles.container} style={{
      paddingLeft: paddingLeft
    }}>
      {sites}
    </div>
  )
}