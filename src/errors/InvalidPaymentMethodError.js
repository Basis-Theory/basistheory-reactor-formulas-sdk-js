const BasisTheoryReactorError = require('./BasisTheoryReactorError');

class InvalidPaymentMethodError extends BasisTheoryReactorError {
  constructor(data) {
    super({
      message: 'Invalid Payment Method',
      status: 402,
      data,
    });
    this.name = 'InvalidPaymentMethodError';
  }
}

module.exports = InvalidPaymentMethodError;
