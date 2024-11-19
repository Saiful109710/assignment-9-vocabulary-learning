import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.config'

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [error,setError] = useState(null)
    
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleLogin = ()=>{
          return signInWithPopup(auth,googleProvider)
    }

      const handleRegister=(email,password)=>{
            return createUserWithEmailAndPassword(auth,email,password)
      }

      const handleLogin = (email,password)=>{      
        
        return signInWithEmailAndPassword(auth,email,password)
      }

      const handleLogOut = ()=>{
                return signOut(auth)
      }

   


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
                console.log(currentUser)
        })

        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo = {
        handleGoogleLogin,
        handleRegister,
        handleLogin,
        handleLogOut,
        user,
        setUser,
        error,
        setError
    }


  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider