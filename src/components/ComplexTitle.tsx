import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "./utils";
type Props = {
  title: string;
};

export const ComplexTitle: FC<Props> = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  div {
    width: 5rem;
    height: 0.25rem;
   // background: var(--primary); //con variables css
    background: ${colors.primary}; // con variable en un obj js comun
    margin: 0 auto;
  }
`;
