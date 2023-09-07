import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3dkdlmiv5M0yZ7-iAw2Y-JBdIBqmmjag",
  authDomain: "vstudio-clo.firebaseapp.com",
  projectId: "vstudio-clo",
  storageBucket: "vstudio-clo.appspot.com",
  messagingSenderId: "214279440149",
  appId: "1:214279440149:web:60b44b0ac06a783e670b1c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, googleProvider);
};
export const signInWithGoogleRedirect = () => {
  return signInWithRedirect(auth, googleProvider);
};

// getFirestore allows access when data is needed from db
export const db = getFirestore();


export const createUserDocumentFromAuth = async (
  userAuth, 
  additionalInfo
  ) => {
  if (!userAuth) return;
  
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } 
    catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthWithEmailAndPassword= async (auth, email, password) => {
  
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthListener = async (callback) => {
  onAuthStateChanged(auth, callback )
}

//   if(userAuth === user && userAuth === password){
//     {return};
//   } else{

//   }
  
//   .then((userAuth) => {
//     // Signed in 
//     const user = userAuth.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });