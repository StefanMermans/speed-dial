import React from 'react';

import ThumbNail from './thumbnail';
import NextEpisode from './NextEpisode';

import styles from './showItem.module.scss';

export default function ShowItem({show, compact}) {
  return (
    <div className={`${styles.showItem} ${compact ? styles.compact : ''}`}>
      <ThumbNail show={show} />
      <div className={styles.content}>
        <div>
          <div className={styles.romaji}>{show.media.title.romaji}</div>
          <div className={styles.english}>{show.media.title.english}</div>
        </div>
        <NextEpisode show={show} />
      </div>
    </div>
  );
}
