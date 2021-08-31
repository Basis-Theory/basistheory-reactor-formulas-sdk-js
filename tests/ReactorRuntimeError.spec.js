const { ReactorRuntimeError } = require('../src');

describe('ReactorRuntimeError', () => {
  it('can be constructed with no args', () => {
    const err = new ReactorRuntimeError();

    expect(err).toMatchObject({
      status: 500,
      message: 'Reactor Runtime Error',
    });
  });

  it('can be constructed with data', () => {
    const data = { gimme: 'some data' };
    const err = new ReactorRuntimeError(data);

    expect(err).toMatchObject({
      data,
    });
  });
});
