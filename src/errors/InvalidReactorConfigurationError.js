const BasisTheoryReactorError = require('./BasisTheoryReactorError');

class InvalidReactorConfigurationError extends BasisTheoryReactorError {
  constructor(validationErrors) {
    super({
      message: 'Invalid Reactor Configuration',
      status: 400,
      validationErrors,
    });
  }
}

module.exports = InvalidReactorConfigurationError;
