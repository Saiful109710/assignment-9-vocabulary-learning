import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import Courses from '../Courses/Courses'

const MyProfile = () => {
    const {user} = useContext(AuthContext)
      const [enrolledCorses,setEnrolledCourses] = useState([])

      useEffect(()=>{
          const localData = localStorage.getItem('cart')
          if(localData){
            setEnrolledCourses(JSON.parse(localData))
          }
      },[])
      console.log(enrolledCorses)
  return (
  <>
      <div className='bg-slate-800 *:text-white p-5 rounded-xl shadow-lg h-screen space-y-5 overflow-scroll'>
            <div className='bg-slate-900 rounded-2xl p-10 flex flex-col gap-5 justify-center items-center'>
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

            <div className='bg-slate-900 rounded-2xl p-10 flex flex-col gap-5 '>
                <h2 className='text-center font-bold text-3xl'>Your Courses</h2>
              <div className='flex flex-wrap gap-5 '>
              {
                  enrolledCorses.map((course)=>(
                   <div className=' p-5 shadow-xl rounded-2xl bg-slate-950 space-y-5 flex flex-col justify-center items-center' >
                      <h2 className='text-xl font-bold'>{course.name}</h2>
                      <p>Enrollment Date: {course.date}</p>
                      <div className="radial-progress" style={{ "--value": 70 }} role="progressbar">
                        70%
                      </div>
                   </div>
                  ))
                }
              </div>
            </div>

    </div>
  </>
  )
}

export default MyProfile
