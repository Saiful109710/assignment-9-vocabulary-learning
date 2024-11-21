import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {

  const {setLoading} = useContext(AuthContext)
  const navigate = useNavigate()

  const {handleRegister,user,setUser,handleGoogleLogin,error,setError} = useContext(AuthContext)
  const handleSubmit=(e)=>{

    
        e.preventDefault();
        setError(null)

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value
      console.log(password,confirmPassword)
        
      if(password.length<6){
           return setError("Password should be more than 6 character")
      }
      if(password!==confirmPassword){
          return setError("password didn't match")
      }

      if(!/[a-z]/.test(password)){
          return setError('Password Should have atleast one lowercase')
      }
      if(!/[A-Z]/.test(password)){
          return setError('Password should have atleast one Uppercase')
      }
        

        handleRegister(email,password)
        .then(res=>{
          setUser(res.user)
          setLoading(false)
          toast.success('registration successfully')
          navigate('/')
        
        })
        .catch((err)=>{
          setError(err.message)
          toast.error(err.message)
          setLoading(false)
        })

    


     


  }

      const googleHandler = ()=>{
        handleGoogleLogin()
        .then(res=>{
          toast.success('registration successfully')
        }).catch(err=>{
          toast.error(err.message)
        })
    }
  return (
    <div className="flex flex-col justify-center items-center mt-5 w-[400px] mx-auto space-y-5 mb-10">
      <div className="card bg-base-100 w-full  shrink-0 shadow-2xl py-5">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name='name'
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name='photo'
              placeholder="photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name='email'
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name='password'
              placeholder="password"
              className="input input-bordered"
              required
            />
      
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              name='confirmPassword'
              placeholder="Confirm password"
              className="input input-bordered"
              required
            />
      
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        {
          error && <p className="text-red-500 px-4">{error.split('/')}</p>
        }
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-red-500">
            Login
          </Link>
        </p>
      </div>

      <button className="btn w-full" onClick={googleHandler}>
        <FaGoogle></FaGoogle> Google Login
      </button>
    </div>
  );
};

export default Register;
