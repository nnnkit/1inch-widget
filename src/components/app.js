import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { useWallet } from 'use-wallet';
import { dai, eth } from '../utils/constants';
import fetcher from '../utils/fetcher';
import objToArray from '../utils/objToArray';
import ConnectWallet from './connect-wallet';
import Connected from './connected';
import Excahnge from './exchange';
import SwapInfo from './swap-info';
import WalletsModal from './wallets';
import Pay from './pay';
import Receive from './receive';

function App(props) {
  const [fromToken, setFromToken] = useState(dai);
  const [toToken, setToToken] = useState(eth);
  const { data, error } = useSWR('/tokens', fetcher);
  const [activeModal, setActiveModal] = useState('');
  const wallet = useWallet();
  const isConnected = wallet.status === 'connected';
  const isDisconnected = wallet.status === 'disconnected';

  console.log({ fromToken, toToken });
  function displayModal(name) {
    switch (name) {
      case 'wallet':
        return (
          <WalletsModal setActiveModal={setActiveModal} />
        );
      default:
        return;
    }
  }

  useEffect(() => {
    if (isConnected) {
      setActiveModal('');
    }
  }, [wallet.status]);

  return (
    <div class='bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all max-w-md mx-auto mt-4'>
      <div class='bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
        {isConnected ? (
          <Connected />
        ) : (
          <ConnectWallet setActiveModal={setActiveModal} />
        )}
        <Pay
          tokens={data && objToArray(data.tokens)}
          activeToken={fromToken}
          setFromToken={setFromToken}
        />
        <Excahnge />
        <Receive
          tokens={data && objToArray(data.tokens)}
          activeToken={toToken}
          setToToken={setToToken}
        />
        {displayModal(activeModal)}
        {isDisconnected && (
          <ConnectWallet setActiveModal={setActiveModal} />
        )}
        <SwapInfo />
      </div>
    </div>
  );
}

export default App;
