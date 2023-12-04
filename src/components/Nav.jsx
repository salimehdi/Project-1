import React from "react";
import { Link } from "react-router-dom";
import {FaBars} from "react-icons/fa";
import {useState , useEffect} from "react";
// import logo from "../assets/logo.jpg";
import "../App.css";
import "../fonts.css"
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Nav ({setChanging , changing}) {
    const navigate = useNavigate();
    function logHandler () {
        if (role !== "NAN") {
        Cookies.remove("token")
        setRole("NAN")
        setChanging(!changing)
        }
        else 
        navigate("/login")
    }
    const [hide, setHide] = useState(true);
    const [role, setRole] = useState("NAN")
  async function getUser () {
    try {
      const options = {
        method:"GET",
        url:"http://localhost:8000/api/auth/user",
        withCredentials: true,
        credentials: "include",
      }
      const res = await axios.request(options)
      setRole(res.data.data.role)
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    getUser()
  },[role , changing])

    return (
        <div className=" relative text-cyan-100 h-[10vh] flex px-10 justify-between items-center bg-[#164E63] font-bold  font-[unbounded] text-sm">
            <ul className="justify-evenly items-center list-none w-[40%]  flex">
                <Link to="/"><li class=" md:text-[calc(0.6vw+5px)] hidden md:flex hover:border-cyan-100 border-b-2 border-transparent duration-150 cursor-pointer  uppercase tracking-widest">Home</li></Link>
                <Link to="/explore"><li class=" md:text-[calc(0.6vw+5px)] hidden md:flex hover:border-cyan-100 border-b-2 border-transparent duration-150 cursor-pointer  uppercase tracking-widest">Explore</li></Link>
                <Link to="/dashboard"><li class=" md:text-[calc(0.6vw+5px)] hidden md:flex hover:border-cyan-100 border-b-2 border-transparent duration-150 cursor-pointer  uppercase tracking-widest">Dashboard</li></Link>
            </ul>
            <Link to="/"><img src="https://cdn.dribbble.com/users/3088657/screenshots/7091643/media/902150d1ea44d86b735e6b360d02f94f.png" alt="logo" className="bg-cyan-100 hover:bg-gradient-to-t from-slate-200 to-cyan-100 duration-500 rounded-b-full h-[9vh]"/></Link>
            <ul className="justify-evenly items-center list-none w-[40%]  flex">
                <li class=" md:text-[calc(0.6vw+5px)] hidden md:flex hover:border-cyan-100 border-b-2 border-transparent duration-150 cursor-pointer  uppercase tracking-widest">Learn</li>
                <li onClick={logHandler} class=" md:text-[calc(0.6vw+5px)] hidden md:flex hover:border-cyan-100 border-b-2 border-transparent duration-150 cursor-pointer  uppercase tracking-widest">
                    {(role !== "NAN") ? "Logout" : "Login"}
                    </li>
                <Link to="/signup" ><li class=" md:text-[calc(0.6vw+5px)] hidden md:flex hover:border-cyan-100 border-b-2 border-transparent duration-150 cursor-pointer  uppercase tracking-widest">SignUp</li></Link>
            </ul>
            <FaBars onClick={()=>{
                setHide(!hide);
            }} className="md:hidden flex text-3xl"/>
            {(!hide) && 
            <ul className=" z-10 md:hidden flex flex-col bg-cyan-100 text-cyan-900 absolute right-[10%] rounded-lg top-[8vh] p-3" >
                <Link to="/"><li className="hover:bg-cyan-200 p-3 rounded-md cursor-pointer">Home</li></Link>
                <Link to="/explore"><li className="hover:bg-cyan-200 p-3 rounded-md cursor-pointer">Explore</li></Link>
                <Link to="/dashboard"><li className="hover:bg-cyan-200 p-3 rounded-md cursor-pointer">Dashboard</li></Link>
                <li className="hover:bg-cyan-200 p-3 rounded-md cursor-pointer">Learn</li>
                <li onClick={logHandler} className="hover:bg-cyan-200 p-3 rounded-md cursor-pointer">{(role !== "NAN") ? "Logout" : "Login"}</li>
                <Link to="/signup"><li className="hover:bg-cyan-200 p-3 rounded-md cursor-pointer">Signup</li></Link>
            </ul>
            }
        </div>
    )
}

export default Nav;