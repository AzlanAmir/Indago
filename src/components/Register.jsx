import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import image from "../assets/profile-img.jpg"
import logo from "../assets/indago-logo.png" // Replace with your actual logo path

function Register() {
    const [state,setState]=useState(true)
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      {/* Left Section */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="relative bg-[#1746C7] text-white rounded-2xl p-10 w-[380px] mx-auto">
          {/* Circle decoration */}

          <h1 className="text-white text-xl font-bold mb-10 tracking-wide">INDAGO.</h1>
          <h2 className="text-3xl font-bold leading-snug mb-6">Start your journey with us.</h2>
          <p className="text-base text-[#BFD4FF] mb-8">
            Track your job search progress with Indago – Never miss an update on your job application status.
          </p>

          <div className="bg-[#153BB5] p-4 rounded-xl">
            <p className="text-[#BFD4FF] text-sm mb-4">
              Indago is a great web app for job seekers. It helps to keep track of job applications and their statuses.
              Highly recommended for anyone actively searching for a job.
            </p>
            <div className="flex items-center mt-2">
              <img src={image} alt="Profile" className="h-10 w-10 rounded-full object-cover" />
              <div className="ml-3">
                <p className="font-semibold text-white text-sm">Azlan Amir</p>
                <p className="text-xs text-[#A6BFFF]">Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex flex-col justify-center items-center px-8">
        {/* Logo and Title */}
        <img src={logo} alt="Logo" className="h-12 mb-4" />
        <h1 className="text-3xl font-bold mb-8">Hello Again!</h1>

        <form className="w-full max-w-sm">
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#6D83F2] hover:bg-[#5A73E0] text-white py-3 rounded-lg font-semibold text-sm transition mb-4"
          >
            Login
          </button>

          {/* Create Account Link */}
          <p className="text-center text-sm text-gray-600 mb-6">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-[#1746C7] font-medium hover:underline">
              Create an account
            </Link>
          </p>

          {/* Try Demo Button */}
          <Link to="/demoClick">
            <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-[#1746C7] hover:bg-[#153BB5] text-white py-3 rounded-lg font-semibold text-sm transition mb-4"
          >
            Try Demo App <span className="text-lg">&rarr;</span>
          </button>
          </Link>

          {/* Go Back Button */}
          <Link to="/landing" className="block w-full">
            <button
              type="button"
              className="w-full border border-gray-300 text-gray-700 hover:bg-gray-100 py-3 rounded-lg font-semibold text-sm transition"
            >
              Go Back
            </button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Register
