import React, { useEffect, useState } from 'react';
import Select from './select';

function Receive(props) {
  return (
    <div>
      <div className='text-gray-400 flex justify-between'>
        <span>You Receive</span>
      </div>

      <div className='bg-gray-900 p-3 mt-2 rounded-lg border border-gray-400 relative'>
        <div className='text-gray-400 flex justify-between'>
          <span>{props.activeToken.name}</span>
          <span>≈ $5,305.85</span>
        </div>
        <div className='w-full'>
          <Select
            updateSelected={props.setToToken}
            tokens={props.tokens}
            activeToken={props.activeToken}
          />
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Receive;
