import {useEffect, useState} from 'react';

import './grid.css';

export const Grid = () => {
  const [isTrue] = useState(false);

  useEffect(() => {
    console.log(isTrue);
  }, [isTrue]);

  return (
    <div className='page'>
      <div className='page-content'>
        <div className='grid'>
          <div>a</div>
          <div>b</div>
          <div>c</div>
          <div>d</div>
        </div>
      </div>
    </div>
  );
};
