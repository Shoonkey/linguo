import axios from 'axios';

const api = axios.create({ baseURL: "http://localhost:8000" });

export function getWords(substring, cb){
  if (substring.length > 0)
    api.get("/word/search", { params: { q: substring } })
    .then(res => res.data)
    .then(response => cb(response.words))
    .catch(console.error);
}