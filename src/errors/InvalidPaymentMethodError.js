const BasisTheoryReactorError = require('./BasisTheoryReactorError');

class InvalidPaymentMethodError extends BasisTheoryReactorError {
  constructor(errors) {
    super({
      message: 'Invalid Payment Method',
      status: 402,
      errors,
    });
    this.name = 'InvalidPaymentMethodError';
  }
}

module.exports = InvalidPaymentMethodError;
