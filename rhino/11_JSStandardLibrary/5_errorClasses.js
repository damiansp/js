class HTTPError extends Error {
  constructor(status, text, url) {
    super(`${status} ${text}: ${url}`);
    this.status = status;
    this.text = text;
    this.url = url;
  }

  get name() { return 'HTTPError'; }
}


let error = new HTTPError(404, 'Not Found', 'http://exumple.cob');
console.log(error.status);
console.log(error.message);
console.log(error.name);
