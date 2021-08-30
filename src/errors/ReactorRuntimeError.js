const BasisTheoryReactorError = require('./BasisTheoryReactorError');

class ReactorRuntimeError extends BasisTheoryReactorError {
  constructor(error) {
    super('Reactor Runtime Error', 500, error);
  }
}

module.exports = ReactorRuntimeError;
