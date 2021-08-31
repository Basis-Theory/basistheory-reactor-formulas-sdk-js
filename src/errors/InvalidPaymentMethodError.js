const BasisTheoryReactorError = require('./BasisTheoryReactorError');

class InvalidPaymentMethodError extends BasisTheoryReactorError {
  constructor(data) {
    super('Invalid Payment Method', 402, data);
  }
}

module.exports = InvalidPaymentMethodError;
