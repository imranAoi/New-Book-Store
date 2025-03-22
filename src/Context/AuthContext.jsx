
import {  createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const AuthContext =  createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

const googleProvider = new GoogleAuthProvider();

// authProvider
export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // register a user
    const registerUser = async (email, password) => {
        try {
            return await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Error registering user:", error);
            throw error; // Re-throw the error so it can be handled by the calling function
        }
    };
    
    const loginUser = async (email, password) => {
        try {
            return await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Error logging in user:", error);
            throw error;
        }
    };
    
    const signInWithGoogle = async () => {
        try {
            return await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error("Error signing in with Google:", error);
            throw error;
        }
    };

    // logout the user
    const logout = () => {
        return signOut(auth)
    }

    // manage user
    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);

            if(user) {
               
                const {email, displayName, photoURL} = user;
                const userData = {
                    email, username: displayName, photo: photoURL
                } 
            }
        })

        return () => unsubscribe();
    }, [])


    const value = {
        currentUser,
        loading,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}