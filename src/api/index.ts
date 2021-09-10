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
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  return handleResponse(res);
}

async function get<T>(url: string, params: { id: number }): Promise<T> {
  const { id } = params;
  const res = await fetch(`${url}?id=${id}`);

  return handleResponse(res);
}

export { post, get };
