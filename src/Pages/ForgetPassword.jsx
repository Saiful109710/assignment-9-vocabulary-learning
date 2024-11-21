import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase/firebase.config';
import { AuthContext } from '../Provider/AuthProvider';

const ForgetPassword = () => {
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()

    const {loading,setLoading} = useContext(AuthContext)

 
    const handleSubmit = (e)=>{
            e.preventDefault();

            const email = e.target.email.value;
            if(!email){
                toast.error('Please Provide a valid email')
                
            }else{
                setLoading(true)
               
                sendPasswordResetEmail(auth,email)
                .then(res=>{
                    toast.success('Send Password Verification email. Please Check')
                    setTimeout(()=>{
                        window.location.href='https://mail.google.com/mail/u/0/#inbox'
                    },2000)
                    setLoading(false)
                    
                }).catch(err=>{
                    toast.error(err.message)
                    setLoading(false)
                })
                
                
            }

          
    }

    if(loading){
        return <div className='flex justify-center items-center h-screen'>
        <span className="loading loading-bars loading-lg "></span>
    </div>
    }
  return (
    <div className="card bg-base-100   shrink-0 shadow-2xl py-5 w-[400px] mx-auto mt-10">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name='email'
             
              defaultValue={location.state?.email || ''}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
         
           
          <div className="form-control mt-6">
            <button className="btn btn-primary">Reset Password</button>
          </div>
        </form>
      
      </div>
  )
}

export default ForgetPassword
