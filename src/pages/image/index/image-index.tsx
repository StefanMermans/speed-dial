import React from 'react';
import {useImages} from '../../../hooks/useImages';
import {Image} from '../../../models/Image';
import {ImagePreview} from './partials/image-preview';

export const ImageIndex: React.FC = () => {
  const [images] = useImages();

  return (
    <div className='grid sm:grid-cols-4 xl:grid-cols-6'>
      {images.map((image: Image) => (
        <ImagePreview key={image.id} image={image} />
      ))}
    </div>
  );
};
