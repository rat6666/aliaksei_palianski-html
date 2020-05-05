import { method } from '../config/config.js';

export class HTTPService {
  async request(url, params, requestMethod = method.get) {
    const options = {
      requestMethod,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    if (params) {
      if (requestMethod !== method.get) {
        options.body = JSON.stringify(params);
      }
    }
    const response = await fetch(url, options);

    const result = await response.json();

    return result;
  }
}
