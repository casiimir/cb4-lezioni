const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=";

const GET = async(type, section, ext) => {
  const res = await fetch(`${BASE_URL}${type}/${section}${API_KEY}${ext}`);
  return res.json();
}

export { GET };
