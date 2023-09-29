import React from 'react';
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {useState} from 'react';
// import logo from '../assets/logo.jpg';
import "../App.css";
import '../fonts.css'
function Nav () {
    const [hide, setHide] = useState(true);
    return (
        <div className=" relative text-cyan-100 h-[10vh] flex px-10 justify-between items-center bg-[#164E63] font-bold  font-[unbounded] text-sm">
            <ul className="flex justify-evenly items-center list-none w-[40%]  flex">
                <li class="hidden md:flex hover:border-cyan-100 border-b-2 border-transparent duration-150 cursor-pointer  uppercase tracking-widest">Photo</li>
                <li class="hidden md:flex hover:border-cyan-100 border-b-2 border-transparent duration-150 cursor-pointer  uppercase tracking-widest">Video</li>
                <li class="hidden md:flex hover:border-cyan-100 border-b-2 border-transparent duration-150 cursor-pointer  uppercase tracking-widest">Creatives</li>
            </ul>
            <Link to="/"><img src="https://cdn.dribbble.com/users/3088657/screenshots/7091643/media/902150d1ea44d86b735e6b360d02f94f.png" alt="logo" className="bg-cyan-100 hover:bg-gradient-to-t from-slate-200 to-cyan-100 duration-500 rounded-b-full h-[9vh]"/></Link>
            <ul className="flex justify-evenly items-center list-none w-[40%]  flex">
                <li class="hidden md:flex hover:border-cyan-100 border-b-2 border-transparent duration-150 cursor-pointer  uppercase tracking-widest">Learn</li>
                <Link to='/login' ><li class="hidden md:flex hover:border-cyan-100 border-b-2 border-transparent duration-150 cursor-pointer  uppercase tracking-widest">Login</li></Link>
                <Link to='/signup' ><li class="hidden md:flex hover:border-cyan-100 border-b-2 border-transparent duration-150 cursor-pointer  uppercase tracking-widest">SignUp</li></Link>
            </ul>
            <FaBars onClick={()=>{
                setHide(!hide);
            }} className="md:hidden flex text-3xl"/>
            {(!hide) && 
            <ul className=' z-10 md:hidden flex flex-col bg-cyan-100 text-cyan-900 absolute right-[10%] rounded-lg top-[8vh] p-3' >
                <li className='hover:bg-cyan-200 p-3 rounded-md cursor-pointer'>Photo</li>
                <li className='hover:bg-cyan-200 p-3 rounded-md cursor-pointer'>Video</li>
                <li className='hover:bg-cyan-200 p-3 rounded-md cursor-pointer'>Creatives</li>
                <li className='hover:bg-cyan-200 p-3 rounded-md cursor-pointer'>Learn</li>
                <Link to="/login"><li className='hover:bg-cyan-200 p-3 rounded-md cursor-pointer'>Login</li></Link>
                <Link to="/signup"><li className='hover:bg-cyan-200 p-3 rounded-md cursor-pointer'>Signup</li></Link>
            </ul>
            }
        </div>
    )
}

export default Nav;