import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
// import "./sign-in-and-sign-up-page.styles.scss";

import { SignInSignUpContainer } from "./sign-in-and-sign-up-page.styles";

const SignInAndSignUpPage = () => (
  <SignInSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInSignUpContainer>
);
export default SignInAndSignUpPage;
