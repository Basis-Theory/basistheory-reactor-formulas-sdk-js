const { InvalidReactorConfigurationError } = require('../src');

describe('InvalidReactorConfigurationError', () => {
  test('can be constructed with no args', () => {
    const err = new InvalidReactorConfigurationError();

    expect(err).toMatchObject({
      message: 'Invalid Reactor Configuration',
      status: 400,
      errors: {},
    });
  });

  test('can be constructed with invalid properties containing a single validation error', () => {
    const err = new InvalidReactorConfigurationError({
      property1: 'error 1',
      property2: 'error 2',
    });

    expect(err).toMatchObject({
      errors: {
        property1: ['error 1'],
        property2: ['error 2'],
      },
    });
  });

  test('sanitizes errors', () => {
    const errors = {
      property1: ['error 1', 'error 2'],
      property2: ['error 3'],
      property3: 'error 4',
      complexProperty: { innerProperty: 'innerValue' },
    };
    const err = new InvalidReactorConfigurationError(errors);

    expect(err).toMatchObject({
      errors: {
        property1: ['error 1', 'error 2'],
        property2: ['error 3'],
        property3: ['error 4'],
        complexProperty: ['{"innerProperty":"innerValue"}'],
      },
    });
  });

  test('allows errors to be constructed from a string error', () => {
    const errors = 'generic error';
    const err = new InvalidReactorConfigurationError(errors);

    expect(err).toMatchObject({
      errors: {
        error: ['generic error'],
      },
    });
  });

  test('allows errors to be constructed from a non-string error', () => {
    const err = new InvalidReactorConfigurationError(5);

    expect(err).toMatchObject({
      errors: {
        error: ['5'],
      },
    });
  });

  test('allows errors to be constructed from an array', () => {
    const errWithArray = new InvalidReactorConfigurationError([
      'prop1',
      'prop2',
    ]);

    expect(errWithArray).toMatchObject({
      errors: {
        error: ['prop1', 'prop2'],
      },
    });
  });
});
