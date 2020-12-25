import React from 'react';
import ReactDOM from 'react-dom';
import { UseWalletProvider } from 'use-wallet';
import App from './components/app';
import './styles/index.css';

if (process.env.NODE_ENV === 'development') {
  ReactDOM.render(
    <UseWalletProvider
      chainId={1}
      connectors={{
        walletconnect: {
          rpcUrl: `https://cloudflare-eth.com`,
        },
      }}
    >
      <App />
    </UseWalletProvider>,
    document.getElementById('root')
  );
}

export function init() {
  ReactDOM.render(
    <UseWalletProvider
      chainId={1}
      connectors={{
        walletconnect: {
          rpcUrl: `https://cloudflare-eth.com`,
        },
      }}
    >
      <App />
    </UseWalletProvider>,
    document.getElementById('1inchWidget')
  );
}
