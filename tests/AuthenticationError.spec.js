const { AuthenticationError } = require('../src');

describe('AuthenticationError', () => {
  test('can be constructed with no args', () => {
    const err = new AuthenticationError();

    expect(err).toMatchObject({
      status: 401,
      message: 'Authentication Failed',
    });
  });

  test('can be constructed with errors', () => {
    const err = new AuthenticationError('generic error');

    expect(err).toMatchObject({
      status: 401,
      message: 'Authentication Failed',
      errors: {
        error: ['generic error'],
      },
    });
  });
});
