import React from "react";
import BackgroundCSS from "./components/background.jsx";
import DivlogIn from "./components/divlogin";
import Form from "./components/form.jsx";
import Logo from "./components/logo.jsx";

const login = () => {
  return (
    <BackgroundCSS >
      <DivlogIn>
        <Logo>
          <p>Reading Book</p>
          <span>FREE BOOKS AND FREE YOUR MIND</span>
        </Logo>
        <Form>
          <h1>Login</h1>
          <input type="text" name="" id="" placeholder="Enter Email" />
          <input type="password" name="" id="" placeholder="Enter Password" />
          <a href=""> Forgot password ?</a>
          <button>LOGIN</button>
        </Form>
      </DivlogIn>
    </BackgroundCSS>
  );
};

export default login;
