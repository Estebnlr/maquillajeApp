import { useState, useEffect, createContext } from "react";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig"; 

export const AuthContext = createContext();

const proveedorGoogle = new GoogleAuthProvider()

export const AuthContextProvider = (props) => {
    const [user, setUser] = useState(null)

    const signInGoogle = async () => {
        try {
            const resultado = await signInWithPopup(auth, proveedorGoogle)
            return resultado
        } catch (error) {
            throw error
        }
    }

    const salir = () => signOut(auth)

    useEffect(() => {
        return onAuthStateChanged(auth, (usuario) => {
         
            setUser(usuario)
        })
    },[])

    return <AuthContext.Provider value={{user, signInGoogle, salir}}>
        {props.children}
    </AuthContext.Provider>
}