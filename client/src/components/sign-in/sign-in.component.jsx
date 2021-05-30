import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from ".././custom-button/custom-button.component";

import {
  goolgeSignInStart,
  emailSignInStart,
} from "../../redux/user/user.action";
// import "./sign-in.styles.scss";

import {
  SignInContainer,
  ButtonContainer,
  TitleContainer,
} from "./sign-in.styles";

const SignIn = ({ emailSignInStart, goolgeSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
    /*
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (e) {
      console.log(e.message);
    }
    */
  };

  const handleChange = async (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <TitleContainer>I Already Have an Account</TitleContainer>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <ButtonContainer>
          <CustomButton type="submit"> Sign In </CustomButton>
          <CustomButton
            type="button"
            onClick={goolgeSignInStart}
            isGoogleSignIn
          >
            {" "}
            Sign In With Google{" "}
          </CustomButton>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  goolgeSignInStart: () => dispatch(goolgeSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
