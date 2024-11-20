import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {

        const {user,loading} = useContext(AuthContext)
        const location = useLocation()
        
        console.log(location)
     
        if(loading){
            return <div className='flex justify-center items-center h-screen'>
                <span className="loading loading-bars loading-lg "></span>
            </div>
        }

        if(!user){
            return <Navigate state={location.pathname} to='/login'></Navigate>
        }
           
      



  return (
    <div>
            {children}
    </div>
  )
}

export default PrivateRoute
