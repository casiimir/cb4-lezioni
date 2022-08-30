const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "";

const GET = async(type, movieID) => {
  const res = await fetch(BASE_URL+type+'/'+movieID+API_KEY);
  return await res.json();
}

export { GET };