import { Web3Provider } from '@ethersproject/providers';

if (typeof window !== 'undefined' && window.ethereum) {
  var provider = new Web3Provider(window.ethereum);
} else {
  var provider = new Web3Provider(
    `https://cloudflare-eth.com`
  );
}

// 'https://cloudflare-eth.com'

export default provider;
