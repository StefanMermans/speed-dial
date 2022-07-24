import {useMemo} from 'react';

import cn from 'classnames';
import {useNavigate} from 'react-router-dom';

import Show from '../../models/Show';
import {ShowItem} from './ShowItem/ShowItem';
import useShows from '../../pages/ShowList/useShows';

function useSpeedDialShows(): [Show[], boolean] {
  const [shows, areShowLoading] = useShows();

  const sliced = useMemo(() => {
    return shows.slice(0, 5);
  }, [shows]);

  return [sliced, areShowLoading];
}

export default function SpeedDialShows() {
  const [shows, areShowLoading] = useSpeedDialShows();
  const navigate = useNavigate();

  const handleShowMoreShows = () => {
    navigate('/shows');
  };

  if (areShowLoading) {
    return null;
  }

  return (
    <div
      className={cn('flex flex-col transition-transform max-h-72', {
        'translate-y-72': areShowLoading,
        'translate-y-0': !areShowLoading,
      })}
    >
      {areShowLoading || (
        <>
          {shows.map((show: Show) => (
            <ShowItem key={show.media.id} show={show} />
          ))}
        </>
      )}
      <div
        className='flex justify-center cursor-pointer'
        onClick={handleShowMoreShows}
      >
        Show more
      </div>
    </div>
  );
}
