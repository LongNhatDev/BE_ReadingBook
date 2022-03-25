import styled from "styled-components";

const Logo = styled.div`
  width: 50%;
  height: 100%;
  background-color: red;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  & p {
    color: red;
    background-color: white;
    font-size: 50px;
    padding: 0 10px;
  }

  & span {
    color: white;
    font-size: 20px;
  }
`;

export default Logo;
