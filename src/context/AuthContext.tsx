import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from 'firebase/auth'
import { auth } from '../middleware/firebase'

export interface UserInterface {
    user: any,
    setUser: Dispatch<SetStateAction<any>>,
    loading : boolean,
    setLoading: Dispatch<SetStateAction<boolean>>,
    singUp: any,
    singIn: any,
    logInGoogle: any,
    logOut: any
};

const defaultState = {
    user: '',
} as UserInterface

export const userContext = createContext(defaultState)

type userProviderProps = {children : ReactNode}

export function AuthProvider({children} : userProviderProps) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const singUp = (email : string, password : string) => {
        createUserWithEmailAndPassword(auth, email , password)
    }

    const singIn = (email : string, password : string) => {
        signInWithEmailAndPassword(auth, email, password)
    }

    const logInGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => signOut(auth)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            //@ts-ignore
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    }, [])

    return (
        <userContext.Provider
            value={{
                user,
                setUser,
                loading,
                setLoading,
                singUp,
                singIn,
                logInGoogle,
                logOut
            }}
        >
            {children}
        </userContext.Provider>
    )
}