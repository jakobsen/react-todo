import React from "react";
import styled from "styled-components";
import CSSReset from "@components/CSSReset";
import GlobalStyles from "@components/GlobalStyles";
import Header from "@components/Header";
import TasksWrapper from "@components/TasksWrapper";

const App = () => {
  return (
    <>
      <CSSReset />
      <GlobalStyles />
      <Header>Get Your Shit Done</Header>
      <TasksWrapper />
    </>
  );
};

export default App;
