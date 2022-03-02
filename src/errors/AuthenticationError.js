const BasisTheoryReactorError = require('./BasisTheoryReactorError');

class AuthenticationError extends BasisTheoryReactorError {
  constructor(errors) {
    super({
      message: 'Authentication Failed',
      status: 401,
      errors,
    });
    this.name = 'AuthenticationError';
  }
}

module.exports = AuthenticationError;
