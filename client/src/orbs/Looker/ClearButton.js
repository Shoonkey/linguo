import React from 'react';
import { motion } from 'framer-motion';

import Icon from '../Icon';

function ClearButton({ onClick }) {
  return (
    <motion.button 
      type="button" 
      className="input-clear-button" 
      onClick={onClick}
      title="Clear"

      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -8 }}
      transition={{ ease: "easeIn" }}
    >
      <Icon 
        name="backspace-outline"
        aria-label="Clear"
      />
    </motion.button>
  );
}

export default ClearButton;