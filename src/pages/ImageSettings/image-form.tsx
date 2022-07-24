import React, {ChangeEvent, useState} from 'react';

import {Input} from '../../components/Form/Input';
import {Button} from '../../components/Form/Button';
import {Image} from '../../models/Image';

interface props {
  onImageCreated(image: Image): void;
}

export const ImageForm: React.FC<props> = (props: props) => {
  const [image, setImage] = useState<any>();

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files: FileList = event.target.files as FileList;

    if (files.length === 1) {
      setImage(files[0]);
    }
  };

  const handleSaveClick = async () => {
    const formData = new FormData();
    formData.set('image', image);
    formData.set('test', 'test');

    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/image`, {
      method: 'post',
      body: formData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((response) => {
      response.json().then((newImage) => {
        props.onImageCreated(newImage);
      });
    });
  };

  return (
    <div>
      <Input
        type='file'
        placeholder='Image'
        name='image'
        onChange={handleImageChange}
      />
      <Button onClick={handleSaveClick} variant='primary'>
        Save
      </Button>
    </div>
  );
};
