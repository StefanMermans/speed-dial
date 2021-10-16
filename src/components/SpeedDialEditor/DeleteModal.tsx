import React from 'react';

import {Modal} from '../Modal/Modal';
import {Site} from '../../models/Site';
import {Button} from '../Form/Button';

interface props {
  site?: Site;
  onCancel: () => void;
  onConfirm: () => void;
}

export const DeleteModal: React.FC<props> = ({site, onCancel, onConfirm}) => {
  return (
    <Modal
      onClose={onCancel}
      open={!!site}
      className='flex flex-col gap-4 w-screen max-w-xl'
    >
      <h1>Delete site</h1>
      <div>Delete: {site?.name}?</div>
      <div className='flex gap-4'>
        <Button onClick={onConfirm} variant='primary'>
          Delete
        </Button>
        <Button onClick={onCancel}>Cancel</Button>
      </div>
    </Modal>
  );
};
