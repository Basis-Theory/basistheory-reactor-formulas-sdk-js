const BasisTheoryReactorError = require('./BasisTheoryReactorError');

class RateLimitError extends BasisTheoryReactorError {
  constructor(errors) {
    super({
      message: 'Rate Limit Exceeded',
      status: 429,
      errors,
    });
    this.name = 'RateLimitError';
  }
}

module.exports = RateLimitError;
