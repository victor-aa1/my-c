import { useState } from "react";
import FormInput  from '../form-input/form-input';
import Button from '../Button/button;'

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase";

const defaultFormsFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormsFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(formFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (confirmPassword !== password) {
      alert("password does not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("");
      }
      console.log("User created encountered an error", error);
    }
  };

  return (
    <div>
      <h1>Sign up to Victor-Studios with Email and Password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='DisplayName'
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
       

        <FormInput
        
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
        
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="submit" on>
          Sign Up
        </button>
      </form>
    </div>
  );
};
