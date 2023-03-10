function request<TResponse>(
  url: string,
  config: RequestInit = {}
): Promise<TResponse> {
  return fetch(url, config)
    .then((response) => {
      const contentType = response.headers.get("content-type");
      return contentType && contentType.indexOf("application/json") !== -1 ? response.json() : null;
    })
    .then((data) => data as TResponse);
}

export const API = {
  get: <TResponse>(url: string) =>
    request<TResponse>(url),

  post: <TBody extends BodyInit, TResponse>(url: string, body?: TBody) =>
    request<TResponse>(url, { method: 'POST', body,
      headers: {
        'Content-Type': 'application/json',
      }, }),
}
