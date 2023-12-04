import "./App.css"
import Nav from "./components/Nav"
import Landing from "./components/Landing"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Explore from "./components/Explore"
import Dashboard from "./components/Dashboard"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useEffect, useState } from "react"
function App() {
  const [changing, setChanging] = useState(false)
  useEffect(() => {} , [changing] )
  return (
    <>
     <BrowserRouter>
     <Nav changing={changing} />
     
     
     <Routes>

            <Route path="/" element={<Landing setChanging={(e)=>setChanging(e)} changing={changing} />} />
            <Route path="/login" element={<Login setChanging={(e)=>setChanging(e)} changing={changing} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/dashboard" element={<Dashboard />} />

     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
