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

  it('can set the status to an int', () => {
    const data = { status: 400 };
    const err = new ReactorRuntimeError(data);

    expect(err).toMatchObject({
      status: data.status,
    });
  });

  it('can not set the status to a string', () => {
    const data = { status: 'foobar' };
    const err = new ReactorRuntimeError(data);

    expect(err).toMatchObject({
      status: 500,
    });
  });
});
