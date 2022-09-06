/*
describe(string, function) = testsuite
it(string, function) = individual test
expect(actualValue).toBe(expectedValue)
                      ☝ = matcher
*/

import { CamelCasePipe } from './camel-case.pipe';

describe('Pipe: CamelCasePipe', () => {
  let sut: CamelCasePipe;
  beforeEach(() => {
    sut = new CamelCasePipe();
  });

  it('should camelcase a single word', () => {
    const output = sut.transform('hAlLO');
    expect(output).toBe('hallo');
  });

  it('should camelcase a line of text', () => {
    const output = sut.transform('hallo DAAR even iETs testen');
    expect(output).toBe('halloDaarEvenIetsTesten');
  });

  it('should handle multiple space gracefully', () => {
    const output = sut.transform('hallo DAAR     even iETs    testen');
    expect(output).toBe('halloDaarEvenIetsTesten');
  });

  it('should replace an undefined value wityh an empty string', () => {
    const output = sut.transform(undefined)
    expect(output).toBe('');
  })
});
