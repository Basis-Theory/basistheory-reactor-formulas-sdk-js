class BasisTheoryReactorError extends Error {
  constructor(message, status, data) {
    super(message);
    this.status = status;
    this.data = data;
  }

  toRFC7807() {
    return {
      title: this.message,
      status: this.status,
    };
  }
}

module.exports = BasisTheoryReactorError;
