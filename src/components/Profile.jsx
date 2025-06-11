import React from "react";
import profile from "../assets/profile-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  return (
    <div className="bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-gray-50 p-8">
        <h2 className="text-2xl font-semibold mb-1">Profile</h2>
        <p className="text-gray-500 mb-6">Update your phone and personal details here.</p>

        {/* Profile Image with File Input */}
        <div className="flex justify-center mb-8">
          <div className="relative w-24 h-24">
            {/* Default Profile Image (Your image) */}
            <img
              src={profile}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border"
            />

            {/* Hidden File Input */}
            <input
              type="file"
              accept="image/*"
              id="profileImage"
              className="hidden"
            />

            {/* Label for File Input (Camera Icon Button) */}
            <label
              htmlFor="profileImage"
              className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 cursor-pointer"
            >
              <FontAwesomeIcon icon={faCamera} className="text-white text-sm" />
            </label>
          </div>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">First Name</label>
            <input
              type="text"
              defaultValue="Azlan"
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Last Name</label>
            <input
              type="text"
              defaultValue="Amir"
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <input
              type="email"
              defaultValue="admin@test.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Location</label>
            <input
              type="text"
              defaultValue="California, USA"
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-1">Bio</label>
          <textarea
            rows="4"
            defaultValue="Software Engineer, Google, USA"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
