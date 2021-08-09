import React from "react";
import styled from "styled-components";
import { colors } from "./utils";

const Form = () => {
  return (
    <div>
      <h2>some random stuff</h2>
      <Button>click me</Button>
      <DefaultForm>
        <h2>Form</h2>
        <input type="text" name="input" id="input" />
        <Button>submit here</Button>
      </DefaultForm>
    </div>
  );
};

// esto es para poder acceder a las props, porque si se pone
// styled.button.attrs({type: 'button'}) queda inaccesible
// asi q se lo mando como prop y listo
const Button = styled.button.attrs((props) => {
  return { type: props.type || "button" };
})`
  background: ${colors.primary};
  border: none;
  color: white;
  padding: 0.25rem;
  cursor: pointer;
`;
const DefaultForm = styled.form`
  width: 300px;
  background: #fff;
  padding: 2rem;
  margin-top: 1rem;
`;

export default Form;
