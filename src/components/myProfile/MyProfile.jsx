import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import Courses from '../Courses/Courses'
import { Link, useNavigate } from 'react-router-dom'
import Modal from 'react-modal'

const MyProfile = () => {
    const {user} = useContext(AuthContext)
    const [modalData,setModalData] = useState(null)
      const [enrolledCorses,setEnrolledCourses] = useState([])
      const navigate = useNavigate()

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
                  <h2 className='font-bold text-xl text-center'>Welcome</h2>
            {
                user?.displayName && <p className='md:text-lg '>Name: {user.displayName}</p>
            }

            {
                user?.email && <p className='md:text-lg'>Email : {user.email}</p>
            }
            {
                user?.phoneNumber && <p>Phone:{user.phoneNumber}</p>
            }
            <Link to='/profile/updateProfile'><button  className=' btn bg-slate-950 shadow-2xl font-bold text-white hover:bg-slate-800'>Update Profile</button></Link>
            </div>

            <div className='bg-slate-900 rounded-2xl p-10 flex flex-col gap-5 '>
                <h2 className='text-center font-bold text-3xl'>Your Courses</h2>
              <div className='flex flex-wrap gap-5 '>
              {
                  enrolledCorses.map((course)=>(
                   <div className=' p-5 shadow-xl rounded-2xl bg-slate-950 space-y-5 ' >
                     <div className='flex flex-col justify-center items-center gap-5'>
                     <h2 className='text-xl font-bold'>{course.name}</h2>
                      <p>Enrollment Date: {course.date}</p>
                      <div className="radial-progress" style={{ "--value": 70 }} role="progressbar">
                        70%
                      </div>
                     </div>
                      
                        <div className='flex justify-end'>
                          <button onClick={()=>setModalData(course)} className='btn bg-slate-900 text-white shadow-2xl '>History</button>
                        </div>
                      
                   </div>
                  ))
                }
              </div>
            </div>

    </div>
    {
      modalData && (
        <Modal
           isOpen={!!modalData}
          onRequestClose={() => setModalData(null)}
          contentLabel="Vocabulary Details"
          className="max-w-md mx-auto p-4 bg-slate-800 *:text-white rounded shadow-md"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">

          <div className='p-5 space-y-3'>
          <h2 className='text-lg font-semibold'>Course Name : {modalData.name}</h2>
              <p>Enrolment Data: {modalData.date}</p>
              <p>Amount:${modalData.price}</p>
              <p>Payment Method:{modalData?.paymentMethod}</p>
              <p>Transaction id: {modalData?.transactionId}</p>
          </div>
          <button
            onClick={() => setModalData(null)}
            className="mt-4 bg-slate-900 hover:bg-slate-600 text-white py-2 px-4 rounded"
          >
            Close
          </button>
        </Modal>
      )
    }
  </>
  )
}

export default MyProfile
