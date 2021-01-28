import React from "react";
import styled from "styled-components";
import CSSReset from "@components/CSSReset";
import GlobalStyles from "@components/GlobalStyles";

const App = () => {
  return (
    <>
      <CSSReset />
      <GlobalStyles />
    </>
  );
};

const Heading = styled.h1`
  color: red;
`;

export default App;
