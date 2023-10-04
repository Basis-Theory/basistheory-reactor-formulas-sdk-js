class CustomHttpResponse extends Error {
  constructor({ status, headers, body }) {
    super();
    this.name = 'CustomHttpResponse';

    const parsedStatus = Number.parseInt(status);

    if (parsedStatus !== status || parsedStatus < 100 || parsedStatus > 599)
      throw new Error('status is not a valid integer');

    this.status = parsedStatus;
    this.headers = headers ?? {};
    this.body = body ?? {};
  }

  toResponseBody() {
    return {
      status: this.status,
      headers: this.headers,
      body: this.body,
    };
  }
}

module.exports = CustomHttpResponse;
