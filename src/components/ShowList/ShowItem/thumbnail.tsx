import React from 'react';

import Show from '../../../models/Show';

import styles from './thumbnail.module.scss';

interface props {
  show: Show;
}

export const ThumbNail: React.FC<props> = ({show}) => {
  return (
    <img
      alt={show.media.title.romaji}
      className={styles.thumbnail}
      src={show.media.coverImage.medium}
    />
  );
};
