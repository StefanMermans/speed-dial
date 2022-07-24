import React, {ReactNode} from 'react';

type props = {
  label: string;
  children: ReactNode;
};

export const FormField = (props: props) => {
  return (
    <div className='flex flex-col'>
      <label className='mb-4'>{props.label}</label>
      {props.children}
    </div>
  );
};
