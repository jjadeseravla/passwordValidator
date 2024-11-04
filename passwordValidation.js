const isPasswordValid = (input) => {
  const chars = input.split('');
  const minNumChars = 8;

  const hasCapitalLetter = chars.some(item => /[A-Z]/.test(item))
  return hasCapitalLetter && (chars.length > minNumChars);
}

const input = 'abcdefghijklmno';

export { isPasswordValid };