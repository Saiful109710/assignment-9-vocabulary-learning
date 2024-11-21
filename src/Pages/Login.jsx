import React, { useContext, useRef } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
      const {handleLogin,handleGoogleLogin,user,setUser,error,setError} = useContext(AuthContext)
        const {setLoading} = useContext(AuthContext)
        const location = useLocation()
        const navigate = useNavigate()
        console.log(location)
        const emailRef = useRef()

    const handleSubmit = (e)=>{
        e.preventDefault()
        setError(null)

        const email = e.target.email.value;
        const password = e.target.password.value;
        

        handleLogin(email,password)
        .then(res=>{
            setUser(res.user)
            setLoading(true)
            toast.success('Login Successfully')
            navigate(location.state)

        })
        .catch(err=>{
            setError(err.message)
            toast.error(err.message)
            setLoading(true)
        })

    }

    const googleHandler = ()=>{
      handleGoogleLogin()
      .then(res=>{
        setLoading(false)
        toast.success('Login Successfully')
        navigate(location.state?location.state:'/')
      }).catch(err=>{
        setError(err.message)
        toast.error(err.message)
      })
      
    }

    const handleForgetPassword=()=>{

        const email = emailRef.current.value;
        console.log(email)

        navigate('/forgetPassword',{state:{email}})

    }

   

  return (
    <div className="flex flex-col justify-center items-center mt-10 w-[400px] mx-auto space-y-5">
      <div className="card bg-base-100 w-full  shrink-0 shadow-2xl py-5">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name='email'
              ref={emailRef}
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
            <label className="label">
              <a onClick={handleForgetPassword}  className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        {
          error && <p className="text-red-500 px-8">{error.split('/')}</p>
        }
        <p className="text-center">
          New in This Website?{" "}
          <Link to="/register" className="text-red-500">
            Create New Account
          </Link>
        </p>
      </div>

      <button onClick={googleHandler} className="btn w-full ">
        <FaGoogle></FaGoogle> Google Login
      </button>
    </div>
  );
};

export default Login;
