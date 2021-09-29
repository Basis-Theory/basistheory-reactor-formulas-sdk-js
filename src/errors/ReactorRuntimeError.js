const BasisTheoryReactorError = require('./BasisTheoryReactorError');

class ReactorRuntimeError extends BasisTheoryReactorError {
  constructor(error) {
    super({ message: 'Reactor Runtime Error', status: 500, data: error });
    if (error?.status && !isNaN(error.status)) this.status = error.status;
  }
}

module.exports = ReactorRuntimeError;
