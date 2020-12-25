import React, { useEffect, useState } from 'react';
import useTokenBalance from '../utils/useTokenBalance';
import useTokenPrice from '../utils/useTokenPrice';
import Select from './select';

function Pay(props) {
  const [amount, setAmount] = useState(0);
  let balance = useTokenBalance(
    (props.activeToken && props.activeToken.address) || ''
  );
  let price = useTokenPrice(
    (props.activeToken && props.activeToken.address) || ''
  );

  console.log({ price });
  function handleAmountChange({ target }) {
    let regExpr = new RegExp(/[^a-zA-Z]/); // check for number
    if (!regExpr.test(target.value)) {
      setAmount('');
    } else {
      setAmount(target.value);
    }
  }
  return (
    <div>
      <div className='text-gray-400 flex justify-between'>
        <span>You Pay</span>
        <span>{balance && `Your Balance: ${balance}`}</span>
      </div>

      <div className='bg-gray-900 p-3 mt-2 rounded-lg border border-gray-400 relative'>
        <div className='text-gray-400 flex justify-between'>
          <span>{props.activeToken.name}</span>
          <span>≈ $5,305.85</span>
        </div>
        <div className='flex mt-3 justify-between w-full'>
          <Select
            tokens={props.tokens}
            activeToken={props.activeToken}
            updateSelected={props.setFromToken}
          />
          <input
            class='w-1/3 bg-gray-900 text-white border border-white rounded-lg pl-2 text-lg'
            placeholder='0.00'
            autoFocus
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Pay;
