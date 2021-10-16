import React from 'react';

import {Input} from '../../components/Form/Input';
import {Divider} from '../../components/Divider/Divider';

export default function InputComponents() {
  return (
    <div className='flex gap-4 flex-col'>
      <h1>Inputs</h1>
      <Divider />
      <Input value="input" />
      <Input disabled value="Disabled" />
      <Input placeholder="Placeholder" />
    </div>
  );
}