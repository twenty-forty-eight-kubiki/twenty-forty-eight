import { BASE_URL } from '../constants';
import { FileRequestData } from '../types/api/profie';

new URLSearchParams();

interface RequestParams {
  params?: Record<string, string>;
}

type RequestOptions = RequestInit & RequestParams;

function request<T>(url: string, config: RequestOptions = {}): Promise<T> {
  const URL = `${BASE_URL}/${url}`;
  let params;

  if (config.params) {
    params = new URLSearchParams(config.params).toString();
    URL + `?${params}`;
  }

  return fetch(URL, config)
    .then(response => {
      if (!response.ok) {
        return response.json().then(data => {
          if (data.reason) {
            throw data.reason;
          }

          return console.log('error', data);
        });
      }
      const contentType = response.headers.get('content-type');
      const isJson =
        contentType && contentType.indexOf('application/json') !== -1;
      const isText = contentType && contentType.indexOf('text/plain') !== -1;
      if (isJson) {
        return response.json();
      }
      if (isText) {
        return response.text();
      }
      return response;
    })
    .then(data => data);
}

export const API = {
  get: <TResponse>(
    url: string,
    params?: Record<string, string>
  ): Promise<TResponse> => {
    return request(url, {
      method: 'GET',
      params,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },

  post: <TBody, TResponse>(url: string, body?: TBody): Promise<TResponse> =>
    request<TResponse>(url, {
      method: 'POST',
      body: JSON.stringify(body),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }),

  put: <TBody, TResponse>(url: string, body?: TBody): Promise<TResponse> =>
    request<TResponse>(url, {
      method: 'PUT',
      body: JSON.stringify(body),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }),

  delete: <TBody, TResponse>(url: string, body?: TBody): Promise<TResponse> =>
    request<TResponse>(url, {
      method: 'DELTE',
      body: JSON.stringify(body),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }),

  putFile: <TResponse>(
    url: string,
    data: FileRequestData
  ): Promise<TResponse> => {
    const formData = new FormData();
    formData.append(data.fileName, data.file);
    return request<TResponse>(url, {
      method: 'PUT',
      body: formData,
      credentials: 'include',
      headers: {
        accept: 'application/json'
      }
    });
  },

  getServiceId: <T, TResponse>(
    url: string,
    queriesData?: string
  ): Promise<TResponse> => {
    const urlWithQueries = queriesData ? `${url}?${queriesData}` : url;
    return request(urlWithQueries, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
};
