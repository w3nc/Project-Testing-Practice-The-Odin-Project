export default function (str) {
  if (!str) return str;

  const [first, ...rest] = [...str];

  return first.toUpperCase() + rest.join("");
}
