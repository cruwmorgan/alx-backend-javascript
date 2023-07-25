export default function appendToEachArrayValue(array, appendString) {
  const m = [];
  for (const value of array) {
    m.push(appendString + value);
  }

  return m;
}
