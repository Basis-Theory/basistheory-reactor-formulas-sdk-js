const { ServiceUnavailableError } = require('../src');

describe('ServiceUnavailableError', () => {
  test('can be constructed with no args', () => {
    const err = new ServiceUnavailableError();

    expect(err).toMatchObject({
      status: 503,
      message: 'Service Unavailable',
    });
  });

  test('can be constructed with errors', () => {
    const err = new ServiceUnavailableError('generic error');

    expect(err).toMatchObject({
      status: 503,
      message: 'Service Unavailable',
      errors: {
        error: ['generic error'],
      },
    });
  });
});
