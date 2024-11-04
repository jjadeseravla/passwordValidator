const isPasswordValid = (input) => {
  const minNumChars = 8;

  // Check if the input meets the criteria
  const hasCapitalLetter = /[A-Z]/.test(input);
  const hasLowerCaseLetter = /[a-z]/.test(input);
  const hasMinLength = input.length >= minNumChars;
  const hasNumber = /[1-9]/.test(input);

  return hasCapitalLetter &&
    hasLowerCaseLetter &&
    hasMinLength &&
    hasNumber;
}

const input = 'abcdefghijklmno';

export { isPasswordValid };