const BASE_URL = 'https://swapi.dev/api';

const GET = async (type) => {
  const res = await fetch(`${ BASE_URL }/${ type }`);
  const data = await res.json();

  return data;
}

export { GET };