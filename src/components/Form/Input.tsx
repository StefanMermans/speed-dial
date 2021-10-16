import React, {InputHTMLAttributes} from 'react';

type props = {} & InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<props> = (props) => {
  return (
    <input
      className='
      bg-gray-1 px-4 py-3 rounded-md disabled:text-gray-500
        focus:ring-2 focus:ring-indigo-600 outline-none
      '
      {...props}
    />
  );
};
