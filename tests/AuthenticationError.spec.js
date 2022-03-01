const { AuthenticationError } = require('../src');

describe('AuthenticationError', () => {
  test('can be constructed with no args', () => {
    const err = new AuthenticationError();

    expect(err).toMatchObject({
      status: 401,
      message: 'Authentication Failed',
    });
  });

  test('can be constructed with data', () => {
    const data = { gimme: 'some data' };
    const err = new AuthenticationError(data);

    expect(err).toMatchObject({
      data,
    });
  });
});