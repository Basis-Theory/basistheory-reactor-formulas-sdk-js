const { CustomHttpResponseError } = require('../src');

describe('CustomHttpResponse', () => {
  test('throws when constructed without status', () => {
    expect(() => new CustomHttpResponseError({})).toThrow(
      new Error('status is not a valid integer')
    );
  });

  test.each(['invalid', 0, -1, 600, 1.23, 123456, '200', '', undefined])(
    'throws when constructed with invalid status: %p',
    (status) => {
      expect(() => new CustomHttpResponseError({ status })).toThrow(
        new Error('status is not a valid integer')
      );
    }
  );

  test('can be constructed without headers or body', () => {
    const status = chance.integer({
      min: 100,
      max: 599,
    });
    const err = new CustomHttpResponseError({ status });

    expect(err.toResponseBody()).toMatchObject({
      status,
      headers: {},
      body: {},
    });
  });

  test('can be constructed with status, headers, and body', () => {
    const status = 200;
    const headers = { 'Content-Type': 'application/json' };
    const body = { foo: 'bar' };
    const err = new CustomHttpResponseError({
      status,
      headers,
      body,
    });

    expect(err.toResponseBody()).toMatchObject({
      status,
      headers,
      body,
    });
  });
});
