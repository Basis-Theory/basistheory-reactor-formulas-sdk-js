const sanitizeErrors = (errors) => {
  const sanitizedErrors = {};

  if (typeof errors === 'object') {
    // eslint-disable-next-line guard-for-in
    for (const property in errors) {
      sanitizedErrors[property] = Array.isArray(errors[property])
        ? errors[property].map((e) => e.toString())
        : [errors[property].toString()];
    }
  } else if (typeof errors === 'string') {
    sanitizedErrors[errors] = [`${errors} is invalid`];
  }

  return sanitizedErrors;
};

class BasisTheoryReactorError extends Error {
  constructor({ message, status, data, validationErrors }) {
    super(message);
    this.name = 'BasisTheoryReactorError';
    this.status = status;
    this.data = data;
    this.validationErrors = sanitizeErrors(validationErrors);
  }

  toRFC7807() {
    return {
      detail: this.message,
      status: this.status,
      errors: this.validationErrors,
    };
  }
}

module.exports = BasisTheoryReactorError;
