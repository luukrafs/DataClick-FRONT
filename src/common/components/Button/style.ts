import styled, { css } from "styled-components";
import { BaseButtonStyle } from "../../styles/variables";
import { IButtonProps } from "./types";

export const Wrapper = styled.div``;

export const Front = styled.button<IButtonProps>`
  ${BaseButtonStyle};

  ${(props) =>
    props.theme == "Basic" &&
    css`
      background: linear-gradient(
        to right bottom,
        #653aff,
        #724cf9,
        #6e47f9,
        #653aff
      );
      color: var(--white);
    `}

  ${(props) =>
    props.theme == "BasicWhite" &&
    css`
      border: 1px solid var(--purple);
      background-color: transparent;
      color: var(--purple);
    `}
`;
