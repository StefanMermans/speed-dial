import React, {ChangeEvent} from 'react';

import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {Input} from '../Form/Input';
import {Button} from '../Form/Button';
import {Site} from '../../models/Site';

type FieldNames = 'url' | 'name' | 'icon' | 'backgroundColor';
interface props {
  site: Site;
  index: number;
  onDelete: (index: number) => void;
  onChange: (index: number, site: Site) => void;
}

export const SiteItem: React.FC<props> = ({
  site,
  index,
  onChange,
  onDelete,
}) => {
  const backgroundColor = site.backgroundColor ?? '#ffffff';

  const makeChangeHandler =
    (name: FieldNames) => (event: ChangeEvent<HTMLInputElement>) => {
      onChange(index, {
        ...site,
        [name]: event.target.value,
      });
    };

  const handleDelete = () => {
    onDelete(index);
  };

  return (
    <div className='flex justify-between items-start bg-gray-3 p-4 rounded-md shadow-md'>
      <div className='flex gap-4 items-center'>
        <div
          style={{backgroundColor}}
          className='w-24 h-24 flex justify-center items-center p-2 rounded-2xl overflow-hidden shadow-md'
        >
          <img className='w-full h-full' src={`/${site.icon}`} />
        </div>
        <div className='flex flex-col gap-4'>
          <Input
            placeholder='Name'
            value={site.name}
            onChange={makeChangeHandler('name')}
          />
          <Input
            placeholder='Url'
            value={site.url}
            onChange={makeChangeHandler('url')}
          />
        </div>
        <input
          type='color'
          value={backgroundColor}
          className='w-24'
          onChange={makeChangeHandler('backgroundColor')}
        />
      </div>
      <Button className='flex items-center gap-4' onClick={handleDelete}>
        <FontAwesomeIcon icon={faTimes} />
      </Button>
    </div>
  );
};
