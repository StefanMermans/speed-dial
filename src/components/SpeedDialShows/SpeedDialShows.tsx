import {useMemo} from 'react';

import {useHistory} from 'react-router-dom';

import Show from '../../models/Show';
import useShows from '../ShowList/useShows';
import {ShowItem} from '../ShowList/ShowItem/ShowItem';

import styles from './SpeedDialShows.module.scss';

function useSpeedDialShows(): [Show[], boolean] {
  const [shows, areShowLoading] = useShows();

  const sliced = useMemo(() => {
    return shows.slice(0, 5);
  }, [shows]);

  return [sliced, areShowLoading];
}

export default function SpeedDialShows() {
  const [shows, areShowLoading] = useSpeedDialShows();
  const history = useHistory();

  const handleShowMoreShows = () => {
    history.push('/shows');
  };

  return (
    <div
      className={`${styles.showList} ${areShowLoading ? styles.hidden : ''}`}
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
