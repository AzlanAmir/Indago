import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Indago</h1>
      <div className="space-x-4">
        <Link to="/register">
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md">Login</button>
        </Link>
        <Link to="/register">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md">Get Started</button>
        </Link>
      </div>
    </nav>
    </div>
  )
}

export default Navbar