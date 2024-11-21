import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Modal from 'react-modal';

const Vocabulary_card = ({ vocabulary }) => {
  
            const [modalData,setModalData] = useState(null)
            
   
  const {
    id,
    word,
    pronunciation,
    meaning,
    part_of_speech,
    difficulty,
    lesson_no,
    when_to_say,
    example,
  } = vocabulary;

    const getDifficultyColor = (difficulty)=>{
                switch(difficulty){
                    case 'easy':
                        return 'bg-green-100 text-green-800';
                    case 'medium':
                        return 'bg-yellow-100 text-yellow-800' ;
                    case 'hard':
                        return 'bg-red-100 text-red-800';
                    default:
                        return 'bg-gray-100 text-gray-800'           
                }
    }

    const pronounceWord = (word)=>{
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.lang = 'ko-KR';
            window.speechSynthesis.speak(utterance)
    }
    
  return <>
                
        <div onClick={()=>pronounceWord(word)} className={`p-5 ${getDifficultyColor(difficulty)}  shadow-lg rounded-xl hover:scale-105 space-y-3 cursor-pointer`}>
            <h2 className="text-xl font-bold text-center">{word}</h2>
            <p> <span className=" font-semibold md:font-bold">Pronunciation</span> : {pronunciation}</p>
            <p className=""><span className="font-semibold md:font-bold">Meaning</span> : {meaning}</p>
            <p className=""><span className=" font-semibold md:font-bold">Part of Speech</span> : {part_of_speech}</p>
            <button onClick={()=>setModalData(vocabulary)}  className={`btn btn-sm bg-blue-500 hover:bg-blue-600 text-white`}>When To Say</button>

            {/* Modal */}
      {modalData && (
        <Modal
          isOpen={!!modalData}
          onRequestClose={() => setModalData(null)}
          contentLabel="Vocabulary Details"
          className="max-w-md mx-auto p-4 bg-white rounded shadow-md"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <h2 className="text-xl font-bold mb-4">{modalData.word}</h2>
          
          <p className="mb-2">
            <strong>Meaning:</strong> {modalData.meaning}
          </p>
          <p className="mb-2">
            <strong>When to Say:</strong> {modalData.when_to_say}
          </p>
          <p className="mb-2">
            <strong>Example:</strong> {modalData.example}
          </p>
          <button
            onClick={() => setModalData(null)}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Close
          </button>
        </Modal>
      )}
           
        </div>

     
  </>
};

export default Vocabulary_card;

const obj = {
  id: "word103",
  word: "버스",
  pronunciation: "beoseu",
  meaning: "bus",
  part_of_speech: "noun",
  difficulty: "easy",
  lesson_no: 10,
  when_to_say: "Used to refer to a bus.",
  example:
    "저는 버스를 타고 학교에 가요. (jeoneun beoseureul tago hakgyoe gayo) - I take the bus to go to school.",
};
