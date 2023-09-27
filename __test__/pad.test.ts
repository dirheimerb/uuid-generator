import { pad } from '../src/utils/pad';

// Test basic padding functionality
it('should correctly pad numbers with zeroes', () => {
  expect(pad(15, 4)).toBe('000f');
  expect(pad(255, 4)).toBe('00ff');
  expect(pad(4095, 4)).toBe('0fff');
  expect(pad(65535, 4)).toBe('ffff');
});

// Test when padding is not required
it('should not add extra zeroes if length is already satisfied', () => {
  expect(pad(15, 1)).toBe('f');
  expect(pad(255, 2)).toBe('ff');
});

// Test with length less than the number's string representation
it('should return the original number if length is less than the length of number representation', () => {
  expect(pad(255, 1)).toBe('ff');
  expect(pad(4095, 2)).toBe('fff');
});

// Test with zero padding length
it('should return the original number if padding length is zero', () => {
  expect(pad(15, 0)).toBe('f');
});

// Test with negative padding length
it('should return the original number if padding length is negative', () => {
  expect(pad(15, -1)).toBe('f');
});

// Test with zero number
it('should correctly pad zero', () => {
  expect(pad(0, 4)).toBe('0000');
});

// Test with negative number
it('should correctly pad negative numbers', () => {
  expect(pad(-15, 4)).toBe('-000f');
  expect(pad(-255, 4)).toBe('-00ff');
  expect(pad(-4095, 4)).toBe('-0fff');
  expect(pad(-65535, 4)).toBe('-ffff');
});

// Test with negative number and length less than the number's string representation
it('should return the original number if length is less than the length of number representation', () => {
  expect(pad(-255, 1)).toBe('-ff');
  expect(pad(-4095, 2)).toBe('-fff');
});

// Test with negative number and zero padding length
it('should return the original number if padding length is zero', () => {
  expect(pad(-15, 0)).toBe('-f');
});

// Test with negative number and negative padding length
it('should return the original number if padding length is negative', () => {
  expect(pad(-15, -1)).toBe('-f');
});

// Test with negative zero
it('should correctly pad negative zero', () => {
  expect(pad(-0, 4)).toBe('0000');
});

// Test with Infinity
it('should return Infinity if the number is Infinity', () => {
  expect(pad(Infinity, 4)).toBe('Infinity');
});

// Test with negative Infinity
it('should return -Infinity if the number is -Infinity', () => {
  expect(pad(-Infinity, 4)).toBe('-Infinity');
});
