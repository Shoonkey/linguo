import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`

  position: relative;

  input {
    background: transparent;
    color: #e2e2e2;
  
    border: solid var(--primary) 2px;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    
    transition: border-color .3s, background-color .3s;
  
    width: 70vw;
    min-width: 300px; max-width: 800px;
  
    line-height: 2em;
    font-size: 1.2em;
    text-indent: .5em;
    letter-spacing: 1px;

    padding-right: 2em; /* a padding to compensate for the space the clear button takes */
  
    &:focus {
      caret-color: var(--secondary);
      background: #1B1B1B;
      outline: none;
      border-color: var(--primary);
    }
  
    &::placeholder {
      color: #383838;
    }
  }

  .result-container, .input-clear-button { position: absolute; }

  .result-container li {
    border: solid 1px var(--primary);
    margin: 4px 0;
    padding: 1em;
  }

  .input-clear-button { 
    
    background: transparent;
    border: none;

    top: 8px;   /* center button on input */
    right: 8px; /* move button into input */

    font-size: 2em; 
    color: var(--secondary);

    &:hover {
      cursor: pointer;
      color: var(--secondary-light);
    }

    &:focus { outline: none; }
  }

`;