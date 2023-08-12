import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from '../../utils/firebase';

const SignIn = ()=>{
    const logGoogleUser = async() => {
        const response = await signInWithGooglePopup();
        createUserDocumentFromAuth(response);
        console.log(response);
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google 
            </button>
        </div>
    );
}

export default SignIn;