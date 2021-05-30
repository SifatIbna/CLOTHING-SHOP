import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

// import "../sign-up/sign-up.styles.scss";
import { SignUpContainer, TitleContainer } from "./sign-up.styles";

import { signUpStart } from "../../redux/user/user.action";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("password does not match");
      return;
    }

    try {
      /*
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
        */
      signUpStart(email, password, displayName);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <TitleContainer> I do not have an account</TitleContainer>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          label="Display Name"
          handleChange={handleChange}
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          label="Email"
          handleChange={handleChange}
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          label="password"
          handleChange={handleChange}
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          handleChange={handleChange}
        />
        <CustomButton type="submit"> SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (email, password, displayName) =>
    dispatch(signUpStart({ email, password, displayName })),
});

export default connect(null, mapDispatchToProps)(SignUp);
