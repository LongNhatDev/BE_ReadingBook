import styled from "styled-components";

const Form = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  & h1 {
    color: red;
    padding-bottom: 15px;
    font-weight: bold;
  }
  
  & a {
    text-decoration: none;
    color: #444444;
    font-size: 20px;
    margin: 20px 0 10px 0;
  }

  & button {
    width: 170px;
    line-height: 40px;
    background-color: red;
    color: white;
    border: none;
    font-size: 15px;
    font-weight: bold;
  }
`;

export default Form;
