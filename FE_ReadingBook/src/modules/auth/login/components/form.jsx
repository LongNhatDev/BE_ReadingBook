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
  & input {
    border: 1px solid lightcoral;
    line-height: 40px;
    width: 60%;
    border-radius: 5px;
    margin: 10px 0;
    padding-left: 5px;
  }
  & input:hover {
    border: 1px solid blue;
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
