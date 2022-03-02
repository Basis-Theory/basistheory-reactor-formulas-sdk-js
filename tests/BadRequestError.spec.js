const { BadRequestError } = require('../src');

describe('BadRequestError', () => {
  test('can be constructed with no args', () => {
    const err = new BadRequestError();

    expect(err).toMatchObject({
      status: 400,
      message: 'Bad Request',
    });
  });

  test('can be constructed with errors', () => {
    const err = new BadRequestError('generic error');

    expect(err).toMatchObject({
      status: 400,
      message: 'Bad Request',
      errors: {
        error: ['generic error'],
      },
    });
  });
});
