import React from 'react';

import Show from '../../../models/Show';

interface props {
  show: Show;
}

export const ShowItem: React.FC<props> = ({show}) => {
  return (
    <div className='flex gap-4'>
      <div>
        <img
          className='h-36 w-28 object-cover'
          src={`${show.media.coverImage.medium}`}
        />
      </div>
      <div>
        <div>{show.romaji}</div>
        <div className='text-sm text-gray-400'>{show.english}</div>
        <div className='pt-4'>{show.formatContent()}</div>
      </div>
    </div>
  );
};
