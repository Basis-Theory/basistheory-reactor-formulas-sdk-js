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

    test('can be constructed with data', () => {
      const data = {
        arbitrary: 'data',
        more: 'data',
      };
      const err = new BasisTheoryReactorError({ data });

      expect(err).toMatchObject({
        data,
      });
    });

    test('sanitizes validationErrors', () => {
      const validationErrors = {
        property1: ['error 1', 'error 2'],
        property2: ['error 3'],
        property3: 'error 4',
        complexProperty: { innerProperty: 'innerValue' },
      };
      const err = new BasisTheoryReactorError({ validationErrors });

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
      const err = new BasisTheoryReactorError({ validationErrors });

      expect(err).toMatchObject({
        validationErrors: {
          invalidPropertyName: ['invalidPropertyName is invalid'],
        },
      });
    });

    test('invalid input types are not translated into a validation error', () => {
      const errWithNumber = new BasisTheoryReactorError({
        validationErrors: 5,
      });

      expect(errWithNumber).toMatchObject({
        validationErrors: {},
      });

      const errWithArray = new BasisTheoryReactorError({
        validationErrors: ['prop1', 'prop2'],
      });

      expect(errWithArray).toMatchObject({
        validationErrors: {},
      });
    });
  });

  describe('toRFC7807', () => {
    test('transforms error into a valid RFC7807 error object', () => {
      const err = new BasisTheoryReactorError({
        message: 'This is an error',
        status: 400,
        data: { arbitrary: 'data' },
        validationErrors: {
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
        validationErrors: ['prop1', 'prop2'],
      });

      expect(errWithArray).toMatchObject({
        validationErrors: {},
      });
    });
  });
});
