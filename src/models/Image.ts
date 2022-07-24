import {Tag} from './Tag';

export type Image = {
  id: number;
  url: string;
  tags: Tag[];
  compressedUrl: string;
};
