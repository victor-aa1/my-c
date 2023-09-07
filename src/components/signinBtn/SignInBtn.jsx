
import { useContext, useState } from "react";
import FormInput  from '../form-input/form-input';
import './signin.scss'
import Button from '../Button/button'

import { UserContext } from "../../context/User-Context";

import {
   signInWithGooglePopup,
   
    signInAuthWithEmailAndPassword
  } from "../../utils/firebase";





const defaultFormsFields = {
    email: "",
    password: "",
  }; 

export const SignInBtn = () => {
    const [formFields, setFormFields] = useState(defaultFormsFields);
    const { email, password } = formFields;

    const {setCurrentUser} = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormsFields);
      };

    
      const signInWithGoogle = async() => {
         await signInWithGooglePopup();
      //  await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const { user } = await signInAuthWithEmailAndPassword(
            email,
            password
          );
            setCurrentUser(user);

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
    
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormFields({ ...formFields, [name]: value });
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