import React from 'react';

import InputComponents from './InputComponents';
import ButtonComponents from './ButtonComponents';
import HeaderComponents from './HeaderComponents';
import FormFieldComponents from './FormFieldComponents';
import RadioButtonComponents from './RadioButtonComponents';

export default function ComponentPage() {
  return (
    <div className="page">
      <div className="page-content flex flex-col gap-4">
        <ButtonComponents />
        <InputComponents />
        <FormFieldComponents />
        <HeaderComponents />
        <RadioButtonComponents />
      </div>
    </div>
  );
}