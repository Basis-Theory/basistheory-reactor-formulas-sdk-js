const { InvalidReactorConfigurationError } = require('../src');

describe('InvalidReactorConfigurationError', () => {
  test('can be constructed with no args', () => {
    const err = new InvalidReactorConfigurationError();

    expect(err).toMatchObject({
      message: 'Invalid Reactor Configuration',
      status: 400,
      validationErrors: {},
    });
  });

  test('can be constructed with invalid properties containing a single validation error', () => {
    const err = new InvalidReactorConfigurationError({
      property1: 'error 1',
      property2: 'error 2',
    });

    expect(err).toMatchObject({
      validationErrors: {
        property1: ['error 1'],
        property2: ['error 2'],
      },
    });
  });

  test('sanitizes validationErrors', () => {
    const validationErrors = {
      property1: ['error 1', 'error 2'],
      property2: ['error 3'],
      property3: 'error 4',
      complexProperty: { innerProperty: 'innerValue' },
    };
    const err = new InvalidReactorConfigurationError(validationErrors);

    expect(err).toMatchObject({
      validationErrors: {
        property1: ['error 1', 'error 2'],
        property2: ['error 3'],
        property3: ['error 4'],
        complexProperty: ['[object Object]'],
      },
    });
  });

  test('allows validationErrors to be constructed from a single invalid property name', () => {
    const validationErrors = 'invalidPropertyName';
    const err = new InvalidReactorConfigurationError(validationErrors);

    expect(err).toMatchObject({
      validationErrors: {
        invalidPropertyName: ['invalidPropertyName is invalid'],
      },
    });
  });

  test('invalid input types are not translated into a validation error', () => {
    const errWithNumber = new InvalidReactorConfigurationError(5);

    expect(errWithNumber).toMatchObject({
      validationErrors: {},
    });

    const errWithArray = new InvalidReactorConfigurationError([
      'prop1',
      'prop2',
    ]);

    expect(errWithArray).toMatchObject({
      validationErrors: {},
    });
  });
});