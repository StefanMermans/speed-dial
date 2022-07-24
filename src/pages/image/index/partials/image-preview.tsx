import React from 'react';
import {Image} from '../../../../models/Image';
import {formatUrl} from '../../../../utils/urlHelpers';

interface props {
  image: Image;
}

export const ImagePreview: React.FC<props> = (props) => {
  return (
    <div className='aspect-square'>
      <img
        className='w-full h-full object-cover'
        src={formatUrl(props.image.compressedUrl)}
        alt={`${props.image.id}`}
      />
    </div>
  );
};
