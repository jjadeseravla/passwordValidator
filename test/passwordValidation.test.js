import { isPasswordValid } from '../passwordValidation';

describe('is password valid', () => {
  it('has an input', () => {
    expect(isPasswordValid('abc')).toBe(false);
  });

  it('has more than 8 characters', () => {
    expect(isPasswordValid('abcdefghijklmno')).toBe(true);
  })
})