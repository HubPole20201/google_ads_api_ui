'use client';

import Signin from '@/components/SignIn';
import Signup from '@/components/SignUp';
import Link from 'next/link';
import { useState } from 'react';

const Home = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Google Ads API Frontend</h1>

      {!isSignUp ? (
        <>
        <Signin />
        <button 
        onClick={toggleForm} 
        className="text-blue-600 hover:underline ml-2"
      >
        Sign Up
      </button>
      </>
      ) : (
        <Signup/>
      )}
    </div>
  );
};

export default Home;
