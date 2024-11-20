import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {

  const {user,handleLogOut} = useContext(AuthContext);


  console.log(user)

  

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/startLearning'>Start-Learning</NavLink></li>
        <li><NavLink to='/tutorials'>Tutorials</NavLink></li>
        <li><NavLink to='/aboutUs'>About-US</NavLink></li>
        {
          user && <li><NavLink to='/profile'>Profile</NavLink></li>
        }
    </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Lingo BIngo</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">

          {links}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {
          user?.displayName && <p>welcome , {user.displayName}</p>
        }
         <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-[30px] rounded-full ring ring-offset-2 mx-auto">
                      <img src={user?.photoURL?user.photoURL:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                    </div>
                  </div>
        {
            user ? <button onClick={handleLogOut} className="btn btn-primary">Log Out</button> : <NavLink to='/login' className="btn btn-primary">Login</NavLink>
        }
         
      </div>
    </div>
  );
};

export default Navbar;
