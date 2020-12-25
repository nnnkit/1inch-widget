import React from 'react';
import { useWallet } from 'use-wallet';

let walletsInfo = [
  {
    name: 'MetaMask',
    icon:
      'https://app.uniswap.org/static/media/metamask.023762b6.png',
    connecter: 'injected',
  },
  {
    name: 'WalletConnect',
    icon:
      'https://app.uniswap.org/static/media/walletConnectIcon.8215855c.svg',
    connecter: 'walletconnect',
  },
];

function WalletsModal(props) {
  return (
    <div className='fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center'>
      <div className='fixed inset-0 transition-opacity'>
        <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
      </div>

      <div className='bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:p-6'>
        <button
          className='absolute right-2 top-2'
          onClick={() => props.setActiveModal('')}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
        <div className='px-4 py-5 bg-gray-50 sm:p-4 sm:pb-6'>
          <p className='text-black text-sm uppercase tracking-wider'>
            Connect Your Wallet
          </p>
          {walletsInfo.map((wallet) => (
            <WalletButton key={wallet.name} {...wallet} />
          ))}
          <p className='mt-2 text-sm text-blue-600 text-center pt-3 flex justify-center items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='w-4 h-4 stroke-current mr-2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            Use wallet connect to connect to any wallet
          </p>
        </div>
      </div>
    </div>
  );
}

function WalletButton(props) {
  const wallet = useWallet();
  const activate = (connector) => wallet.connect(connector);
  return (
    <button
      type='button'
      onClick={() => activate(props.connecter || '')}
      className='mt-3 inline-flex w-full justify-between items-center px-4 py-3 rounded-md border border-transparent text-base text-gray-800 border-gray-400 hover:bg-gray-100 focus:outline-none focus:shadow-outline-blue active:bg-blue-700 tracking-wide'
    >
      <div className='flex justify-center items-center'>
        <img src={props.icon} className='w-8 h-6' alt='' />
        <p className='ml-4'>{props.name}</p>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        className='text-gray-400 w-6 h-8'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 5l7 7-7 7'
        />
      </svg>
    </button>
  );
}

export default WalletsModal;
