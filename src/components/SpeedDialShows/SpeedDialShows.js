import React, {useMemo} from 'react';

import {useHistory} from 'react-router-dom';

import useShows from '../ShowList/useShows';
import ShowItem from '../../components/ShowList/ShowItem/ShowItem';

import styles from './SpeedDialShows.module.scss';

function useSpeedDialShows() {
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
          {shows.map((show) => (
            <ShowItem compact key={show.media.id} show={show} />
          ))}
        </>
      )}
      <div className={styles.showMore} onClick={handleShowMoreShows}>
        Show more
      </div>
    </div>
  );
}
