import {useMemo} from 'react';

import Clock from '../Clock/Clock';
import background from '../../background-compressed.jpg';
import useWindowResize from '../../hooks/useWindowResize';
import SpeedDialShows from '../SpeedDialShows/SpeedDialShows';
import {BOOKMARK_WIDTH, SiteList} from '../SiteList/SiteList';

function usePadding() {
  const [windowWidth] = useWindowResize();

  return useMemo(() => {
    const count = Math.floor(windowWidth / BOOKMARK_WIDTH);
    const excessSpace = windowWidth - count * BOOKMARK_WIDTH;
    return excessSpace / 2;
  }, [windowWidth]);
}

export default function SpeedDial() {
  const padding = usePadding();

  return (
    <div
      className='w-screen h-screen flex flex-col bg-no-repeat bg-center bg-cover overflow-hidden'
      style={{
        backgroundImage: `url(${background})`,
        boxShadow: 'inset 0px 0px 200px 16px rgba(0,0,0,0.75)',
      }}
    >
      <SiteList padding={padding} />
      <div
        className='flex justify-between box-border h-1/3 flex-grow items-end'
        style={{
          padding: `40px ${padding}px`,
        }}
      >
        <Clock />
        <SpeedDialShows />
      </div>
    </div>
  );
}
