import React from 'react'
import CountUp from 'react-countup'

const Count = () => {
  return (
    <section  data-aos="flip-up" className="success-section py-16 bg-blue-500 text-white mt-10 rounded-lg">
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <h3 className="text-5xl font-bold">
          <CountUp end={5000} duration={3} />
        </h3>
        <p className="text-lg mt-2">Users</p>
      </div>
      <div>
        <h3 className="text-5xl font-bold">
          <CountUp end={300} duration={3} />
        </h3>
        <p className="text-lg mt-2">Lessons</p>
      </div>
      <div>
        <h3 className="text-5xl font-bold">
          <CountUp end={15000} duration={3} />
        </h3>
        <p className="text-lg mt-2">Vocabulary</p>
      </div>
      <div>
        <h3 className="text-5xl font-bold">
          <CountUp end={200} duration={3} />
        </h3>
        <p className="text-lg mt-2">Tutorials</p>
      </div>
    </div>
  </section>
  )
}

export default Count
