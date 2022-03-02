const sanitizeErrors = (errors) => {
  const sanitizedErrors = {};

  if (Array.isArray(errors)) {
    sanitizedErrors['error'] = errors;
  } else if (typeof errors === 'object') {
    for (const property in errors) {
      if (Array.isArray(errors[property])) {
        sanitizedErrors[property] = errors[property].map((e) =>
          e === 'object' ? JSON.stringify(e) : e.toString()
        );
      } else if (typeof errors[property] === 'object') {
        sanitizedErrors[property] = [JSON.stringify(errors[property])];
      } else {
        sanitizedErrors[property] = [errors[property].toString()];
      }
    }
  } else if (typeof errors === 'string') {
    sanitizedErrors['error'] = [errors];
  } else if (errors) {
    sanitizedErrors['error'] = [errors.toString()];
  }

  return sanitizedErrors;
};

class BasisTheoryReactorError extends Error {
  constructor({ message, status, errors }) {
    super(message);
    this.name = 'BasisTheoryReactorError';
    this.status = status;
    this.errors = sanitizeErrors(errors);
  }

  toRFC7807() {
    return {
      detail: this.message,
      status: this.status,
      errors: this.errors,
    };
  }
}

module.exports = BasisTheoryReactorError;
