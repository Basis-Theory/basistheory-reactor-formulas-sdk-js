const BasisTheoryReactorError = require('./BasisTheoryReactorError');

class AuthenticationError extends BasisTheoryReactorError {
  constructor(data) {
    super('Authentication Failed', 401, data);
  }
}

module.exports = AuthenticationError;
