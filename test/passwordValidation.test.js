import { isPasswordValid } from '../passwordValidation';

describe('is password valid', () => {
  it('has an input', () => {
    expect(isPasswordValid('abc')).toBe(true);
  })
})