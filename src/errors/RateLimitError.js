const BasisTheoryReactorError = require('./BasisTheoryReactorError');

class RateLimitError extends BasisTheoryReactorError {
  constructor(data) {
    super('Rate Limit Exceeded', 429, data);
  }
}

module.exports = RateLimitError;
