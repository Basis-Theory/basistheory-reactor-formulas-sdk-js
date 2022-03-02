const { ReactorRuntimeError } = require('../src');

describe('ReactorRuntimeError', () => {
  test('can be constructed with no args', () => {
    const err = new ReactorRuntimeError();

    expect(err).toMatchObject({
      status: 500,
      message: 'Reactor Runtime Error',
    });
  });

  test('can be constructed with errors', () => {
    const err = new ReactorRuntimeError('generic error');

    expect(err).toMatchObject({
      status: 500,
      message: 'Reactor Runtime Error',
      errors: {
        error: ['generic error'],
      },
    });
  });
});
