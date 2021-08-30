const BasisTheoryReactorError = require('./BasisTheoryReactorError');

class InvalidReactorFormulaError extends BasisTheoryReactorError {
  constructor(title) {
    super(title, 422);
  }
}

module.exports = InvalidReactorFormulaError;
