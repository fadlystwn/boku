class httpClient {
  constructor(options = {}) {
    this._baseURL = options.baseURL || "";
    this._headers = options.headers || {};
  }
}