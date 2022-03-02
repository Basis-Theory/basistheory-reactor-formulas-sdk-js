const BasisTheoryReactorError = require('./BasisTheoryReactorError');

class ReactorRuntimeError extends BasisTheoryReactorError {
  constructor(errors) {
    super({
      message: 'Reactor Runtime Error',
      status: 500,
      errors,
    });
    this.name = 'ReactorRuntimeError';
  }
}

module.exports = ReactorRuntimeError;
