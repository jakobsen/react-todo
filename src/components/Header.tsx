import React from "react";
import styled from "styled-components";

const Header = ({ children }: { children: string }) => {
  return (
    <Wrapper>
      <h1>{children}</h1>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 100px;
  display: grid;
  place-items: center;
`;

export default Header;
