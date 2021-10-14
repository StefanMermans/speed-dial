import React from 'react';

import Button from "../../components/Form/Button";

export default function ButtonComponents() {
  return (
    <div className='flex gap-4 flex-col'>
      <h1>
        Buttons
      </h1>
      <div className='flex gap-4 flex-col'>
        <div className='flex gap-4'>
          <Button>
            Button
          </Button>
          <Button disabled>
            Disabled
          </Button>
        </div>
        <div className='flex gap-4'>
          <Button variant="primary">
            Primary
          </Button>
          <Button disabled variant="primary">
            Primary disabled
          </Button>
        </div>
      </div>
    </div>
  );
}