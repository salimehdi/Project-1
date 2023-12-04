import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import "../fonts.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
function Signup() {
  const [conPass, setConPass] = useState("");
  const [pass, setPass] = useState("");
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const [passVisible, setPassVisible] = useState(false);
  const [passVisible1, setPassVisible1] = useState(false);
  const [placeHolder, setPlaceHolder] = useState(true);
  const [placeHolder1, setPlaceHolder1] = useState(true);
  const [placeHolder2, setPlaceHolder2] = useState(true); 
  const [placeHolder3, setPlaceHolder3] = useState(true);
  const [placeHolder4, setPlaceHolder4] = useState(true);
  const [placeHolder5, setPlaceHolder5] = useState(true);
  const [placeHolder6, setPlaceHolder6] = useState(true);
  const [location, setLocation] = useState({
    country: "",
    state: "",
    city: "",
  })
  const [role, setRole] = useState("Designer");

  const eye = {
    position: "absolute",
    right: "15px",
    cursor: "pointer",
    color: "var(--acellbi-theme)",
  };
  const nameCss = {
    opacity: `${placeHolder ? "0.3" : "1"}`,
    position: "absolute",
    left: "15px",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out", 
    transform: `${placeHolder ? "translateY(0)" : "translateY(-140%)"}`,
    backgroundColor: `${placeHolder ? "transparent" : "#293649"}`,
    fontSize: `${placeHolder ? "16px" : "12px"}`,
  };
  const nameCss2 = {
    opacity: `${placeHolder2 ? "0.3" : "1"}`,
    position: "absolute",
    left: "15px",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out", 
    transform: `${placeHolder2 ? "translateY(0)" : "translateY(-140%)"}`,
    backgroundColor: `${placeHolder2 ? "transparent" : "#293649"}`,
    fontSize: `${placeHolder2 ? "16px" : "12px"}`,
  };
  const email = {
    opacity: `${placeHolder1 ? "0.3" : "1"}`,
    position: "absolute",
    left: "15px",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out", 
    transform: `${placeHolder1 ? "translateY(0)" : "translateY(-140%)"}`,
    backgroundColor: `${placeHolder1 ? "transparent" : "#2E3B4E"}`,
    fontSize: `${placeHolder1 ? "16px" : "12px"}`,
  };
  const email2 = {
    opacity: `${placeHolder3 ? "0.3" : "1"}`,
    position: "absolute",
    left: "15px",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out", 
    transform: `${placeHolder3 ? "translateY(0)" : "translateY(-140%)"}`,
    backgroundColor: `${placeHolder3 ? "transparent" : "#2E3B4E"}`,
    fontSize: `${placeHolder3 ? "16px" : "12px"}`,
  };
  const email3 = {
    opacity: `${placeHolder4 ? "0.3" : "1"}`,
    position: "absolute",
    left: "15px",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out", 
    transform: `${placeHolder4 ? "translateY(0)" : "translateY(-140%)"}`,
    backgroundColor: `${placeHolder4 ? "transparent" : "#2E3B4E"}`,
    fontSize: `${placeHolder4 ? "16px" : "12px"}`,
  };
  const email4 = {
    opacity: `${placeHolder5 ? "0.3" : "1"}`,
    position: "absolute",
    left: "15px",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out", 
    transform: `${placeHolder5 ? "translateY(0)" : "translateY(-140%)"}`,
    backgroundColor: `${placeHolder5 ? "transparent" : "#2E3B4E"}`,
    fontSize: `${placeHolder5 ? "16px" : "12px"}`,
  };
  const email5 = {
    opacity: `${placeHolder6 ? "0.3" : "1"}`,
    position: "absolute",
    left: "15px",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out", 
    transform: `${placeHolder6 ? "translateY(0)" : "translateY(-140%)"}`,
    backgroundColor: `${placeHolder6 ? "transparent" : "#2E3B4E"}`,
    fontSize: `${placeHolder6 ? "16px" : "12px"}`,
  };

  const signup = async () => {
    setErr("")
    console.log(location)
    console.log(role)
    if (conPass != pass){
      setErr("Cannot Confirm Password")
    } else {
      const fullLocation = `${location.city}, ${location.state}, ${location.country}`
      let res ;
      try {
        res = await axios.post("http://localhost:8000/api/auth/signup", {
          name : name, 
          email:mail, 
          role , 
          password : pass , 
          confirmPassword : conPass , 
          location : fullLocation
        })
        if (res.data && res.data.message) {
          setErr(res.data.message);
        }else {

          navigate("/login")
        }

      } catch (e) {
      }
    }

    
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
      <div className="relative flex flex-col justify-evenly items-center w-[600px] h-[530px] rounded-2xl bg-gradient-to-t to-slate-700 from-slate-800 ">
       
          <div className="flex flex-col gap-5 items-center justify-evenly h-[100%]">
           
            <h1 className="text-4xl font-[unbounded] text-white font-bold">
              Sign Up
            </h1>
          <div className="flex h-[350px] w-[600px] flex-row gap-2 items-center justify-evenly">


            <div className="flex h-[100%] w-[250px] flex-col gap-2 items-center justify-evenly">
            <label className="flex flex-row justify-between items-center w-[100%] h-[40px] rounded-md bg-transparent text-white px-2 relative">
            <div style={email2}>Name</div>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              className="w-[100%] h-[40px] rounded-md bg-transparent border-2 text-white px-2"
              onFocus={() => setPlaceHolder3(false)}
              onBlur={(e) => {if (e.target.value === "")setPlaceHolder3(true)}}
            />
          </label>


            <label className="flex flex-row justify-between items-center w-[100%] h-[40px] rounded-md bg-transparent text-white px-2 relative">
            <div style={email}>Email</div>
            <input
              value={mail}
              onChange={(e) => {
                setMail(e.target.value);
              }}
              type="text"
              className="w-[100%] h-[40px] rounded-md bg-transparent border-2 text-white px-2"
              onFocus={() => setPlaceHolder1(false)}
              onBlur={(e) => {if (e.target.value === "")setPlaceHolder1(true)}}
            />
          </label>



            <label className="flex flex-row justify-between items-center w-[100%] h-[40px] rounded-md bg-transparent text-white px-2 relative">
            <div style={nameCss}>Password</div>
            <input
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
              type={`${passVisible ? "text" : "password"}`}
              className="w-[100%] h-[40px] rounded-md bg-transparent border-2 text-white px-2"
              onFocus={() => setPlaceHolder(false)}
              onBlur={(e) => {if (e.target.value === "")setPlaceHolder(true)}}
            />
            {passVisible ? (
              <FaEyeSlash
                style={eye}
                onClick={() => {
                  setPassVisible(!passVisible)
                }}
              />
            ) : (
              <FaEye style={eye} onClick={() => setPassVisible(!passVisible)} />
            )}
          </label>



            <label className="flex flex-row justify-between items-center w-[100%] h-[40px] rounded-md bg-transparent text-white px-2 relative">
            <div style={nameCss2}>Confirm Password</div>
            <input
              value={conPass}
              onChange={(e) => {
                setConPass(e.target.value);
              }}
              type={`${passVisible1 ? "text" : "password"}`}
              className="w-[100%] h-[40px] rounded-md bg-transparent border-2 text-white px-2"
              onFocus={() => setPlaceHolder2(false)}
              onBlur={(e) => {if (e.target.value === "")setPlaceHolder2(true)}}
            />
            {passVisible1 ? (
              <FaEyeSlash
                style={eye}
                onClick={() => {
                  setPassVisible1(!passVisible1)
                }}
              />
            ) : (
              <FaEye style={eye} onClick={() => setPassVisible1(!passVisible1)} />
            )}
          </label>


          

            
          </div>


          <div className="flex h-[100%] w-[250px] flex-col gap-2 items-center justify-evenly">
              
          <label className="flex flex-row justify-between items-center w-[100%] h-[40px] rounded-md bg-transparent text-white px-2 relative">
            <div style={email3}>Country</div>
            <input
              value={location.country}
              onChange={(e) => {
                setLocation({ ...location , country:e.target.value , });
              }}
              type="text"
              className="w-[100%] h-[40px] rounded-md bg-transparent border-2 text-white px-2"
              onFocus={() => setPlaceHolder4(false)}
              onBlur={(e) => {if (e.target.value === "")setPlaceHolder4(true)}}
            />
          </label>
          <label className="flex flex-row justify-between items-center w-[100%] h-[40px] rounded-md bg-transparent text-white px-2 relative">
            <div style={email4}>State</div>
            <input
              value={location.state}
              onChange={(e) => {
                setLocation({ ...location , state:e.target.value , });
              }}
              type="text"
              className="w-[100%] h-[40px] rounded-md bg-transparent border-2 text-white px-2"
              onFocus={() => setPlaceHolder5(false)}
              onBlur={(e) => {if (e.target.value === "")setPlaceHolder5(true)}}
            />
          </label>
          <label className="flex flex-row justify-between items-center w-[100%] h-[40px] rounded-md bg-transparent text-white px-2 relative">
            <div style={email5}>City</div>
            <input
              value={location.city}
              onChange={(e) => {
                setLocation({ ...location , city:e.target.value , });
              }}
              type="text"
              className="w-[100%] h-[40px] rounded-md bg-transparent border-2 text-white px-2"
              onFocus={() => setPlaceHolder6(false)}
              onBlur={(e) => {if (e.target.value === "")setPlaceHolder6(true)}}
            />
          </label>
          <select 
          className="w-[95%] h-[40px] rounded-md bg-transparent border-2 text-white px-2"
          onClick={(e) => setRole(e.target.value)}
          >
            <option className=" bg-black" value="Designer">Designer</option>
            <option className=" bg-black" value="Buyer">Buyer</option>
          </select>
            
          </div>


          </div>

          <button type="button" onClick={signup} className="w-[80%] h-[40px] rounded-md bg-gradient-to-t to-slate-400 from-slate-300 text-slate-900 font-bold">
              Sign Up
            </button>
            {err && <h2 className="text-red-500 font-[poppins] absolute bottom-[-25px] " >{err}</h2>}
            <p className="text-white">
              Already have an account?{" "}
              <Link to="/login" className="text-rose-500">
                Login
              </Link>
            </p>

          </div>
      </div>
    </div>
  );
}

export default Signup;

