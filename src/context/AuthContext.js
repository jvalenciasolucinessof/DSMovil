import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../services/firebaseConfig";


const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser);
      })
      return unSubscribe;
    }, [])

    return(
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
    
}

export const useAuth = () => useContext(AuthContext);