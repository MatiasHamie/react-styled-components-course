import React, { useState } from "react";
import BasicTitle from "./components/BasicTitle";
import { DefaultButton, HipsterButton, StyledBtn } from "./components/Buttons";
import { Button } from "@material-ui/core";
import { ComplexTitle } from "./components/ComplexTitle";
import Random from "./components/Random";
import Card from "./components/Card";

import styled, { ThemeProvider } from "styled-components";
import Loading from "./components/Loading";
import Form from "./components/Form";

const BaseTheme = {
  color: "#222",
  background: "#fff",
};
const DarkTheme = {
  color: "#fff",
  background: "#222",
};

const Container = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
`;

function App() {
  const [baseTheme, setBaseTheme] = useState(true);

  const toggleTheme = () => {
    setBaseTheme(!baseTheme);
  };

  return (
    <ThemeProvider theme={baseTheme ? BaseTheme : DarkTheme}>
      <BasicTitle special>styled component</BasicTitle>
      <BasicTitle>styled component</BasicTitle>
      <DefaultButton>click me</DefaultButton>
      <HipsterButton>click me</HipsterButton>
      <Button color="primary" variant="contained">
        Hello
      </Button>
      <StyledBtn color="primary" variant="contained">
        Hello World
      </StyledBtn>
      <hr />
      <ComplexTitle title={"more complex title"} />
      <hr />
      <Random />
      <hr />
      <Card />
      <hr />
      <Container>
        <h1>Probando Theme</h1>
        <DefaultButton className="btn-toggle" onClick={toggleTheme}>
          toggle theme
        </DefaultButton>
      </Container>
      <hr />
      <h2>Animation example</h2>
      <Loading />
      <hr />
      <HipsterButton>click me</HipsterButton>
      <HipsterButton as="a">click me</HipsterButton>
      <HipsterButton>click me</HipsterButton>
      <hr />
      <Form />
    </ThemeProvider>
  );
}

export default App;
