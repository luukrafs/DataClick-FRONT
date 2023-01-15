import { css } from "styled-components";
import { IButtonProps } from "../components/Button/types";
import { IFlatButton } from "../components/FlatButton/types";

export const Variables = css`
  :root {
    // Colors
    --dark-purple: #1d1a31;
    --purple-100: #724cf9;
    --purple-80: #9476fc;
    --rose: #ca7df9;
    --grey-150: #57595b;
    --grey-100: #747876;
    --grey-80: #a5a5a5;
    --grey-70: #e1e1e1;
    --grey-60: #ededed;
    --grey-40: #f4f4f4;
    --grey-20: #fafafa;
    --white: #ffffff;
    --black-80: #141414;
    --black: #000000;
    --dark-danger: #870d2d;
    --danger: #bb133e;
    --light-danger: #c84264;
    --orange: #e37222;
    --light-orange: #e88e4e;
    --blue: #3d7edb;
    --light-blue: #6397e2;
    --radius: 4px;
    --box-shadow: 0px 3px 6px #00000029;
    --soft-box-shadow: 0px 3px 3px #00000015;
    --toastify-color-progress-light: #007e7a;
  }
`;

export const BaseButtonStyle = css<IButtonProps | IFlatButton>`
  padding: 0.5rem 1rem;
  border-radius: var(--radius);
  border: none;
  min-width: 90px;
  min-height: 40px;
  display: flex;
  align-items: center;
  font-family: sans-serif;

  ${(props) =>
    props.big &&
    css`
      min-width: 120px;
      min-height: 45px;
    `}

  ${(props) =>
    props.small &&
    css`
      min-width: 70px;
      min-height: 30px;
    `}
`;
