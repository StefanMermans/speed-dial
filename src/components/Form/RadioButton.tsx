import React from 'react';

interface props {
  name: string;
  value: string;
  label: string;
}

export const RadioButton: React.FC<props> = ({name, value, label}) => {
  return (
    <div className='flex gap-4 items-center'>
      <input className='' id={value} type='radio' name={name} value={value} />
      <label htmlFor={value}>{label}</label>
    </div>
  );
};
