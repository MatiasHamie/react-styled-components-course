import React from "react";
import styled from "styled-components";

const Random = () => {
  return (
    <Wrapper>
      <div className="underline"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: red;
    margin: 0 auto;
  }
`;

export default Random;
