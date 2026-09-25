export default function analyzeArray(arr) {
  if (arr.length === 0) {
    return { average: 0, min: null, max: null, length: 0 };
  }

  const sum = arr.reduce((acc, n) => acc + n, 0);

  return {
    average: sum / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}
