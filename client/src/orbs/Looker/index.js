import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import ClearButton from './ClearButton';
import { Container } from './styles';

function Looker({ onFocus, onBlur, onClear, placeholder, ...props }) {

  const [input, setInput] = useState("");
  const clear = () => {
    setInput("");
    onClear();
  }

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
        { input.length > 0 && <ClearButton onClick={clear} /> }
      </AnimatePresence>
      <ul className="result-container">
        { input && <li>{input}</li> }
      </ul>
    </Container>
  );
}

export default Looker;