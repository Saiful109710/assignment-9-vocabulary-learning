import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.config'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {


    const [user,setUser] = useState(null)
    const [success,setSuccess] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(true)
   
    
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
                 setLoading(false)
                return signOut(auth)

      }

      

      const handleUpdateProfile =(name,photo,number)=>{
          return  updateProfile(auth.currentUser,{
              displayName:name,
              photoURL:photo,
              phoneNumber:number
            })
           
      }

   


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
                if(currentUser){
                  setUser(currentUser)
                  
                }else{
                  setUser(null)
                }
                setLoading(false)
        })

        return ()=>{
            unsubscribe()
        }
    },[user])

    const authInfo = {
        handleGoogleLogin,
        handleRegister,
        handleLogin,
        handleLogOut,
        user,
        setUser,
        error,
        setError,
        loading,
        setLoading,
        success,
        setSuccess,
        handleUpdateProfile
    }


  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
