const BasisTheoryReactorError = require('./BasisTheoryReactorError');

class AuthenticationError extends BasisTheoryReactorError {
  constructor(data) {
    super({
      message: 'Authentication Failed',
      status: 401,
      data,
    });
  }
}

module.exports = AuthenticationError;
