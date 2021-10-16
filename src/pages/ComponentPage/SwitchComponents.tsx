import React, {useState} from 'react';

import {Switch} from '../../components/Form/Switch';
import {Divider} from '../../components/Divider/Divider';

export const SwitchComponents: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (checked: boolean): void => {
    setIsChecked(checked);
  };

  return (
    <div className='flex flex-col gap-4'>
      <h1>Switches</h1>
      <Divider />
      <div className='flex gap-4'>
        <Switch label='Left label' labelPositon='left' />
        <Switch label='Switch' />
      </div>
      <div className='flex gap-4'>
        <Switch label='Disabled' disabled />
        <Switch label='Disabled checked' disabled checked={true} />
      </div>
      <div className='flex gap-4'>
        <Switch
          label='Controlled'
          onChange={handleChange}
          checked={isChecked}
        />
        <Switch
          label='Controlled disabled'
          onChange={handleChange}
          checked={isChecked}
          disabled
        />
      </div>
    </div>
  );
};
