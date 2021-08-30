const BasisTheoryReactorError = require('./BasisTheoryReactorError');

class InvalidCardError extends BasisTheoryReactorError {
  constructor(data) {
    super('Invalid Card', 402, data);
  }
}

module.exports = InvalidCardError;
