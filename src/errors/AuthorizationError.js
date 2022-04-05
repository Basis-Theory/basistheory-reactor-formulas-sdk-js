const BasisTheoryReactorError = require('./BasisTheoryReactorError');

class AuthorizationError extends BasisTheoryReactorError {
  constructor(errors) {
    super({
      message: 'Forbidden',
      status: 403,
      errors,
    });
    this.name = 'AuthorizationError';
  }
}

module.exports = AuthorizationError;
