import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/center-pic.png";
import {FaCaretRight} from "react-icons/fa";
import "../App.css";

function Landing() {
  return (
    <>
      <div className="border-b-[2.98px] border-black h-[90vh] gap-[100px] w-[100%] flex justify-center items-center  bg-gradient-to-t from-cyan-700 to-cyan-900">
        <img
          src={img}
          alt="img"
          className="hidden md:flex border-l-[15px] hover:border-l-[45px] duration-300 rounded-l-[220px] border-cyan-400 p-[50px] rounded- opacity-85 w-[28%] "
        />
        <span className="p-10   font-[Unbounded] w-auto lg:w-[40%] font-bold text-7xl bg-gradient-to-r from-cyan-200 to-cyan-400 text-transparent bg-clip-text flex flex-col gap-10">
          <span >
            Lets
          </span>{" "}
          <span>Create</span>{" "}
          <span >
            Value.
          </span>
        </span>
      </div>
      <div className=" border-b-[2.98px] border-black md:h-[90vh] h-[110vh] w-[100%] relative flex flex-col md:flex-row justify-center items-center bg-rose-500 gap-[100px]">
        <svg
          className="absolute top-[-2.98px] mx-auto w-[300px]"
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
          <g>
            <path
              fill="#00000"
              d="M123,0v1c-13.1,0-19.1,6-24.5,11.4c-4.5,4.5-8.8,8.8-16.5,8.8c-6.6,0-11-3.3-15.7-6.8
		          c-4.8-3.6-9.7-7.3-17.4-7.3c-4.3,0-7.3,1.7-10.2,3.3c-3.7,2.1-7.2,4-12.9,2.4c-4.6-1.3-7-3.6-9.2-5.7C13.4,4,10.3,1,0,1V0
		          c2.5,0,4.6,0.2,6.4,0.5c5.8,1,8.4,3.5,10.9,5.9c2.2,2.1,4.4,4.2,8.8,5.5c5.3,1.5,8.6-0.3,12.2-2.3c3-1.7,6.1-3.4,10.7-3.5
		          c8.1,0,13.1,3.8,18,7.5c4.5,3.4,8.8,6.6,15.1,6.6c7.3,0,11.3-4,15.8-8.5c4.5-4.5,9.6-9.6,18.9-11.2C118.7,0.2,120.8,0,123,0z"
            />
          </g>
          <path
            fill="#0e7490"
            d="M123,0c-2.3,0-4.3,0.2-6.2,0.5c-9.3,1.6-14.4,6.6-18.9,11.2c-4.6,4.6-8.5,8.5-15.8,8.5
	c-6.3,0-10.6-3.2-15.1-6.6c-4.9-3.7-9.9-7.5-18-7.5c-4.6,0-7.7,1.8-10.7,3.5c-3.5,2-6.9,3.9-12.2,2.3c-4.4-1.3-6.6-3.4-8.8-5.5
	C14.9,4,12.3,1.5,6.4,0.5C4.6,0.2,2.5,0,0,0H123z"
          />
        </svg>
        <span className="p-10 rounded-tr-[120px] rounded-br-[120px] md:mr-10  font-[Unbounded] border-[15px] border-black md:w-[37%] w-[70%] font-bold md:text-7xl text-4xl text-white flex flex-col gap-10 bg-[url('https://pngimg.com/uploads/bokeh/bokeh_PNG7.png')] bg-cover ">
          <span>Buy</span> <span>Top</span> <span>Art.</span>
        </span>
        <button className="font-[unbounded] text-2xl font-bold border-[10px] text-white rounded-full p-[20px] hover:bg-rose-700 border-rose-300 active:border-rose-400 flex items-center gap-10" >Explore the store<FaCaretRight className="text-4xl duration-300"/></button>
      </div>
      <div className=" md:h-[90vh] h-[110vh] w-[100%] relative flex flex-col md:flex-row justify-center items-center bg-[#FCBB6D] gap-[100px]">
        <svg
          className="absolute top-[-2.97px] mx-auto w-[300px]"
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
          <g>
            <path
              fill="#00000"
              d="M123,0v1c-13.1,0-19.1,6-24.5,11.4c-4.5,4.5-8.8,8.8-16.5,8.8c-6.6,0-11-3.3-15.7-6.8
		          c-4.8-3.6-9.7-7.3-17.4-7.3c-4.3,0-7.3,1.7-10.2,3.3c-3.7,2.1-7.2,4-12.9,2.4c-4.6-1.3-7-3.6-9.2-5.7C13.4,4,10.3,1,0,1V0
		          c2.5,0,4.6,0.2,6.4,0.5c5.8,1,8.4,3.5,10.9,5.9c2.2,2.1,4.4,4.2,8.8,5.5c5.3,1.5,8.6-0.3,12.2-2.3c3-1.7,6.1-3.4,10.7-3.5
		          c8.1,0,13.1,3.8,18,7.5c4.5,3.4,8.8,6.6,15.1,6.6c7.3,0,11.3-4,15.8-8.5c4.5-4.5,9.6-9.6,18.9-11.2C118.7,0.2,120.8,0,123,0z"
            />
          </g>
          <path
            fill="rgb(244 63 94)"
            d="M123,0c-2.3,0-4.3,0.2-6.2,0.5c-9.3,1.6-14.4,6.6-18.9,11.2c-4.6,4.6-8.5,8.5-15.8,8.5
	c-6.3,0-10.6-3.2-15.1-6.6c-4.9-3.7-9.9-7.5-18-7.5c-4.6,0-7.7,1.8-10.7,3.5c-3.5,2-6.9,3.9-12.2,2.3c-4.4-1.3-6.6-3.4-8.8-5.5
	C14.9,4,12.3,1.5,6.4,0.5C4.6,0.2,2.5,0,0,0H123z"
          />
        </svg>
        <span className=" p-10 rounded-tr-[120px] rounded-br-[120px] md:mr-10 font-[Unbounded] border-[15px] border-[#465C7A] md:w-[45%] w-[70%] font-bold md:text-7xl text-4xl text-red-500 bg-[url('https://pngimg.com/uploads/bokeh/bokeh_PNG7.png')] bg-cover flex flex-col gap-10 ">
          <span>Make</span> <span>Sell</span> <span>Earn.</span>
        </span>
        <button className="font-[unbounded] text-2xl font-bold border-[10px] text-[#465C7A] rounded-full p-[20px] hover:bg-orange-200 border-orange-100 active:border-orange-400 flex items-center gap-10" >Work With Us<FaCaretRight className="text-4xl duration-300"/></button>
      </div>
    </>
  );
}

export default Landing;
