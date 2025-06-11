import React, { useState } from "react";
import companyLogo from "../assets/indago-logo.png";
import Card from "./Card";
function AllJobs() {
  const [inputField, setInputField] = useState('')
  const [dropDownStatus, setDropDownStatus] = useState('')
  const [dropDownType, setDropDownType] = useState('')
  return (
    <div className="p-8">
      {/* Filters */}
      <div className="flex justify-center flex-wrap items-center gap-4 mb-6">
        <input
          type="text"
          value={inputField}
          placeholder="Search by company..."
          className="px-4 py-2 border rounded-md shadow-sm w-64"
          onChange={(e) => { setInputField(e.target.value) }}
        />
        <select className="px-4 py-2 border rounded-md shadow-sm"
          value={dropDownStatus}
          onChange={(e) => setDropDownStatus(e.target.value)}>
          <option value="">Filter by Status</option>
          <option value="Pending">Pending</option>
          <option value="Interview">Interview</option>
          <option value="Declined">Declined</option>
        </select>
        <select className="px-4 py-2 border rounded-md shadow-sm"
          value={dropDownType}
          onChange={(e) => setDropDownType(e.target.value)}>
          <option value="">Filter by Type</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Internship">Internship</option>
        </select>
        <button onClick={() => {
          setInputField('')
          setDropDownStatus('')
          setDropDownType('')
        }} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">Clear</button>
      </div>

      {/* Job Cards */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-15"> */}
      {/* Example Card */}
      <Card inputField={inputField} dropDownType={dropDownType} dropDownStatus={dropDownStatus} />
      {/* </div> */}
    </div>
  );
}

export default AllJobs;
