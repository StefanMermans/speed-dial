import useShows from "./useShows";
import {ShowItem} from "./ShowItem/ShowItem";

import styles from "./showList.module.scss";

export default function ShowList() {
  const [shows] = useShows();

  return (
    <div className={styles.showListPage}>
      <div className={styles.showListWrapper}>
        {shows.map(show => <ShowItem key={show.media.id} show={show} />)}
      </div>
    </div>
  );
}
