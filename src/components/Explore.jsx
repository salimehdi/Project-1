import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";

function Explore() {
    const [data, setData] = useState([])
    async function fetchAllPosts() {
        try {
          const res = await axios.get("http://localhost:8000/api/fetch/allPosts");
          setData(res.data.data)
        } catch (e) {
          console.log(e.message)
        }
      }
      useEffect(() => {
        fetchAllPosts()
      },[])
    
    
            return (
              <div className="bg-cyan-700 min-h-screen">
                <div className="bg-cyan-800 p-4 text-center shadow-md">
                  <h1 className="text-2xl text-cyan-100 font-bold">Explore</h1>
                </div>
                <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {data.map((post , idx) => (
                    <Post
                      key={idx}
                      title={post.creatorName}
                      content={post.caption}
                      image={post.image}
                    />
                  ))}
                </div>
              </div>
            );
        
}

export default Explore;

