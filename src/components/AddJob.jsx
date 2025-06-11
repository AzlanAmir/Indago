import React from 'react';

function AddJob() {
  return (
    <div className=" flex bg-gray-50">
      

      <div className="flex-1 p-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Job</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Position"
            className="p-3 rounded-lg border border-gray-300"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="p-3 rounded-lg border border-gray-300"
          />
          <input
            type="text"
            placeholder="Location"
            className="p-3 rounded-lg border border-gray-300"
          />

          {/* Job Type Dropdown */}
          <select className="p-3 rounded-lg border border-gray-300">
            <option value="">Select Job Type</option>
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="internship">Internship</option>
            <option value="contract">Contract</option>
          </select>

          {/* Status Dropdown */}
          <select className="p-3 rounded-lg border border-gray-300">
            <option value="">Select Status</option>
            <option value="pending">Pending</option>
            <option value="interview">Interview</option>
            <option value="declined">Declined</option>
            <option value="accepted">Accepted</option>
          </select>

          <textarea
            placeholder="About Job"
            className="p-3 rounded-lg border border-gray-300 col-span-1 md:col-span-2 resize-none h-32"
          ></textarea>

          <div className="flex gap-4 col-span-1 md:col-span-2">
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Add Job
            </button>
            <button type="reset" className="bg-gray-300 text-black px-6 py-2 rounded-lg hover:bg-gray-400">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddJob;
