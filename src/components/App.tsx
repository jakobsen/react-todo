import React from "react";
import styled from "styled-components";
import CSSReset from "@components/CSSReset";
import GlobalStyles from "@components/GlobalStyles";
import Header from "@components/Header";
import TasksWrapper from "@components/TasksWrapper";
import Footer from "@components/Footer";

const App = () => {
  return (
    <React.StrictMode>
      <SiteWrapper>
        <CSSReset />
        <GlobalStyles />
        <Header>Get Your Shit Done</Header>
        <Content>
          <TasksWrapper />
        </Content>
        <Footer>
          If you insist, feel free to look at the{" "}
          <a
            href="https://github.com/jakobsen/react-todo"
            target="_blank"
            rel="noopener noreferrer"
          >
            source code
          </a>{" "}
          for this{" "}
          <RotateOnHover role="img" aria-label="shit">
            💩
          </RotateOnHover>
          .
        </Footer>
      </SiteWrapper>
    </React.StrictMode>
  );
};

const SiteWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
`;

const Content = styled.main`
  flex: 1 0 auto;
`;

const RotateOnHover = styled.span`
  display: inline-block;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: rotate(360deg);
  }
`;

export default App;
