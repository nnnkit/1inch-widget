import React from 'react';
import { useWallet } from 'use-wallet';
import { getSmallNumber } from '../utils/bn';

function Connected(props) {
  const wallet = useWallet();
  return (
    <div className='text-white flex justify-end mb-6'>
      <button className='bg-blue-500 py-2 pl-6 pr-1 rounded-full'>
        <span>
          {getSmallNumber(wallet.balance).slice(0, 6)} ETH
        </span>
        <span className='bg-blue-700 px-4 py-2 rounded-full ml-4'>
          {`${wallet && wallet.account.slice(0, 6)}...${
            wallet && wallet.account.slice(-4)
          }`}
        </span>
      </button>
    </div>
  );
}

export default Connected;
