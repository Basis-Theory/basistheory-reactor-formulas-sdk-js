const BasisTheoryReactorError = require('./BasisTheoryReactorError');

class BadRequestError extends BasisTheoryReactorError {
  constructor(errors) {
    super({
      message: 'Bad Request',
      status: 400,
      errors,
    });
    this.name = 'BadRequestError';
  }
}

module.exports = BadRequestError;
