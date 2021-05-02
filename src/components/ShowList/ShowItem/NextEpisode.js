import React, { useMemo } from "react";

import styles from "./NextEpisode.module.scss";

function useContent(show) {
  return useMemo(() => {
    return show.formatContent();
  }, [show]);
}

function useProgressText(show) {
  return `seen: ${show.progress} episodes`;
}

export default function NextEpisode({ show }) {
  const content = useContent(show);
  const progressText = useProgressText(show);

  return (
    <div className={styles.container}>
      <div>
        {progressText}
      </div>
      <div>
        {content}
      </div>
    </div>
  )
}