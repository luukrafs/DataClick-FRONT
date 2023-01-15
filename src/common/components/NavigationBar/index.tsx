import * as React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { FlatButton } from "../FlatButton";
import {
  Container,
  LeftContent,
  Link,
  Links,
  Logo,
  RightContent,
} from "./style";

export const NavigationBar = () => {
  return (
    <Container>
      <LeftContent>
        <Logo />

        <Links>
          <Link href="#">Contato</Link>
          <Link href="#">Club's</Link>
          <Link href="#">Sobre nós</Link>
        </Links>
      </LeftContent>

      <RightContent>
        <FlatButton hover onClick={() => {}}>
          Entrar
          <FaSignInAlt />
        </FlatButton>
      </RightContent>
    </Container>
  );
};
