import React, {useState} from 'react';

import {ImageForm} from './image-form';
import {useImages} from '../../hooks/useImages';
import {Button} from '../../components/Form/Button';
import {Image} from '../../models/Image';

export const ImageSettings: React.FC = () => {
  const [images, setImages] = useImages();
  const [isCreating, setIsCreating] = useState<boolean>(false);

  console.log('images', images);

  const handleAddClick = () => {
    setIsCreating(true);
  };

  const handleImageCreated = (image: Image): void => {
    setImages((prevState) => [...prevState, image]);
  };

  return (
    <div className='page'>
      <div className='page-content'>
        Image setings
        {images.map((image) => (
          <div key={image.id}>
            <img
              src={`${process.env.REACT_APP_BACKEND_URL}${image.compressedUrl}`}
              alt={'' + image.id}
            />
            <div>{image.url}</div>
          </div>
        ))}
        {!isCreating && (
          <Button variant='primary' onClick={handleAddClick}>
            Add image
          </Button>
        )}
        {isCreating && <ImageForm onImageCreated={handleImageCreated} />}
      </div>
    </div>
  );
};
