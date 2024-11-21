import React from "react";

import { FaGlobe, FaLightbulb, FaUserGraduate } from "react-icons/fa";

const AboutUs = () => {
  return (
    <>
        <section data-aos="zoom-out-right" className="py-16 ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <h1 className="text-5xl font-bold mb-6">About Us</h1>
        <p className="text-xl mb-12">
          At <strong>Lingo Bingo</strong>, we strive to make Japanese vocabulary learning interactive, enjoyable, and deeply enriching.
        </p>

        {/* Cards */}
        <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {/* Card 1 */}
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-white text-blue-600 rounded-full mx-auto mb-4">
              <FaLightbulb className="text-3xl" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p>
              To empower learners by providing tools that make mastering Japanese vocabulary seamless and exciting.
            </p>
          </div>

          {/* Card 2 */}
          <div data-aos="zoom-out-up" className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ">
            <div className="flex items-center justify-center w-16 h-16 bg-white text-green-600 rounded-full mx-auto mb-4">
              <FaGlobe className="text-3xl" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">What Makes Us Different</h2>
            <ul className="space-y-2">
              <li><span className="font-bold text-green-400">✔</span> Interactive quizzes and flashcards</li>
              <li><span className="font-bold text-green-400">✔</span> Real-world vocabulary focus</li>
              <li><span className="font-bold text-green-400">✔</span> Personalized progress tracking</li>
              <li><span className="font-bold text-green-400">✔</span> Insights into Japanese culture</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div data-aos="zoom-out-right" className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ">
            <div className="flex items-center justify-center w-16 h-16 bg-white text-purple-600 rounded-full mx-auto mb-4">
              <FaUserGraduate className="text-3xl" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Who Is This For?</h2>
            <p>
              Whether you're a traveler, student, or simply curious, our platform is tailored to meet your language learning needs.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutUs;
