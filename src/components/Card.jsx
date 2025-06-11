import React, { useState } from 'react';
import companyLogo from "../assets/indago-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';

function Card({inputField,dropDownType,dropDownStatus}) {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  const jobs = [
  { companyName: "Dropbox", jobPost: "Product Manager", location: "Chicago, IL", status: "Declined", type: "Internship" },
  { companyName: "Uber", jobPost: "Security Engineer", location: "Santa Clara, CA", status: "Interview", type: "Part Time" },
  { companyName: "Dropbox", jobPost: "Data Analyst", location: "Los Gatos, CA", status: "Interview", type: "Part Time" },
  { companyName: "Intel", jobPost: "DevOps Engineer", location: "Denver, CO", status: "Declined", type: "Part Time" },
  { companyName: "LinkedIn", jobPost: "Systems Administrator", location: "Boston, MA", status: "Pending", type: "Full Time" },
  { companyName: "Airbnb", jobPost: "QA Analyst", location: "Austin, TX", status: "Pending", type: "Internship" },
  { companyName: "Lyft", jobPost: "Frontend Developer", location: "Denver, CO", status: "Pending", type: "Internship" },
  { companyName: "Adobe", jobPost: "Product Manager", location: "New York, NY", status: "Interview", type: "Part Time" },
  { companyName: "Microsoft", jobPost: "Backend Developer", location: "San Francisco, CA", status: "Declined", type: "Internship" },
  { companyName: "Pinterest", jobPost: "Systems Administrator", location: "Cupertino, CA", status: "Pending", type: "Full Time" },
  { companyName: "Netflix", jobPost: "Database Engineer", location: "San Jose, CA", status: "Declined", type: "Part Time" },
  { companyName: "Zoom", jobPost: "Machine Learning Engineer", location: "San Francisco, CA", status: "Interview", type: "Part Time" },
  { companyName: "Salesforce", jobPost: "Database Engineer", location: "Menlo Park, CA", status: "Declined", type: "Internship" },
  { companyName: "Dropbox", jobPost: "Machine Learning Engineer", location: "Chicago, IL", status: "Interview", type: "Part Time" },
  { companyName: "Snapchat", jobPost: "iOS Developer", location: "Austin, TX", status: "Pending", type: "Internship" },
  { companyName: "Spotify", jobPost: "Database Engineer", location: "Cupertino, CA", status: "Pending", type: "Part Time" },
  { companyName: "Lyft", jobPost: "Security Engineer", location: "Austin, TX", status: "Declined", type: "Part Time" },
  { companyName: "Adobe", jobPost: "iOS Developer", location: "Mountain View, CA", status: "Pending", type: "Full Time" },
  { companyName: "Adobe", jobPost: "Frontend Developer", location: "Santa Clara, CA", status: "Pending", type: "Part Time" },
  { companyName: "Google", jobPost: "DevOps Engineer", location: "Chicago, IL", status: "Declined", type: "Full Time" },
  { companyName: "Uber", jobPost: "Data Scientist", location: "Atlanta, GA", status: "Pending", type: "Part Time" },
  { companyName: "Salesforce", jobPost: "iOS Developer", location: "Santa Clara, CA", status: "Pending", type: "Internship" },
  { companyName: "Adobe", jobPost: "UI/UX Designer", location: "San Francisco, CA", status: "Interview", type: "Part Time" },
  { companyName: "Adobe", jobPost: "Systems Administrator", location: "New York, NY", status: "Interview", type: "Full Time" },
  { companyName: "Airbnb", jobPost: "iOS Developer", location: "Seattle, WA", status: "Interview", type: "Part Time" },
  { companyName: "Netflix", jobPost: "Product Manager", location: "Los Gatos, CA", status: "Declined", type: "Internship" },
  { companyName: "Uber", jobPost: "Machine Learning Engineer", location: "San Jose, CA", status: "Interview", type: "Full Time" },
  { companyName: "Salesforce", jobPost: "Frontend Developer", location: "Santa Clara, CA", status: "Interview", type: "Internship" },
  { companyName: "Apple", jobPost: "Machine Learning Engineer", location: "New York, NY", status: "Interview", type: "Full Time" },
  { companyName: "Twitter", jobPost: "Data Analyst", location: "Chicago, IL", status: "Declined", type: "Internship" },
  { companyName: "Microsoft", jobPost: "Systems Administrator", location: "Cupertino, CA", status: "Declined", type: "Full Time" },
  { companyName: "Spotify", jobPost: "Android Developer", location: "Denver, CO", status: "Declined", type: "Full Time" },
  { companyName: "Dropbox", jobPost: "Data Scientist", location: "Cupertino, CA", status: "Pending", type: "Internship" },
  { companyName: "Intel", jobPost: "DevOps Engineer", location: "San Jose, CA", status: "Declined", type: "Part Time" },
  { companyName: "Snapchat", jobPost: "UI/UX Designer", location: "Menlo Park, CA", status: "Interview", type: "Full Time" },
  { companyName: "Meta", jobPost: "iOS Developer", location: "Los Gatos, CA", status: "Declined", type: "Full Time" },
  { companyName: "Lyft", jobPost: "UI/UX Designer", location: "Cupertino, CA", status: "Pending", type: "Part Time" },
  { companyName: "Microsoft", jobPost: "Database Engineer", location: "Redmond, WA", status: "Declined", type: "Internship" },
  { companyName: "LinkedIn", jobPost: "Backend Developer", location: "Redmond, WA", status: "Declined", type: "Internship" },
  { companyName: "Apple", jobPost: "QA Analyst", location: "Los Gatos, CA", status: "Interview", type: "Full Time" },
  { companyName: "Apple", jobPost: "Frontend Developer", location: "Santa Clara, CA", status: "Interview", type: "Internship" },
  { companyName: "Intel", jobPost: "Data Scientist", location: "Chicago, IL", status: "Interview", type: "Internship" },
  { companyName: "LinkedIn", jobPost: "Systems Administrator", location: "Menlo Park, CA", status: "Pending", type: "Internship" },
  { companyName: "Meta", jobPost: "Cloud Architect", location: "Redmond, WA", status: "Declined", type: "Part Time" },
  { companyName: "Twitter", jobPost: "Machine Learning Engineer", location: "Cupertino, CA", status: "Declined", type: "Part Time" },
  { companyName: "Meta", jobPost: "Product Manager", location: "Menlo Park, CA", status: "Pending", type: "Part Time" },
  { companyName: "Airbnb", jobPost: "Cloud Architect", location: "New York, NY", status: "Declined", type: "Part Time" },
  { companyName: "Slack", jobPost: "Data Scientist", location: "Cupertino, CA", status: "Interview", type: "Internship" },
  { companyName: "Uber", jobPost: "Security Engineer", location: "Seattle, WA", status: "Interview", type: "Part Time" },
  { companyName: "Meta", jobPost: "Security Engineer", location: "Santa Clara, CA", status: "Pending", type: "Part Time" }
];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Interview":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Declined":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };


