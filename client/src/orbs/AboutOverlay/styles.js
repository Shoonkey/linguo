import styled from 'styled-components';

export const Container = styled.div`
  .help-btn {

    all: unset;

    position: fixed;
    z-index: 2;
    top: 0;
    right: 0;

    margin: 8px 16px 0 0;
    padding: 1em;

    color: var(--primary);
    &:hover { 
      cursor: pointer; 
      color: var(--primary-light);
    }
  }

  .overlay {

    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background: var(--overlay-black);
    line-height: 1.5em;

    @media screen and (max-width: 720px){
      text-align: right;
      align-items: flex-end;
    }

    .description {
      font-size: .9em;
      padding: .5em 3em;

      strong { color: var(--primary-light); }
    }

    footer {
      position: absolute;
      width: 100%;
      bottom: 0;
      right: 0;

      margin-right: 1em;
      margin-bottom: 1em;

      text-align: right;
      font-size: .8em;

      .heart { 
        animation: beat .8s infinite alternate;
        color: var(--heart-pink);
        vertical-align: middle;
      }

      a { 
        color: var(--secondary-light); 
        text-decoration: none; 
        &:hover { text-decoration: underline; }
      }
    }

  }


  @keyframes beat {
    from { transform: translateY(-6px); }
    to   { transform: translateY(0px); }
  }
`;
