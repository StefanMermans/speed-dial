import React, {useMemo} from "react";

import styles from "./siteList.module.scss";
import useSiteList from "../../hooks/useSiteList";
import Site from "../Site/Site";

export const BOOKMARK_WIDTH = 120;

const useFormatSiteList = (sites) => {
  return useMemo(() => {
    return sites.map(site => <Site key={site.name} site={site} />)
  }, [sites]);
}

export default function SiteList({paddingLeft}) {
  const sites = useFormatSiteList(useSiteList());
  
  return (
    <div className={styles.container} style={{
      paddingLeft: paddingLeft
    }}>
      {sites}
    </div>
  )
}