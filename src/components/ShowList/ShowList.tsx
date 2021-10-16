import useShows from './useShows';
import {ShowItem} from './ShowItem/ShowItem';

export default function ShowList() {
  const [shows] = useShows();

  return (
    <div className='page items-start'>
      <div className='page-content'>
        {shows.map((show) => (
          <ShowItem key={show.media.id} show={show} />
        ))}
      </div>
    </div>
  );
}
