const BasisTheoryReactorError = require('./BasisTheoryReactorError');

class ReactorRuntimeError extends BasisTheoryReactorError {
  constructor(error) {
    super({ message: 'Reactor Runtime Error', status: 500, data: error });
  }
}

module.exports = ReactorRuntimeError;
