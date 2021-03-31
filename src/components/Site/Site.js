import React from "react";

import styles from "./site.module.scss";

export default function Site(props) {
  const imageSource = props.site.icon;
  const backgroundColor = props.site.backgroundColor || "white";
  const color = props.site.color || "black"

  return (
    <div class={styles.container} style={{color}}>
      <a class={styles.link} href={props.site.url} style={{backgroundColor}}>
        <img class={styles.icon} src={imageSource} alt={props.site.name + "-icon"} />
      </a>
    </div>
  )
}