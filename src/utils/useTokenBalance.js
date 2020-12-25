import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { useWallet } from 'use-wallet';
import getERC20Contract from '../contract/getERC20Contract';
import { eth } from './constants';

function useTokenBalance(contractAddr) {
  const [balance, setBalance] = useState('0.0');
  const wallet = useWallet();
  useEffect(() => {
    async function main() {
      let contract = getERC20Contract(contractAddr);

      if (wallet.status === 'connected') {
        if (contractAddr === eth.address) {
          setBalance(
            ethers.utils.formatUnits(wallet.balance)
          );
        } else {
          var ercBalance = await contract.balanceOf(
            wallet.account
          );
          setBalance(
            ethers.utils.formatUnits(ercBalance, 18)
          );
        }
      } else {
        setBalance('0.00');
      }
    }
    main();
  });

  return parseFloat(balance).toFixed(2);
}

export default useTokenBalance;
