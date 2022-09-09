// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=";

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

const GET = async(type, specific, ext="") => {
  const res = await fetch(BASE_URL+type+'/'+specific+API_KEY+ext);
  return await res.json();
}


export { GET };