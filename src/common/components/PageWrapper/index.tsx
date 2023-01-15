import React from "react";
import { Wrapper } from "./styles";

interface IPageWrapper {
  children: React.ReactNode;
}

export const PageWrapper = ({ children }: IPageWrapper) => (
  <Wrapper>{children}</Wrapper>
);
