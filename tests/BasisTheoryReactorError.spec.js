const BasisTheoryReactorError = require('../src/errors/BasisTheoryReactorError');

describe('BasisTheoryReactorError', () => {
  describe('constructor', () => {
    test('throws when constructed with no args', () => {
      expect(() => new BasisTheoryReactorError()).toThrow(undefined);
    });

    test('can be constructed with message', () => {
      const message = 'Custom Message';
      const err = new BasisTheoryReactorError({ message });

      expect(err).toMatchObject({
        message,
      });
    });

    test('can be constructed with status', () => {
      const status = 418;
      const err = new BasisTheoryReactorError({ status });

      expect(err).toMatchObject({
        status,
      });
    });

    test('sanitizes errors', () => {
      const errors = {
        property1: ['error 1', 'error 2'],
        property2: ['error 3'],
        property3: 'error 4',
        complexProperty: { innerProperty: 'innerValue' },
      };
      const err = new BasisTheoryReactorError({ errors });

      expect(err).toMatchObject({
        errors: {
          property1: ['error 1', 'error 2'],
          property2: ['error 3'],
          property3: ['error 4'],
          complexProperty: ['{"innerProperty":"innerValue"}'],
        },
      });
    });

    test('allows validationErrors to be constructed from a string error', () => {
      const errors = 'generic error';
      const err = new BasisTheoryReactorError({ errors });

      expect(err).toMatchObject({
        errors: {
          error: ['generic error'],
        },
      });
    });

    test('allows errors to be constructed from a non-string error', () => {
      const errWithNumber = new BasisTheoryReactorError({
        errors: 5,
      });

      expect(errWithNumber).toMatchObject({
        errors: {
          error: ['5'],
        },
      });
    });

    test('allows errors to be constructed from an array', () => {
      const errWithArray = new BasisTheoryReactorError({
        errors: ['prop1', 'prop2'],
      });

      expect(errWithArray).toMatchObject({
        errors: {
          error: ['prop1', 'prop2'],
        },
      });
    });

    const fallbackMessage =
      'Something went wrong. Please try again. If the problem persists, please contact support@basistheory.com.';

    test('allows undefined errors', () => {
      const undefinedErrors = new BasisTheoryReactorError({
        errors: undefined,
      });

      expect(undefinedErrors).toMatchObject({
        errors: {
          error: [fallbackMessage],
        },
      });
    });

    test('allows nested undefined errors', () => {
      const undefinedErrors = new BasisTheoryReactorError({
        errors: {
          error1: undefined,
          error2: [undefined],
          error3: {
            nested: undefined,
            nestedArr: [undefined],
          },
        },
      });

      expect(undefinedErrors).toMatchObject({
        errors: {
          error1: [fallbackMessage],
          error2: [fallbackMessage],
          error3: ['{"nestedArr":[null]}'],
        },
      });
    });
  });

  describe('toRFC7807', () => {
    test('transforms error into a valid RFC7807 error object', () => {
      const err = new BasisTheoryReactorError({
        message: 'This is an error',
        status: 400,
        errors: {
          property1: ['error 1', 'error 2'],
        },
      });

      expect(err.toRFC7807()).toMatchObject({
        detail: 'This is an error',
        status: 400,
        errors: {
          property1: ['error 1', 'error 2'],
        },
      });

      const errWithArray = new BasisTheoryReactorError({
        errors: ['prop1', 'prop2'],
      });

      expect(errWithArray).toMatchObject({
        errors: {
          error: ['prop1', 'prop2'],
        },
      });
    });
  });
});
