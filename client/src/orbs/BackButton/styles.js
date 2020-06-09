import styled from 'styled-components';

export const Container = styled.button`
  background: none;
  border: none;
  color: inherit;
  transition: transform .3s, color .3s;

  &:hover {
    cursor: pointer;
    transform: translateX(-4px);
    color: var(--primary-light);
  }
`;