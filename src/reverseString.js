export default function reverseString(str) {
  if (!str) return str;

  return [...str].reverse().join("");
}
