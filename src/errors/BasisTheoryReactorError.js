// this method avoids a TypeError if the error contains a circular reference, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value
const safeStringify = (obj) => {
  const seen = new WeakSet();

  return JSON.stringify(obj, (key, value) => {
    if (typeof value === 'object' && value !== undefined) {
      if (seen.has(value)) {
        // circular reference found, return a placeholder or skip it
        return '[Circular]';
      }

      seen.add(value);
    }

    return value;
  });
};

const sanitizeErrors = (errors) => {
  const sanitizedErrors = {};

  const fallbackErrorMessage =
    'Something went wrong. Please try again. If the problem persists, please contact support@basistheory.com.';

  try {
    const mapSanitizedError = (error) =>
      error.map((e) =>
        typeof e === 'object'
          ? safeStringify(e)
          : e?.toString() ?? fallbackErrorMessage
      );

    if (Array.isArray(errors)) {
      sanitizedErrors['error'] = mapSanitizedError(errors);
    } else if (errors instanceof Error) {
      if (errors.message) {
        sanitizedErrors['error'] = [errors.message];
      } else if (errors.name !== 'Error') {
        // "Error" is not helpful as a message
        sanitizedErrors['error'] = [errors.name];
      } else {
        sanitizedErrors['error'] = [fallbackErrorMessage];
      }
    } else if (typeof errors === 'object') {
      for (const property in errors) {
        if (Array.isArray(errors[property])) {
          sanitizedErrors[property] = mapSanitizedError(errors[property]);
        } else if (typeof errors[property] === 'object') {
          sanitizedErrors[property] = [safeStringify(errors[property])];
        } else if (errors[property]) {
          sanitizedErrors[property] = [errors[property].toString()];
        } else {
          sanitizedErrors[property] = [fallbackErrorMessage];
        }
      }
    } else if (typeof errors === 'string') {
      sanitizedErrors['error'] = [errors];
    } else if (errors) {
      sanitizedErrors['error'] = [errors.toString()];
    } else {
      sanitizedErrors['error'] = [fallbackErrorMessage];
    }
  } catch {
    sanitizedErrors['error'] = [fallbackErrorMessage];
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
