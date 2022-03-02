const BasisTheoryReactorError = require('./BasisTheoryReactorError');

class InvalidReactorConfigurationError extends BasisTheoryReactorError {
  constructor(errors) {
    super({
      message: 'Invalid Reactor Configuration',
      status: 400,
      errors,
    });
    this.name = 'InvalidReactorConfigurationError';
  }
}

module.exports = InvalidReactorConfigurationError;
