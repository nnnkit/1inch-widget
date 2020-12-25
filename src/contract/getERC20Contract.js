import { ethers } from 'ethers';
import ERC20ABI from './erc.abi.json';
import provider from './provider';

const getERC20Contract = (addr) =>
  new ethers.Contract(addr, ERC20ABI, provider);

export default getERC20Contract;
