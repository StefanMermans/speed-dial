import React from 'react';

import cn from 'classnames';

interface props {
  open: boolean;
  className?: string;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<props> = ({
  open,
  onClose,
  children,
  className,
}) => {
  if (!open) {
    return null;
  }

  const handleContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div
      className='absolute top-0 left-0 h-screen w-screen bg-black bg-opacity-70'
      onClick={onClose}
    >
      <div
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        onClick={handleContentClick}
      >
        <div
          className={cn('bg-gray-1 p-4 rounded-md shadow-md', className ?? '')}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
