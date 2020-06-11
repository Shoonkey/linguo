import React, { useState } from 'react';

import Icon from '../Icon';
import { Container } from './styles';

function AboutOverlay() {

  const [open, setOpen] = useState(false);

  return (
    <Container>
      <button 
        type="button" 
        className="help-btn" 
        title={open ? "Close overlay" : "About this website"}
        onClick={() => setOpen(!open)}
      >
        {
          open ? (
            <Icon name="close" size="large" aria-label="Close info overlay" />
          ) : (
            <Icon 
              name="information-circle-outline"
              size="large" 
              aria-label="Find out more about this website"
            />
          )
        }
      </button>
      { open && (
        <div className="overlay">
          <p className="description">
            <strong>Linguo</strong> is a concept for a stylish, practical, easy-to-use dictionary
            website.
          </p>
          <p className="description">
            My intention was to build something that feels modern but doesn't land too far from
            known UI patterns on the web.
          </p>
          <p className="description">
            I've based most of the colors on the ones on Twitch (except for the light blues on the
            searchbar), and I really liked how it turned out!
          </p>
          <footer>
            <p className="description">
              Made with <Icon name="heart" size="large" class="heart" aria-label="Love" />{" "}
              by <a href="https://shoonkey.dev" title="My portfolio link">shoonkey</a>
            </p>
          </footer>
        </div>
      )}
    </Container>
  );
}

export default AboutOverlay;