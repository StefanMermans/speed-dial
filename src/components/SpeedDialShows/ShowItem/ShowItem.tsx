import React from 'react';

import {ThumbNail} from './thumbnail';
import Show from '../../../models/Show';
import {NextEpisode} from './NextEpisode';

interface props {
  show: Show;
}

export const ShowItem: React.FC<props> = ({show}) => {
  return (
    <div className='bg-gray-2 flex'>
      <ThumbNail show={show} />
      <div className='flex justify-between px-4 items-center w-full'>
        <div>
          <div>{show.media.title.romaji}</div>
          <div className='text-sm'>{show.media.title.english}</div>
        </div>
        <NextEpisode show={show} />
      </div>
    </div>
  );
};
