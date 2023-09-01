import { createContext, useState } from "react"
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

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}