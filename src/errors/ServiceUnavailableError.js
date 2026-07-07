const BasisTheoryReactorError = require('./BasisTheoryReactorError');

class ServiceUnavailableError extends BasisTheoryReactorError {
  constructor(errors) {
    super({
      message: 'Service Unavailable',
      status: 503,
      errors,
    });
    this.name = 'ServiceUnavailableError';
  }
}

module.exports = ServiceUnavailableError;
