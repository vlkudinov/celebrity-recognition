async function sendData<T, U>(url: string, body: U): Promise<T> {
  const res = await fetch(url, {
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

export { sendData };
