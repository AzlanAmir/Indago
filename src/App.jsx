
import {Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from './components/LandingPage'
import Register from './components/Register'
import './App.css'
import Home from './components/Home';
import AllJobs from './components/AllJobs';
import Sidebar from './components/Sidebar';
import AddJob from './components/AddJob';
import Layout from "./components/Layout";
import Example from"./components/BarChart"
import Profile from "./components/Profile";
function App() {

  return (
    <div>
     
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/landing" element={<LandingPage/>}/>
        <Route path="/demoClick" element={<Layout><Home/></Layout>}/>
        {/* <Route path="/demoClick" element={<Layout><Home/></Layout>}/> */}
        <Route path="/home" element={<Layout><Home/></Layout>}/>
        <Route path="/alljobs" element={<Layout><AllJobs/></Layout>}/>
        <Route path="/addjob" element={<Layout><AddJob/></Layout>}/>
        <Route path="/profile" element={<Layout><Profile/></Layout>}/>
        <Route path="/logout" element={<Register/>}/>

      </Routes>
      </div>
  )
}

export default App
