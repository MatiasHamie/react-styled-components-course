import styled from "styled-components";
type Props = {
  special?: boolean;
};

const BasicTitle = styled.h1<Props>`
  text-align: center;
  text-transform: capitalize;
  /* color: ${(props) => props.special && "red"}; */
  color: ${({ special }) => (special ? "red" : "blue")};
`;

export default BasicTitle;
