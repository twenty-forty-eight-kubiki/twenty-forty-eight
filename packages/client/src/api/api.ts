import { BASE_URL } from '../constants'
import { APIError } from '../types/api/shared'
function request<T>(url: string, config: RequestInit = {}): Promise<T> {
  return fetch(`${BASE_URL}/` + url, config)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response.json())
      }
      const contentType = response.headers.get('content-type')
      const isJson =
        contentType && contentType.indexOf('application/json') !== -1
      const isText = contentType && contentType.indexOf('text/plain') !== -1
      if (isJson) {
        return response.json()
      }

      if (isText) {
        return response.text()
      }
    })
    .catch((error: Promise<APIError>) => {
      throw error
    })
}

export const API = {
  get: <T>(url: string): Promise<T> =>
    request(url, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  post: <TBody, TResponse>(url: string, body?: TBody): Promise<TResponse> =>
    request<TResponse>(url, {
      method: 'POST',
      body: JSON.stringify(body),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }),
}
