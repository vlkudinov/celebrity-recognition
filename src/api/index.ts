const handleResponse = async<T> (res: Response) : Promise<T> => {
  const json = await res.json();

  if (res.ok) {
    return json;
  }
  throw new Error(json);
};

async function post<T, U>(url: string, body: U): Promise<T> {
  const res = await fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: window.sessionStorage.getItem('token') || '',
    },
    body: JSON.stringify(body),
  });

  return handleResponse(res);
}

async function get<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: window.sessionStorage.getItem('token') || '',
    },
  });

  return handleResponse(res);
}

export { post, get };
