const InvalidReactorFormulaError = require('../src/errors/InvalidReactorFormulaError');

describe('InvalidReactorFormulaError', () => {
  test('can be constructed with no args', () => {
    const err = new InvalidReactorFormulaError();

    expect(err).toMatchObject({
      status: 422,
      message: '',
    });
  });

  test('can be constructed with a message', () => {
    const message = 'this is a message';
    const err = new InvalidReactorFormulaError(message);

    expect(err).toMatchObject({
      message,
    });
  });
});