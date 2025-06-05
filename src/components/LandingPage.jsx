import React from 'react'
import image from '../assets/indago-landing-page-img.svg'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
function LandingPage() {
  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center px-10 py-20 bg-white min-h-screen">
      {/* Left Side */}
      
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">Job tracking tool for software engineers</h1>
        <p className="text-lg text-gray-600 mb-8">
          Track your job search progress with Indago - Never miss an update on your job application status.
        </p>
        <Link to="/register">
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md text-lg">
          Get Started
        </button>
        </Link>
      </div>

      {/* Right Side */}
      <div className="hidden md:block">
        <img src={image} alt="Landing Visual" className="max-w-md" />
      </div>
    </div>
    </>
  )
}

export default LandingPage