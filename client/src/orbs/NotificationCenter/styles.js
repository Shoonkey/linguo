import styled from 'styled-components';

export const Container = styled.div`

  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  right: 0;

  min-width: max(250px, 10vw);

  margin: 0 12px 12px 0;
  /* padding: 1rem; */

  .notification {

    /* 
      Here, box-sizing must be set to border-box because the unmount animation animates height from
      "auto" to 0, "auto" apparently being computed by framer-motion as the element's computed
      height, which considers padding regardless of element's box-sizing setting (as it needs to
      get the element's height as exact as possible). This conflict allows the unmount animation
      to begin by expanding the element abruptly, because that height will be set to the element's
      computed height, creating an element with, essentially, doubled vertical padding by doing so.
      Math-wise, it's like the components height just did like:
        height = inner size + padding-top + padding-bottom // original height
        height =     height + padding-top + padding-bottom // new height when animation begins
    */
    box-sizing: border-box;

    position: relative;
    background-color: var(--notification-grey);

    font-size: 1rem;

    margin-top: .5em;
    vertical-align: middle;

    border-left: solid 2px var(--primary);

    &:hover {
      background-color: var(--notification-black);
    }
    
    .dismiss-btn {
      all: unset;
      color: var(--primary);
      padding: 4px;

      position: absolute;
      top: 0;
      right: 0;

      font-size: 1.5em;

      transition: color .3s;

      &:hover {
        cursor: pointer;
        color: var(--primary-light);
      }
    }

  }

`;
