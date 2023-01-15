import React from "react";
import { Front, Wrapper } from "./style";
import { IButtonProps } from "./types";

export const Button = ({ children, onClick, ...rest }: IButtonProps) => {
  return (
    <Wrapper>
      <Front onClick={onClick} {...rest}>
        {children}
      </Front>
    </Wrapper>
  );
};
