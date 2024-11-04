const isPasswordValid = (input) => {
  const chars = input.split('');
  const minNumChars = 8;
  return chars.length > minNumChars;
}

const input = 'abcdefghijklmno';

export { isPasswordValid };