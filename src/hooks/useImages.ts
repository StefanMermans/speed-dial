import {gql} from 'graphql-request';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';

import {client} from '../gqlClient';
import {Image} from '../models/Image';

export const useImages = (): [Image[], Dispatch<SetStateAction<Image[]>>] => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    client
      .request(
        gql`
          query {
            images {
              id
              url
              compressedUrl
              tags {
                id
                name
              }
            }
          }
        `,
        {},
        {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      )
      .then((data) => setImages(data.images));
  }, []);

  return [images, setImages];
};
