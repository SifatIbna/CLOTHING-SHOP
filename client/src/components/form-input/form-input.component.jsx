import React from "react";

// import "./form-input.styles.scss";

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabelContainer,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {label ? (
      <FormInputLabelContainer
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </FormInputLabelContainer>
    ) : null}
  </GroupContainer>
);

export default FormInput;

// eslint-disable-next-line no-lone-blocks

/* <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label>Email</label> */
