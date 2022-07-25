const BASE_URL = 'https://edgemony-backend.herokuapp.com/';

const POST = async (path, body) => {
  const res = await fetch(BASE_URL + path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  return await res.json();
}

export { POST };