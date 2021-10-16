import React from 'react';

import {Input} from '../../components/Form/Input';
import {Divider} from '../../components/Divider/Divider';
import {FormField} from '../../components/Form/FormField';

export default function FormFieldComponents() {
  return (
    <div className='flex flex-col gap-4'>
      <h1>Form fields</h1>
      <Divider />
      <FormField label="Label">
        <Input placeholder="Test" />
      </FormField>
      <FormField label="Label">
        <Input placeholder="Test" />
      </FormField>
    </div>
  );
}
