import {useEffect, useState} from 'react';

import {DAYS, MONTHS} from '../../constants';

import styles from './clock.module.scss';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const timeString = `${(hours < 10 ? '0' : '') + hours}:${
    (minutes < 10 ? '0' : '') + minutes
  }`;
  const clockContent = `${DAYS[time.getDay()]}, ${time.getDate()} ${
    MONTHS[time.getMonth()]
  } `;

  return (
    <div className={styles.container}>
      <div className={styles.time}>{timeString}</div>
      <div className={styles.dateContainer}>{clockContent}</div>
    </div>
  );
}
