import React, {useMemo} from 'react';

import Show from '../../../models/Show';

interface props {
  show: Show;
}

function useContent(show: Show) {
  return useMemo(() => {
    return show.formatContent();
  }, [show]);
}

function useProgressText(show: Show) {
  return `seen: ${show.progress} episodes`;
}

export const NextEpisode: React.FC<props> = ({show}) => {
  const content = useContent(show);
  const progressText = useProgressText(show);

  return (
    <div className='flex flex-col items-end'>
      <div>{progressText}</div>
      <div>{content}</div>
    </div>
  );
};
