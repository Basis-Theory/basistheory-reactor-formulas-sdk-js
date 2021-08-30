const BasisTheoryReactorError = require('./BasisTheoryReactorError');

class BadRequestError extends BasisTheoryReactorError {
  constructor(data) {
    super('Bad Request', 400, data);
  }
}

module.exports = BadRequestError;
