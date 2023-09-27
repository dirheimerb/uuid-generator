/**
 * @function pad
 * @description Pads a number with leading zeros
 * @param {number} num The number to pad
 * @param {number} length The length of the resulting string
 * @returns {string} The padded string
 * @private
 */
export function pad(num: number, length: number): string {
  const isNegative = num < 0;
  const absoluteHex = Math.abs(num).toString(16); // Convert the absolute value to hexadecimal

  let paddingZeros = '';
  for (let i = 0; i < length - absoluteHex.length; i++) {
    paddingZeros += '0';
  }

  return (isNegative ? '-' : '') + paddingZeros + absoluteHex;
}
