import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import Vocabulary_card from '../components/Vocabulary_card/Vocabulary_card'
import { AuthContext } from '../Provider/AuthProvider'
import { Helmet } from 'react-helmet-async'

const Lesson = () => {

   
    

    const [Vocabularies,setVocabularies] = useState([])
    const [modalData,setModalData] =useState(null) 
    const navigate = useNavigate()

    const data = useLoaderData()
    const {lesson_no} = useParams()

    useEffect(()=>{
        const filteredData = data.filter((singleData)=>singleData.lesson_no === parseInt(lesson_no))
        setVocabularies(filteredData)
    },[data,lesson_no])



    
    
  return (
    <div className='mb-5 p-5'>
                <Helmet>
                  <title>Lesson - {lesson_no}  | Lingo Bingo</title>
                </Helmet>
                
            <h2 className='text-xl font-bold text-center text-white'><span className=' rounded-lg p-2 bg-gradient-to-r bg-primary'>Lesson No: {lesson_no}</span></h2>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-5 my-10'>
                {
                    Vocabularies.map((vocabulary,index)=><Vocabulary_card key={index} vocabulary={vocabulary}></Vocabulary_card>)
                }
            </div>
            <div className='flex justify-center items-center'>
                <button onClick={()=>navigate(-1)} className='btn  bg-primary hover:bg-blue-600 text-white'>Back to the Lesson</button>
            </div>

             
      
    </div>
  )
}

export default Lesson
