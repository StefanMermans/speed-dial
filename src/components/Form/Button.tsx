import React, {ButtonHTMLAttributes} from "react";

import cn from 'classnames';

type Variant = 'primary' | 'default';
type ClassFunction = (disabled?: boolean) => string;

const getPrimaryClass = (disabled?: boolean) => {
  let className = 'bg-indigo-600 disabled:bg-indigo-900 active:bg-indigo-400 disabled:text-gray-400 ';

  if (!disabled) {
      className += " hover:bg-indigo-700";
  }

  return className;
}

const getDefaultClass = (disabled?: boolean) => {
  let className = 'active:bg-gray-600 disabled:text-gray-500';

  if (!disabled) {
      className += ' hover:bg-gray-700';
  }

  return className;
};

const COLORS: Record<Variant, ClassFunction> = {
  primary: getPrimaryClass,
  default: getDefaultClass,
}

type props = {
  variant?: Variant;
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<props> = (props) => {
  const variant = props.variant ?? 'default';

  return (
    <button 
      className={cn(
          COLORS[variant](props.disabled),
          "flex rounded-md px-4 py-2 disabled:cursor-default",
      )}
      {...props}
    >
      {props.children}
    </button>)
  ;
};
