import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import ClearButton from './ClearButton';
import { getWords } from '../../util/api';
import { Container } from './styles';

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
        { input && results && (
            results.map(r => <li key={"word-"+r}><Link to={`/meaning/${r}`}>{r}</Link></li>)
          ) 
        }
      </ul>
    </Container>
  );
}

export default Looker;