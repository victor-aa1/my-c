import  { useEffect } from 'react';
import '../../components/Button/button.scss'
// import { getRedirectResult } from 'firebase/auth';


import { SignUpForm } from '../../components/signup-form/SignUpForm';
import { SignInBtn } from '../../components/signinBtn/SignInBtn';
import './auth.scss'

const Authentication = ()=>{
    
    // const logGoogleRedirectUser = async () => {
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log({user});
    // }

    return (
        <div className='auth-container'>
            <h1>Sign In Page</h1>
            <SignInBtn />    
            <SignUpForm />
        </div>
    );
}

export default Authentication;