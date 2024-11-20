import React from 'react'

const Choose = () => {
  return (
   <>
         <section className="features-section bg-gray-50 py-12 mt-10">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Interactive Tools</h3>
          <p className="text-gray-600">
            Dive into engaging quizzes, flashcards, and games that make learning fun and easy.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Progress Tracking</h3>
          <p className="text-gray-600">
            Stay on track with personalized analytics and daily learning goals.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Real-World Vocabulary</h3>
          <p className="text-gray-600">
            Learn words and phrases used in everyday Japanese conversations.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section className="cta-section py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center mt-10 mb-10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Start Your Language Learning Journey Today!</h2>
          <p className="text-lg mb-8">
            Join thousands of learners mastering Japanese vocabulary. Sign up now and unlock the tools you need to succeed.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 font-semibold rounded-full shadow-md hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </section>
   </>
  )
}

export default Choose
