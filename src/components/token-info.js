import React, { useEffect, useState } from 'react';
import getERC20Contract from '../contract/getERC20Contract';
import useTokenBalance from '../utils/useTokenBalance';
import Select from './select';

function TokenInfo(props) {
  let balance = useTokenBalance(props.activeToken.address);

  return (
    <div>
      <div className='text-gray-400 flex justify-between'>
        <span>{props.label}</span>
        <span>
          {!props.showBalance
            ? ''
            : balance && `Your Balance: ${balance}`}
        </span>
      </div>

      <div className='bg-gray-900 p-3 mt-2 rounded-lg border border-gray-400 relative'>
        <div className='text-gray-400 flex justify-between'>
          <span>{props.activeToken.name}</span>
          <span>≈ $5,305.85</span>
        </div>
        <div className='w-28'>
          <Select
            tokens={props.tokens}
            activeToken={props.activeToken}
          />
        </div>
      </div>
    </div>
  );
}

export default TokenInfo;
