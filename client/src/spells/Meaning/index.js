import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import BackButton from '../../orbs/BackButton';
import { getMeaning } from '../../util/api';
import { Container } from './styles';

function Meaning() {
  const { word } = useParams();
  const [meaning, setMeaning] = useState(null);

  useEffect(() => getMeaning(word, setMeaning), []);

  return (
    <Container>
      <main className="word-container">
        <BackButton className="back-btn" />
        <h1 className="word">{word}</h1>
        <div className="meaning">
          { meaning && <p className="meaning">{meaning}</p> }
        </div>
      </main>
    </Container>
  );
}

export default Meaning;