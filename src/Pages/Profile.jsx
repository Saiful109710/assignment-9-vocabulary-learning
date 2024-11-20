import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
        <div className='grid grid-cols-12 '>
            <aside className='col-span-3 bg-slate-900 *:text-white flex flex-col h-screen gap-2 p-5 rounded-xl'>
                <div className=' bg-gray-500  p-5 rounded-xl text-center'>
                    <NavLink to='myProfile' className='w-full  text-xl font-bold'>My Profile</NavLink>
                </div>
                <div className=' bg-gray-500 p-5 rounded-xl text-center'>
                    <NavLink to='updateProfile' className='w-full  text-xl font-bold'>Update Profile</NavLink>
                </div>
            </aside>
            <main className='col-span-9'>
                    <Outlet></Outlet>
            </main>
        </div>
    </div>
  )
}

export default Profile
