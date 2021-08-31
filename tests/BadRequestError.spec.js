const { BadRequestError } = require('../src');

describe('BadRequestError', () => {
  it('can be constructed with no args', () => {
    const err = new BadRequestError();

    expect(err).toMatchObject({
      status: 400,
      message: 'Bad Request',
    });
  });

  it('can be constructed with data', () => {
    const data = { gimme: ' some data' };
    const err = new BadRequestError(data);

    expect(err).toMatchObject({
      data,
    });
  });
});
