import React from "react";

import Site from "../Site/Site";
import useSiteList from "../../hooks/useSiteList";

import styles from "./siteList.module.scss";

export const BOOKMARK_WIDTH = 120;

export default function SiteList({paddingLeft}) {
  const sites = useSiteList();
  
  return (
    <div className={styles.container} style={{
      paddingLeft: paddingLeft
    }}>
      {sites.map(site => <Site key={site.name} site={site} />)}
    </div>
  )
}