import { css } from "styled-components";

export const Defaults = css`
  html {
    font-size: 16px;
    font-family: sans-serif;
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  button {
    cursor: pointer;
  }

  .Toastify__toast-container--top-right {
    top: 50px;
    right: 20px;
  }

  .Toastify__toast {
    border: 1px solid var(--grey-60);
  }
`;
