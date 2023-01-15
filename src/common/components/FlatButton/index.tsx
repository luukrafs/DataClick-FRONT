import React from "react";
import { Front, Wrapper } from "./style";
import { IFlatButton } from "./types";

export const FlatButton = ({ children, onClick, ...rest }: IFlatButton) => {
  return (
    <Wrapper>
      <Front onClick={onClick} {...rest}>
        {children}
      </Front>
    </Wrapper>
  );
};
