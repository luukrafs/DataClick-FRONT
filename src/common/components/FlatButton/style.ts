import styled, { css } from "styled-components";
import { BaseButtonStyle } from "../../styles/variables";
import { IFlatButton } from "./types";

export const Wrapper = styled.div``;

export const Front = styled.button<IFlatButton>`
  ${BaseButtonStyle};
  background: none;
  color: var(--white);
  font-size: 0.9rem;
  letter-spacing: 0.8px;
  transition: color, 0.1s all;

  svg {
    margin-left: 0.5rem;
  }

  ${(props) =>
    props.hover &&
    css`
      &:hover {
        color: var(--purple-80);
      }
    `}
`;
