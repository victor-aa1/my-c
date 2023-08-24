import  { useEffect } from 'react';
import '../../components/Button/button.scss'
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
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
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
            <SignUpForm buttonType='inverted'/>
        </div>
    );
}

export default SignIn;