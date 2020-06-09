import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .back-btn {
    padding: 8px;
  }

  .word-container {
    padding: 0 1.5em;
    .word { color: var(--primary-light); margin-bottom: 1rem; }
    .meaning { color: var(--grey); }
  }
`;
