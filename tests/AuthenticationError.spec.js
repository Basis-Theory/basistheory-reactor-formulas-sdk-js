const { AuthenticationError } = require('../src');

describe('AuthenticationError', () => {
  it('can be constructed with no args', () => {
    const err = new AuthenticationError();

    expect(err).toMatchObject({
      status: 401,
      message: 'Authentication Failed',
    });
  });

  it('can be constructed with data', () => {
    const data = { gimme: 'some data' };
    const err = new AuthenticationError(data);

    expect(err).toMatchObject({
      data,
    });
  });
});
