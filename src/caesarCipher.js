function normalizeShift(shift) {
  return ((shift % 26) + 26) % 26;
}


function shiftChar(char, n) {
  const code = char.charCodeAt(0);


  if (code >= 65 && code <= 90) {
    return String.fromCharCode(((code - 65 + n) % 26) + 65);
  }


  if (code >= 97 && code <= 122) {
    return String.fromCharCode(((code - 97 + n) % 26) + 97);
  }

 
  return char;
}


export default function caesarCipher(str, shift) {
  if (!str) return str;
  const n = normalizeShift(shift);
  return [...str].map((ch) => shiftChar(ch, n)).join("");
}
