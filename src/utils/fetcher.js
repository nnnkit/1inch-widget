export default function fetcher(route) {
  const url = route.startsWith('http')
    ? url
    : 'https://api.1inch.exchange/v2.0' + route;
  return fetch(url).then((r) => r.json());
}
