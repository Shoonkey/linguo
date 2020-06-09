import axios from 'axios';

const api = axios.create({ baseURL: "http://localhost:8000" });

export function getWords(substring, cb){
  if (substring)
    api.get("/word/search", { params: { q: substring } })
      .then(res => res.data)
      .then(data => cb(data.words))
      .catch(console.error);
}

export function getMeaning(word, cb){
  if (word)
    api.get(`/word/meaning`, { params: { w: word } })
      .then(res => res.data)
      .then(data => cb(data.meaning))
      .catch(console.error);
}