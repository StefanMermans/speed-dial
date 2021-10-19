import React from 'react';

import Show from '../../../models/Show';

interface props {
  show: Show;
}

export const ThumbNail: React.FC<props> = ({show}) => {
  return (
    <img
      className='h-14'
      alt={show.media.title.romaji}
      src={show.media.coverImage.medium}
    />
  );
};
