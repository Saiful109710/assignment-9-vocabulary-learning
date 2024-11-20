import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const UpdateProfile = () => {

    const {handleUpdateProfile} = useContext(AuthContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    const name= e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password  = e.target.password.value;

    handleUpdateProfile(name,photo)



  };
  return (
    <div className="bg-slate-800 h-screen rounded-xl *:text-white pt-5 flex flex-col gap-5  items-center">
      <h2 className="text-3xl font-bold text-center">Update Your Profile</h2>

      <div className="card bg-slate-900 w-full max-w-2xl shrink-0 shadow-2xl ">
        <form onSubmit={handleSubmit} className="card-body bg-transparent *:text-white">
          <div className="form-control">
            <label className="label">
              <span className="">Update Name</span>
            </label>
            <input
              type="text"
              name='name'
              placeholder="Name"
              className="input border border-black bg-transparent "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="">Update Photo</span>
            </label>
            <input
              type="text"
              name='photo'
              placeholder="Photo"
              className="input border border-black bg-transparent "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="">Update Email</span>
            </label>
            <input
              type="email"
              name='email'
              placeholder="email"
              className="input border border-black bg-transparent "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="">Update Password</span>
            </label>
            <input
              type="password"
              name='password'
              placeholder="password"
              className="input border border-black bg-transparent "
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Save changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
