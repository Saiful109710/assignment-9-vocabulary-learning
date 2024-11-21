import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  
  const navigate = useNavigate()
    const {handleUpdateProfile,success} = useContext(AuthContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    const name= e.target.name.value;
    const photo = e.target.photo.value;
    const number = e.target.number.value;
    

    handleUpdateProfile(name,photo)
    .then(()=>{
      toast.success('Profile Updated Successfully')
      navigate('/profile/myProfile')
      
    })
    .catch(err=>{
      setError(err.message)
      toast.error(err.message)
    })
    




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
        
         
          <div className="form-control mt-6">
            <button className="btn bg-slate-950 hover:bg-slate-700 text-white shadow-xl ">Save changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
