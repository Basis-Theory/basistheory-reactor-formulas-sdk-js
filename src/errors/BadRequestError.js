const BasisTheoryReactorError = require('./BasisTheoryReactorError');

class BadRequestError extends BasisTheoryReactorError {
  constructor(data) {
    super({ message: 'Bad Request', status: 400, data });
  }
}

module.exports = BadRequestError;
