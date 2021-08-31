const BasisTheoryReactorError = require('./BasisTheoryReactorError');

class InvalidReactorConfigurationError extends BasisTheoryReactorError {
  constructor(errors) {
    const validationErrors = {};
    if (typeof errors === 'object') {
      for (const property in errors) {
        validationErrors[property] = Array.isArray(errors[property])
          ? errors[property].map((e) => e.toString())
          : [errors[property].toString()];
      }
    } else if (typeof errors === 'string') {
      validationErrors[errors] = [`${errors} is invalid`];
    }
    super('Invalid Reactor Configuration', 400, undefined, validationErrors);
  }
}

module.exports = InvalidReactorConfigurationError;
