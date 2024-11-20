import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { FaPlus } from "react-icons/fa";

const Tutorials = () => {
  const navigate = useNavigate()
  const [toggle,setToggle] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null);
  const [tutorial,setTutorial] = useState(null)
  const [video,setVideo] = useState("https://www.youtube.com/embed/YysEVF3s0n8?si=ttds2Cpvo8DCYjdR" )
  const {iframeData,koreanLanguageData} = useLoaderData()
  console.log(iframeData,koreanLanguageData)
  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle the active index
  };



  return (
    <div>
          <h2 className='text-2xl font-bold text-center my-5'>Tutorials</h2>

          <div className='grid grid-cols-2 h-[500px] gap-5 my-10 p-5 bg-gray-100'>
            <div className='overflow-scroll'>
            {
              koreanLanguageData.map((category,index)=>(
                <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">{category.title}</div>
            <div className="collapse-content">
              <ul className='space-y-2'>
                {category.topics.map((topic,index)=>(
                      
                        <li onClick={()=>setVideo(topic.videoLink)}  className='bg-gray-200  flex justify-between items-center px-5 py-2 rounded-xl cursor-pointer'>
                         <div className=''>
                         <h4 className='font-semibold'>{topic.title}</h4>
                         {/* Show description only if index matches activeIndex */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-out ${
                          activeIndex === index
                            ? "max-h-40 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="mt-2">{topic.description}</p>
                      </div>
                         </div>
                         <div>
                          <FaPlus className='cursor-pointer' onClick={()=>handleToggle(index)}></FaPlus>

                         </div>
                         
                        </li>
                      
                      
                ))}
              </ul>
            </div>
          </div>
              ))
            }
         
          
           </div>
            {/* iframe video */}
            <div>
            <iframe className='w-full h-full' src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>

          <div className='carousel carousel-end rounded-box'>
              {
                iframeData.map((Data,index)=>(
                  <div  className="carousel-item ml-5">
                      <iframe className='w-full h-[300px] shadow-lg rounded-xl' src={Data.embedLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                ))
              }
          </div>

         <div className='flex justify-center items-center my-5'>
         <button onClick={()=>navigate('/startLearning')} className='btn btn-primary'>Learn Vocabularies</button>
         </div>
    </div>
  )
}

export default Tutorials
