const BasisTheoryReactorError = require('./BasisTheoryReactorError');

class InvalidReactorConfigurationError extends BasisTheoryReactorError {
  constructor(validationErrors) {
    super({
      message: 'Invalid Reactor Configuration',
      status: 400,
      validationErrors,
    });
    this.name = 'InvalidReactorConfigurationError';
  }
}

module.exports = InvalidReactorConfigurationError;