const filteredJobs = jobs.filter((job) => {
  const matchesCompany = job.companyName.toLowerCase().includes(inputField.toLowerCase());
  const matchesStatus = dropDownStatus === "" || job.status === dropDownStatus;
  const matchesType = dropDownType === "" || job.type === dropDownType;
  return matchesCompany && matchesStatus && matchesType;
});


const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
const indexOfLastJob = currentPage * jobsPerPage;
const indexOfFirstJob = indexOfLastJob - jobsPerPage;
const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);



  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentJobs.map((job, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-5 border border-gray-100"
          >
            <div className="flex items-start justify-between space-x-4 mb-4">
              <div className="flex gap-2">
                <img
                  src={companyLogo}
                  alt="Company"
                  className="w-12 h-12 object-contain"
                />
                <div className="flex justify-center flex-col items-start gap-2">
                  <h3 className="text-xl  text-gray-400">
                    {job.companyName}
                  </h3>
                  <h3 className="text-md font-medium text-gray-800">
                    {job.jobPost}
                  </h3>
                  <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faLocationCrosshairs} style={{color: "#6b7280",}} />
                  <p className="text-sm text-gray-500">{job.location}</p>
                  </div>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(
                  job.status
                )}`}
              >
                {job.status}
              </span>
            </div>
            <div className="flex justify-end mt-4">
              <span className="text-sm text-gray-600">{job.type}</span>
            </div>
          </div>
        ))}
      </div>

      

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 gap-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Card;
