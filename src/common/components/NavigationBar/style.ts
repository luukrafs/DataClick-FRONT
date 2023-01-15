import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
`;

export const Logo = styled.img`
  width: 140px;
  height: 40px;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 2rem;
`;

export const Link = styled.a`
  text-decoration: none;
  margin-right: 30px;
  color: var(--white);
  letter-spacing: 0.8px;
  transition: color, 0.1s all;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    color: var(--purple-80);
  }
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  border: 1px solid black;
  justify-content: space-between;
`;

export const RightContent = styled.div``;
