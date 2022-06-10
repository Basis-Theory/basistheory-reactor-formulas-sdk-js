const InvalidReactorFormulaError = require('../src/errors/InvalidReactorFormulaError');

describe('InvalidReactorFormulaError', () => {
  test('can be constructed with no args', () => {
    const err = new InvalidReactorFormulaError();

    expect(err).toMatchObject({
      errors: {
        error: [
          'Something went wrong. Please try again. If the problem persists, please contact support@basistheory.com.',
        ],
      },
      name: 'InvalidReactorFormulaError',
      status: 422,
    });
  });

  test('can be constructed with a message', () => {
    const message = 'this is a message';
    const err = new InvalidReactorFormulaError(message);

    expect(err).toMatchObject({
      errors: {
        error: [message],
      },
      name: 'InvalidReactorFormulaError',
      status: 422,
    });
  });
});
