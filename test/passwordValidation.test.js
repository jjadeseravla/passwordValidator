import { isPasswordValid } from '../passwordValidation';

describe('is password valid', () => {
  it('has an input', () => {
    expect(isPasswordValid('abc')).toBe(false);
  });

  it('has more than 8 characters', () => {
    expect(isPasswordValid('abcdefghijklmno')).toBe(false);
  });

  it('has more than 8 chars and a capital letter', () => {
    expect(isPasswordValid('Abcdefghij')).toBe(false);
  });

  it('also has a lower letter', () => {
    expect(isPasswordValid('Abvdefhigjsd')).toBe(false);
  });

  it('has more than 8 chars, contains lower,capital letter and number', () => {
    expect(isPasswordValid('Abcdefgh9')).toBe(false);
  });

  it('has more than 8 chars, contains lower,capital letter, number and underscore', () => {
    expect(isPasswordValid('Abcde_fgh9')).toBe(true);
  });
})