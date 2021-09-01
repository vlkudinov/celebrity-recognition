import { SignInPayload } from 'src/model/user';

async function signIn<T>(body: SignInPayload): Promise<T> {
  const res = await fetch('http://localhost:5000/signin', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const json = await res.json();

  if (res.ok) {
    return json;
  }
  throw new Error(json);
}

export { signIn };
