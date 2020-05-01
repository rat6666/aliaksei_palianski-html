export class HTTPService {
  async request(url, params, method = 'GET') {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    if (params) {
      if (method !== 'GET') {
        options.body = JSON.stringify(params);
      }
    }
    const response = await fetch(url, options);

    const result = await response.json();

    return result;
  }
}
