const BasisTheoryReactorError = require('./BasisTheoryReactorError');

class RateLimitError extends BasisTheoryReactorError {
  constructor(data) {
    super({ message: 'Rate Limit Exceeded', status: 429, data });
  }
}

module.exports = RateLimitError;
