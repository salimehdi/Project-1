import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import { FaFileImport } from "react-icons/fa";
import getImageUrl from "./getImageUrl.js";

function Dashboard() {
  const [addPost, setAddPost] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [caption, setCaption] = useState("");
  const [addedPic, setAddedPic] = useState("");
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState("");

  const fetchData = async () => {
    try {
      // Fetch user details (replace with your API endpoint)

      const options = {
        method: "GET",
        url: "http://localhost:8000/api/auth/user",
        withCredentials: true,
        credentials: "include",
      };
      const userDetailsResponse = await axios.request(options);
      setUserDetails(userDetailsResponse.data.data);
      console.log(userDetailsResponse.data);
      // Fetch user posts (replace with your API endpoint)
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchMyPosts() {
    let userPostsResponse ;
    if (userDetails.email !== undefined){
      if (userDetails.email){
      userPostsResponse = await axios.get(
        `http://localhost:8000/api/fetch/myPosts/${userDetails.email}`
      );
      }
      console.log(userPostsResponse.data.data);
      setPosts(userPostsResponse.data.data);
    }
  }
  useEffect(() => {
    fetchMyPosts()
  }, [userDetails.email]);

  const addPostHandler = async () => {
    console.log(`http://localhost:8000/api/fetch/putPost/${userDetails.email}`);
    console.log(image);
    const imageUrl = await getImageUrl(image);
    try {
      const options = {
        method: "POST",
        url: `http://localhost:8000/api/fetch/putPost/${userDetails.email}`,
        withCredentials: true,
        credentials: "include",
        data: {
          url: imageUrl,
          caption: caption,
          email: userDetails.email,
          name: userDetails.name
        },
      };
      const res = await axios.request(options);
      console.log(res.data);
      setAddPost(!addPost);
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {

  }, [addPost, addedPic]);

  return (
    <div className="container mx-auto pt-8 pl-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative bg-cyan-700 h-[100%] ">
      {addPost && (
        <>
          <div
            style={{
              position: "fixed",
              top: "0px",
              left: "0px",
              height: "100%",
              width: "100vw",
              zIndex: "2",
              backgroundColor: "rgba(0,0,0)",
              opacity: "0.7",
            }}
          ></div>
          <section className="h-[500px] w-[420px] bg-cyan-900 rounded-[20px] top-[2vh] left-[36vw] z-10 absolute border-4 border-cyan-100">
            <svg
              className="absolute top-0 mx-[15%] w-[300px]"
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
                fill="rgb(207 250 254)"
                d="M123,0c-2.3,0-4.3,0.2-6.2,0.5c-9.3,1.6-14.4,6.6-18.9,11.2c-4.6,4.6-8.5,8.5-15.8,8.5
	c-6.3,0-10.6-3.2-15.1-6.6c-4.9-3.7-9.9-7.5-18-7.5c-4.6,0-7.7,1.8-10.7,3.5c-3.5,2-6.9,3.9-12.2,2.3c-4.4-1.3-6.6-3.4-8.8-5.5
	C14.9,4,12.3,1.5,6.4,0.5C4.6,0.2,2.5,0,0,0H123z"
              />
            </svg>

            <h3 className="pt-[50px] text-3xl font-bold text-center text-cyan-100">
              Add a Post
            </h3>

            <label className=" pt-5 pr-7 pl-5 flex flex-row justify-between items-top w-[100%] rounded-md bg-transparent text-white px-2 relative">
              Image:
              <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
            </label>
            {addedPic ? (
              <img
                src={addedPic}
                alt="post picture to be added"
                className="h-[110px] w-[180px] rounded-lg p-5 mt-5 ml-[100px]"
                onChange={(e) => {
                  const file = e.target.files[0];
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setAddedPic(reader.result);
                  };
                  reader.readAsDataURL(file);
                  setImage(file);
                  setAddedPic(file);
                }}
              />
            ) : (
              <div className="h-[110px] w-[180px] bg-cyan-600 rounded-lg p-5 mt-5 ml-[100px] text-[50px] text-cyan-100">
                <FaFileImport className=" mx-auto my-auto" />
              </div>
            )}

            <label className=" pt-5 pr-7 pl-5 flex flex-row justify-between items-top w-[100%] rounded-md bg-transparent text-white px-2 relative">
              Caption:
              <textarea
                style={{ resize: "none" }}
                value={caption}
                onChange={(e) => {
                  setCaption(e.target.value);
                }}
                type="text"
                className="w-[80%] h-[150px] rounded-md bg-transparent border-2 text-white px-2"
              />
            </label>

            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-2 ml-[180px]"
              onClick={() => {
                addPostHandler();
                
              }}
            >
              Add Post
            </button>
          </section>
        </>
      )}

      <div className="sm:col-span-2 lg:col-span-1">
        <div className="bg-cyan-500 p-4 rounded-md shadow-md mb-4">
          <h2 className="text-xl font-bold mb-2">{userDetails.name}</h2>
          <p className="text-gray-600 mb-2">{userDetails.email}</p>
          <p className="text-gray-600">{userDetails.role}</p>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        onClick={() => {
            setAddPost(!addPost);
          }}>
          Add a Post
        </button>
      </div>
      <br></br>
      <div className="sm:col-span-2 lg:col-span-2">
      <div className="w-[100%] rounded-r-[40px] text-center text-[cyan] text-[50px] bg-cyan-950">My Posts</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <Post
              key={post._id}
              title={"Me"}
              content={post.caption}
              image={post.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
