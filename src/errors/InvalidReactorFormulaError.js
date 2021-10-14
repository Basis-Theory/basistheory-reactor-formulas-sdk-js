const BasisTheoryReactorError = require('./BasisTheoryReactorError');

class InvalidReactorFormulaError extends BasisTheoryReactorError {
  constructor(message) {
    super({
      message,
      status: 422,
    });
    this.name = 'InvalidReactorFormulaError';
  }
}

module.exports = InvalidReactorFormulaError;
