const { AuthorizationError } = require('../src');

describe('AuthorizationError', () => {
  test('can be constructed with no args', () => {
    const err = new AuthorizationError();

    expect(err).toMatchObject({
      status: 403,
      message: 'Forbidden',
    });
  });

  test('can be constructed with errors', () => {
    const err = new AuthorizationError('generic error');

    expect(err).toMatchObject({
      status: 403,
      message: 'Forbidden',
      errors: {
        error: ['generic error'],
      },
    });
  });
});
