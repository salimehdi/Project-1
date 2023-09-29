import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import "../fonts.css";
function Login() {

  const [pass, setPass] = useState("");
  const [mail, setMail] = useState("");
  const [err, setErr] = useState("");
  function loginf () {
    console.log("Started");
    const navigate = useNavigate();
    (async () => {
      const res = await axios.post("http://localhost:8000/api/login", {
        email: mail,
        password: pass,
      })
      if (res.data.error) {
        setErr(res.data.error);
      } else {
        navigate("/");
      }
    })()
  };
  return (
    <div className="relative w-[100%] h-[90vh] bg-slate-900 flex justify-center items-center">
      <svg
        className="absolute top-0 mx-[40%] w-[300px]"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 123.1 21.4"
        enable-background="new 0 0 123.1 21.4"
        xml:space="preserve"
      >
        <g></g>
        <path
          fill="rgb(22 78 99)"
          d="M123,0c-2.3,0-4.3,0.2-6.2,0.5c-9.3,1.6-14.4,6.6-18.9,11.2c-4.6,4.6-8.5,8.5-15.8,8.5
	c-6.3,0-10.6-3.2-15.1-6.6c-4.9-3.7-9.9-7.5-18-7.5c-4.6,0-7.7,1.8-10.7,3.5c-3.5,2-6.9,3.9-12.2,2.3c-4.4-1.3-6.6-3.4-8.8-5.5
	C14.9,4,12.3,1.5,6.4,0.5C4.6,0.2,2.5,0,0,0H123z"
        />
      </svg>
      <div className=" flex flex-col justify-evenly items-center w-[300px] h-[300px] rounded-2xl bg-gradient-to-t to-slate-700 from-slate-800 ">
      {err && <h2 className="text-red-500 font-[poppins]" >{err}</h2>}
        
          <div className="flex flex-col gap-5 items-center justify-center h-[100%]">
            <h1 className="text-4xl font-[unbounded] text-white font-bold">
              Log In
            </h1>
            <input
            value={mail}
            onChange={(e) => {
              setMail(e.target.value);
            }}
              type="text"
              placeholder="Enter your email"
              className="w-[80%] h-[40px] rounded-md bg-transparent border-2 border-white outline-none text-white px-2"
            />
            <input
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
              type="text"
              placeholder="Enter your password"
              className="w-[80%] h-[40px] rounded-md bg-transparent border-2 border-white outline-none text-white px-2"
            />
            <button onClick={loginf} type="button" className="w-[80%] h-[40px] rounded-md text-slate-900 bg-gradient-to-t to-slate-300 from-slate-400 font-bold">
              Login
            </button>
            <p className="text-white">
              Don't have an account?{" "}
              <Link to="/signup" className="text-rose-500">
                Sign Up
              </Link>
            </p>
          </div>
        
      </div>
    </div>
  );
}

export default Login;
