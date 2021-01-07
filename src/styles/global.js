import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle` 
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.textColor};
        height: 100vh;
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
        transition: all .25s linear;
    }

    .visually-hidden {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
      }
`;
