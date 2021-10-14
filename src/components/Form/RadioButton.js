import React from 'react'

export default function RadioButton({name, value, label}) {
  return (
    <div className='flex gap-4 items-center'>
      <input className='' id={value} type="radio" name={name} value={value} />
      <label htmlFor={value}>{label}</label>
    </div>
  );
}