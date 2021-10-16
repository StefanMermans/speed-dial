import React, {ChangeEvent, InputHTMLAttributes, useState} from 'react';

import cn from 'classnames';

type LabelPosition = 'left' | 'right';
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;
type props = {
  label?: string;
  labelPositon?: LabelPosition;
  onChange?: (checked: boolean) => any;
} & HTMLInputProps;

export const Switch: React.FC<props> = (props) => {
  const [isOn, setIsOn] = useState<boolean>(props.checked ?? false);
  const labelPosition = props.labelPositon ?? 'right';
  const isControlled = props.checked !== undefined && props.checked !== null;
  const checked = isControlled ? props.checked : isOn;

  const updateState = (newIsOn: boolean) => {
    if (isControlled) {
      props.onChange?.(newIsOn);
    } else {
      setIsOn(newIsOn);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    updateState(event.target.checked);
  };

  const handleClick = () => {
    if (props.disabled) {
      return;
    }

    updateState(!checked);
  };
  
  return (
    <div className='flex'>
      <input
        {...props}
        id={props.id}
        checked={checked}
        type='checkbox'
        name={props.name}
        className='hidden'
        onChange={handleChange}
      />
      <div
        className={cn('flex w-auto items-center', {
          'flex-row-reverse': labelPosition === 'left',
          'cursor-pointer': !props.disabled,
        })}
        onClick={handleClick}
      >
        <div
          className={cn('w-16 h-9 rounded-full pt-1 transition-colors', {
            'bg-indigo-900': props.disabled,
            'bg-gray-400': !checked && !props.disabled,
            'bg-indigo-400': checked && !props.disabled,
          })}
        >
          <div
            className={cn('w-7 h-7 rounded-full ml-1 transition-transform', {
              'transform translate-x-7': checked,
              'bg-indigo-600': !props.disabled,
              'bg-indigo-500': props.disabled,
            })}
          />
        </div>
        {props.label && (
          <label
            className={cn('select-none', {
              'ml-4': labelPosition === 'right',
              'mr-4': labelPosition === 'left',
              'cursor-pointer': !props.disabled,
              'text-gray-500': props.disabled,
            })}
          >
            {props.label}
          </label>
        )}
      </div>
    </div>
  );
};
