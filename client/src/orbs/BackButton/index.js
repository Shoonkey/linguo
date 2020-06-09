import React from 'react';
import { useHistory } from 'react-router-dom';

import Icon from '../Icon';
import { Container } from './styles';

function BackButton(props) {
  const history = useHistory();

  return (
    <Container 
      type="button" 
      onClick={() => history.goBack()} 
      title="Go back to previous page"
      {...props}
    >
      <Icon name="arrow-back-outline" size="large" aria-label="Go back a page" />
    </Container>
  );
}

export default BackButton;