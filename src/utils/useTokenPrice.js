import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { eth } from './constants';
import fetcher from './fetcher';
async function getCoinId(contractAddr) {
  if (eth.address === contractAddr) {
    return 'ethereum';
  } else {
    let coin = await fetch(
      `https://api.coingecko.com/api/v3/coins/ethereum/contract/${contractAddr}`
    ).then((res) => res.json());
    return coin.id;
  }
}
function useTokenPrice(contractAddr) {
  var getURL = (tokenID) =>
    `https://api.coingecko.com/api/v3/simple/price?ids=${tokenID}&vs_currencies=usd`;

  const [price, setPrice] = useState();
  useEffect(() => {
    async function main() {
      let id = await getCoinId(contractAddr);
      console.log({ id });
      let price = await fetch(getURL(id)).then((res) =>
        res.json()
      );
      setPrice(price);
    }
    main();
  }, []);
  return price;
}

export default useTokenPrice;
