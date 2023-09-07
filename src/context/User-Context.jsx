import { createContext, useEffect, useState } from "react"
import { createUserDocumentFromAuth, onAuthListener } from "../utils/firebase";
// Context reps a storage unit accessible 
// actual value u want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

// provider is literal component
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(()=> {
        const unsubscribe = onAuthListener((user)=>{
            if(user){
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
            return unsubscribe;
        });
        
    },[]);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}