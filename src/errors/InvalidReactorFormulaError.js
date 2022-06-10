const BasisTheoryReactorError = require('./BasisTheoryReactorError');

class InvalidReactorFormulaError extends BasisTheoryReactorError {
  constructor(errors) {
    super({
      message: 'Invalid Reactor Formula',
      status: 422,
      errors,
    });
    this.name = 'InvalidReactorFormulaError';
  }
}

module.exports = InvalidReactorFormulaError;
