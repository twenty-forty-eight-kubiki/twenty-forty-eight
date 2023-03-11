import { BASE_URL } from '../constants'
function request<T>(url: string, config: RequestInit = {}) {
  return fetch(`${BASE_URL}/` + url, config)
    .then(response => {
      const contentType = response.headers.get('content-type')
      return contentType && contentType.indexOf('application/json') !== -1
        ? response.json()
        : null
    })
    .catch((error: Error) => {
      console.log('error', error)
    })
}

export const API = {
  get: (url: string) =>
    request(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  post: <T>(url: string, body?: T) =>
    request<T>(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    }),
}
