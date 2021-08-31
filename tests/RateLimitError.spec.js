const { RateLimitError } = require('../src');

describe('RateLimitError', () => {
  it('can be constructed with no args', () => {
    const err = new RateLimitError();

    expect(err).toMatchObject({
      status: 429,
      message: 'Rate Limit Exceeded',
    });
  });

  it('can be constructed with data', () => {
    const data = { gimme: 'some data' };
    const err = new RateLimitError(data);

    expect(err).toMatchObject({
      data,
    });
  });
});
