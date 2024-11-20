import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-text-gradient">Oops!</h1>
      <p className="text-2xl mt-4 font-semibold">404! - Page Not Found</p>
      <p className="text-gray-600 mt-2">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex space-x-4 mt-6">
        <button
          onClick={handleGoBack}
          className="px-4 py-2 bg-gray-800 text-white rounded-md shadow hover:bg-gray-700 focus:outline-none"
        >
          Go Back
        </button>
        <Link
          to='/'
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-400 focus:outline-none"
        >
          Go to Homepage
        </Link>
      </div>
      <img
        src="https://via.placeholder.com/500x300.png?text=404+Error"
        alt="Error Illustration"
        className="mt-10 max-w-full rounded-md shadow-lg"
      />
    </div>
  );
};

export default ErrorPage;

