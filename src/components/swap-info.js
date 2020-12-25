import React from 'react';

function SwapInfo(props) {
  return (
    <div className='border border-gray-400 rounded-lg p-3 text-white mt-6'>
      <ul className='space-y-1'>
        <li className='flex justify-between'>
          <span>Rate</span>
          <span>1 ETH = 598.089 PAN</span>
        </li>
        <li className='flex justify-between'>
          <span>Inverse Rate</span>
          <span>1 ETH = 598.089 PAN</span>
        </li>
        <li className='flex justify-between'>
          <span>Estimated Fee</span>
          <span>≈ $7.82</span>
        </li>
        <li className='flex justify-between'>
          <span>You Save</span>
          <span>≈ $0.72</span>
        </li>
      </ul>
    </div>
  );
}

export default SwapInfo;
