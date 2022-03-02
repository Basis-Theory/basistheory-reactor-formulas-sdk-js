const { RateLimitError } = require('../src');

describe('RateLimitError', () => {
  test('can be constructed with no args', () => {
    const err = new RateLimitError();

    expect(err).toMatchObject({
      status: 429,
      message: 'Rate Limit Exceeded',
    });
  });

  test('can be constructed with errors', () => {
    const err = new RateLimitError('generic error');

    expect(err).toMatchObject({
      status: 429,
      message: 'Rate Limit Exceeded',
      errors: {
        error: ['generic error'],
      },
    });
  });
});
