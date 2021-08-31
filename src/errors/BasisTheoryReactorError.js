class BasisTheoryReactorError extends Error {
  constructor(message, status, data, propertyValidationErrors) {
    super(message);
    this.status = status;
    this.data = data;
    this.propertyValidationErrors = propertyValidationErrors;
  }

  toRFC7807() {
    return {
      title: this.message,
      status: this.status,
      errors: this.propertyValidationErrors,
    };
  }
}

module.exports = BasisTheoryReactorError;
