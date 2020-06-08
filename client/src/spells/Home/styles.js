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

  > .title {
    font-size: 2.5em; 
    letter-spacing: 3px; 
    margin-bottom: .5em;
  }

`;
