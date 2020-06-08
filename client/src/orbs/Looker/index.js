import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AnimatePresence } from 'framer-motion';

import ClearButton from './ClearButton';
import { Container } from './styles';

const api = axios.create({ baseURL: "http://localhost:8000" });

function getWords(substring, cb) {
  if (substring.length > 0)
    api.get("/word/search", { params: { q: substring } })
    .then(res => res.data)
    .then(response => cb(response.words))
    .catch(console.error);
}

function Looker({ onFocus, onBlur, onClear, placeholder, ...props }) {

  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);
  
  const clear = () => {
    setInput("");
    onClear();
  }

  useEffect(() => getWords(input, setResults), [input]);

  return (
    <Container {...props}>
      <input 
        type="text" 
        onFocus={() => onFocus(input)} 
        onBlur={() => onBlur(input)} 
        placeholder={placeholder} 
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <AnimatePresence>
        { input && <ClearButton onClick={clear} /> }
      </AnimatePresence>
      <ul className="result-container">
        { results && results.map((r, idx) => <li key={"word-"+r}>{r}</li>) }
      </ul>
    </Container>
  );
}

export default Looker;