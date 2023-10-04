const { CustomHttpResponse } = require('../src');

describe('CustomHttpResponse', () => {
  test('throws when constructed without status', () => {
    expect(() => new CustomHttpResponse({})).toThrow(
      new Error('status is not a valid integer')
    );
  });

  test.each(['invalid', 0, -1, 600, 1.23, 123456, '200', '', undefined])(
    'throws when constructed with invalid status: %p',
    (status) => {
      expect(() => new CustomHttpResponse({ status })).toThrow(
        new Error('status is not a valid integer')
      );
    }
  );

  test('can be constructed without headers or body', () => {
    const status = chance.integer({
      min: 100,
      max: 599,
    });
    const customHttpResponse = new CustomHttpResponse({ status });

    expect(customHttpResponse.toResponseBody()).toMatchObject({
      status,
      headers: {},
      body: {},
    });
  });

  test('can be constructed with status, headers, and body', () => {
    const status = 200;
    const headers = { 'Content-Type': 'application/json' };
    const body = { foo: 'bar' };
    const customHttpResponse = new CustomHttpResponse({
      status,
      headers,
      body,
    });

    expect(customHttpResponse.toResponseBody()).toMatchObject({
      status,
      headers,
      body,
    });
  });
});
