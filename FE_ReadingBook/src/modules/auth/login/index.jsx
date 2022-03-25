import React, { useState } from "react";
import InvalidMessage from "../../../components/InvalidMessage.jsx";
import BackgroundCSS from "./components/background.jsx";
import DivlogIn from "./components/divlogin";
import Form from "./components/form.jsx";
import Input from "./components/input.jsx";
import Logo from "./components/logo.jsx";

const Login = () => {
  const [errorEmail, setErrorEmail] = useState(false);
  return (
    <BackgroundCSS>
      <DivlogIn>
        <Logo>
          <p>Reading Book</p>
          <span>FREE BOOKS AND FREE YOUR MIND</span>
        </Logo>
        <Form>
          <h1>Login</h1>
          <Input
            type="text"
            placeholder="Enter Email"
            className={errorEmail ? "invalid" : ""}
            onClick={() => {
              setErrorEmail(false);
            }}
            onBlur={(event) => {
              event.target.value.trim() === ""
                ? setErrorEmail(true)
                : setErrorEmail(false);
            }}
          />
          {errorEmail && (
            <div>
              <InvalidMessage message="Please fill your email!" />
            </div>
          )}
          <Input
            type="password"
            name=""
            id=""
            placeholder="Enter Password"
            onClick={() => {}}
          />
          <a href=""> Forgot password ?</a>
          <button>LOGIN</button>
        </Form>
      </DivlogIn>
    </BackgroundCSS>
  );
};

export default Login;
