import React from "react";

import styles from "./site.module.scss";

export default function Site(props) {
  const imageSource = props.site.icon;
  const backgroundColor = props.site.backgroundColor || "white";
  const color = props.site.color || "black"

  return (
    <div className={styles.container} style={{color}}>
      <a className={styles.link} href={props.site.url} style={{backgroundColor}}>
        <img className={styles.icon} src={imageSource} alt={props.site.name + "-icon"} />
      </a>
    </div>
  )
}
