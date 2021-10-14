const { InvalidPaymentMethodError } = require('../src');

describe('InvalidPaymentMethodError', () => {
  test('can be constructed with no args', () => {
    const err = new InvalidPaymentMethodError();

    expect(err).toMatchObject({
      status: 402,
      message: 'Invalid Payment Method',
    });
  });

  test('can be constructed with data', () => {
    const data = { gimme: 'some data' };
    const err = new InvalidPaymentMethodError(data);

    expect(err).toMatchObject({
      data,
    });
  });
});
