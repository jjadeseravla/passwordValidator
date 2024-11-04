const isPasswordValid = (input) => {
  const minNumChars = 8;

  // Check if the input meets the criteria
  const hasCapitalLetter = /[A-Z]/.test(input);
  const hasLowerCaseLetter = /[a-z]/.test(input);
  const hasMinLength = input.length >= minNumChars;

  return hasCapitalLetter && hasLowerCaseLetter && hasMinLength;
}

const input = 'abcdefghijklmno';

export { isPasswordValid };