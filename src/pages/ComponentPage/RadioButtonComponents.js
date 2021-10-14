import React from 'react';

import Divider from '../../components/Divider/Divider';
import RadioButton from '../../components/Form/RadioButton';

export default function RadioButtonComponents() {
  return (
    <div className='flex flex-col gap-4'>
      <h1>Radio buttons</h1>
      <Divider />
      <div>
        <RadioButton label="Option A" value="A" name="option" />
        <RadioButton label="Option B" value="B" name="option" />
        <RadioButton label="Option C" value="C" name="option" />
      </div>
    </div>
  )
}