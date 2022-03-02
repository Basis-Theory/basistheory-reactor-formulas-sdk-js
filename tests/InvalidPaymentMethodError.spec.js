const { InvalidPaymentMethodError } = require('../src');

describe('InvalidPaymentMethodError', () => {
  test('can be constructed with no args', () => {
    const err = new InvalidPaymentMethodError();

    expect(err).toMatchObject({
      status: 402,
      message: 'Invalid Payment Method',
    });
  });

  test('can be constructed with errors', () => {
    const err = new InvalidPaymentMethodError('generic error');

    expect(err).toMatchObject({
      status: 402,
      message: 'Invalid Payment Method',
      errors: {
        error: ['generic error'],
      },
    });
  });
});
