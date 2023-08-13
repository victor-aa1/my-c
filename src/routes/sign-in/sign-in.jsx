// import  { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

import { 
    // auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    // signInWithGoogleRedirect
} from '../../utils/firebase';

import { SignUpForm } from '../../components/signup-form/SignUpForm';

const SignIn = ()=>{
    
    const logGoogleUser = async() => {
        const response = await signInWithGooglePopup();
        createUserDocumentFromAuth(response);
        console.log(response);
    }

    // const logGoogleRedirectUser = async () => {
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log({user});
    // }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google 
            </button>
            <SignUpForm/>
        </div>
    );
}

export default SignIn;