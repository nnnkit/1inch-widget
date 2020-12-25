import { ethers } from 'ethers';

export function getBigNumber(value) {
  return ethers.utils.formatUnits(value, 18);
}

export function getSmallNumber(value) {
  return ethers.utils.formatEther(value);
}

export function sleep(milliseconds) {
  return new Promise((resolve) =>
    setTimeout(resolve, milliseconds)
  );
}
