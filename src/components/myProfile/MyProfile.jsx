import React, { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'

const MyProfile = () => {
    const {user} = useContext(AuthContext)
  return (
    <div className='bg-slate-800 *:text-white p-5 rounded-xl shadow-lg h-screen flex justify-center items-center'>
            <div className='bg-slate-900 rounded-2xl p-10 flex flex-col gap-5'>
            <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2 mx-auto">
                      <img src={user?.photoURL?user.photoURL:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                    </div>
                  </div>
            {
                user?.displayName && <h2 className='text-lg '>Name: {user.displayName}</h2>
            }

            {
                user?.email && <p className='text-lg'>Email:{user.email}</p>
            }
            {
                user?.phoneNumber && <p>Phone:{user.phoneNumber}</p>
            }
            </div>

    </div>
  )
}

export default MyProfile
