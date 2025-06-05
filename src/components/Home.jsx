import React,{useState} from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/indago-logo.png";
import Chart1 from './BarChart';
import Chart2 from './AreaChart';
function Home() {
  const [currentChart,setChart]=useState(true)
  const [area,setarea]=useState("Area Chart")
  function handleChart() {
    
    if(currentChart){
      setChart(!currentChart)
      setarea("Bar Chart")
    }
    else{
      setChart(!currentChart)
      setarea("Area Chart")
    }
  }
  return (
    <div className="h-[80%] flex bg-gray-50">
       

      <div className="flex-1 p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] text-white rounded-2xl p-6 shadow-lg flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white bg-opacity-10 rounded-full p-3">
                <img src={logo} alt="Pending" className="h-6 w-6" />
              </div>
              <div>
                <p className="text-lg font-medium">Pending Applications</p>
              </div>
            </div>
            <span className="text-4xl font-bold text-white opacity-70">20</span>
          </div>

          <div className="bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] text-white rounded-2xl p-6 shadow-lg flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white bg-opacity-10 rounded-full p-3">
                <img src={logo} alt="Interviews" className="h-6 w-6" />
              </div>
              <div>
                <p className="text-lg font-medium">Interviews Schedules</p>
              </div>
            </div>
            <span className="text-4xl font-bold text-white opacity-70">12</span>
          </div>

          <div className="bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] text-white rounded-2xl p-6 shadow-lg flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white bg-opacity-10 rounded-full p-3">
                <img src={logo} alt="Declined" className="h-6 w-6" />
              </div>
              <div>
                <p className="text-lg font-medium">Jobs Declined</p>
              </div>
            </div>
            <span className="text-4xl font-bold text-white opacity-70">19</span>
          </div>
        </div>

        {/* Monthly Applications */}
        <div className="text-center mt-20">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Monthly Applications</h2>
          <Link className="text-[#1746C7] font-medium hover:underline" onClick={handleChart}>
          {currentChart ? area : area}
        </Link>
         {currentChart ? <Chart1/> : <Chart2/>}
        </div>
      </div>

    </div>
  );
}

export default Home