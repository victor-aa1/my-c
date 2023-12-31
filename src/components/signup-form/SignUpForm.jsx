import { useState, useContext } from "react";
import FormInput  from '../form-input/form-input';
import './signupform.scss'
import Button from '../Button/button'

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase";

import { UserContext } from "../../context/User-Context";

const defaultFormsFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}; 



export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormsFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(formFields);
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
      setCurrentUser(user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  
  return (
    <div className="signup-container">
      <h2>Don't have an account</h2>
      <span>Sign up with email and password</span>
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
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button buttonType type="submit" on>
          Sign Up
        </Button>
      </form>
    </div>
  );
};
