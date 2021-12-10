import React, { useContext, useEffect, useState } from "react";
import firebase from 'firebase/compat/app';
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true);

    const signup = ({email, password}) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    const signin = ({email, password}) => {
        return auth.signInWithEmailAndPassword(email, password)
    }
    const logout = () => {
        return auth.signOut()
    }
    const forgot = ({email}) => {
        return auth.sendPasswordResetEmail(email)
    }
    const google = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        return auth.signInWithPopup(provider)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setLoading(false)
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        signin,
        logout,
        forgot,
        google
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}