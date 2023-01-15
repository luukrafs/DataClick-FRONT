import { css } from "styled-components";

export const Keyframes = css`
  @keyframes fadeIn {
    from {
      opacity: 0;
      position: relative;
      left: -5px;
      /* transform: translate(-5px, 0); */
    }
    to {
      opacity: 1;
      left: 0px;
      /* transform: translate(0px, 0px); */
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      left: 0px;
      /* transform: translate(0px, 0px); */
    }
    to {
      left: -5px;
      /* transform: translate(-5px, 0); */
      opacity: 0;
    }
  }
`;
