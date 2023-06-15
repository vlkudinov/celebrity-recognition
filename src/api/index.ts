import { getToken } from 'src/redux/user/user.utils';

const url = process.env.REACT_APP_API_URL || 'http://localhost:5002';

const handleResponse = async<T> (res: Response) : Promise<T> => {
  const json = await res.json();

  if (res.ok) {
    return json;
  }
  throw new Error(json) as Error;
};

async function post<T, U>(path: string, body: U): Promise<T> {
  const res = await fetch(`${url}/${path}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken() || '',
    },
    body: JSON.stringify(body),
  });

  return handleResponse(res);
}

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${url}/${path}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken() || '',
    },
  });

  return handleResponse(res);
}

export { post, get };
