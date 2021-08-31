const BasisTheoryReactorError = require('./BasisTheoryReactorError');

class InvalidReactorConfigurationError extends BasisTheoryReactorError {
  constructor(propertyName, propertyError) {
    super('Invalid Reactor Configuration', 400, undefined, {
      [propertyName]: [propertyError],
    });
  }
}

module.exports = InvalidReactorConfigurationError;
