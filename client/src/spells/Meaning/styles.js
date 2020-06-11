import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  background-color: var(--bg-black);
  min-height: 100vh;
  font-family: Lato;
  font-size: calc(10px + 2vmin);
  color: #e2e2e2;

  .back-btn {
    padding: 8px;
  }

  .word-container {
    padding: 0 1.5em;
    .word { color: var(--primary-light); margin-bottom: 1rem; }
    .meaning { color: var(--grey); }
  }
`;
