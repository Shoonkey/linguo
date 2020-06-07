import React, { useState } from 'react';
import { motion } from 'framer-motion';

import './App.css';
import Looker from './orbs/Looker';

function App() {

  const [searching, setSearchingState] = useState(false);

  return (
    <div className="App">
      <motion.h1
        variants={{
          initial: { opacity: 1, height: "auto" },
          hidden: { opacity: 0, height: 0 }
        }} 
        transition={{ duration: .3, ease: "easeOut" }}
        animate={searching ? "hidden" : "initial"}
        className="title"
      >
        Linguo
      </motion.h1>
      <Looker 
        placeholder="So... what'r'ya' lookin for?"
        variants={{
          initial: { y: 0 },
          top: { y: "calc(-40vh)" }
        }}
        animate={searching ? "top" : "initial"}
        transition={{ duration: .5, ease: "easeOut" }}
        onFocus={() => setSearchingState(true)} 
        onBlur={str => str.length === 0 && setSearchingState(false)}
        onClear={() => setSearchingState(false)}
      />
    </div>
  );
}

export default App;
