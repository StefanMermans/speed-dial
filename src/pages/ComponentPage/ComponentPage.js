import React from 'react';

import InputComponents from './InputComponents';
import ButtonComponents from './ButtonComponents';

export default function ComponentPage() {
  return (
    <div className="page">
      <div className="page-content flex flex-col gap-4">
        <ButtonComponents />
        <InputComponents />
      </div>
    </div>
  );
}