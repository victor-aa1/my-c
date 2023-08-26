
import { useState } from "react";
import FormInput  from '../form-input/form-input';
import './signin.scss'
import Button from '../Button/button'


import {
   
    createUserDocumentFromAuth,signInAuthUserWithEmailAndPassword,
  } from "../../utils/firebase";

const defaultFormsFields = {
    email: "",
    password: "",
  }; 

export const SignInBtn = () => {
    const [formFields, setFormFields] = useState(defaultFormsFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(formFields);
      };

    


    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormFields({ ...formFields, [name]: value });
      };
    
      const signInWithGoogle = async() => {
        const {user} = await signInWithGoogle();
       await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
    
    
        try {
          const response = await signInWithGoogle;
           resetFormFields();
        } catch (error) {
          switch (error.code) {
            case 'auth/wrong-password':
              alert('incorrect password for email');
              break;
            case 'auth/user-not-found':
              alert('no user associated with this email');
              break;
            default:
              console.log(error);
          }
        }
      };
    

  
    return (
      <div className="signup-container">
        <h2> Have an account?</h2>
        <span>Sign in  with email and password</span>
        <form onSubmit={handleSubmit}>
          
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

            <div className="btn-container">
                <Button type="submit" on>Sign In</Button>
                
                <Button buttonType='google'onClick={signInWithGoogle} >Google Sign In</Button>

            </div>

        
        </form>
</div>);  
}