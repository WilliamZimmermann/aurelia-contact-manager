import { NoSelection } from './../../src/no-selection';

describe('no-selection', () => {
  it('says to select a contact', () => {
    expect(new NoSelection().message).toBe('Please, select a contact');
  });
});
