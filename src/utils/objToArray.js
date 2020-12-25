export default function objToArray(obj) {
  let keys = Object.keys(obj);
  return keys.map((key) => {
    return obj[key];
  });
}
