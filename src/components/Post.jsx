import React from "react";
import { FaRegUserCircle, FaShare, FaUser } from "react-icons/fa";

const shareHandler = (title , image , content) => {
  const toCopy = `This is a post by: ${title} \n ${image}\n ${content}`;
  
  try {
    navigator.clipboard.writeText(toCopy);
    console.log('Text copied to clipboard:', toCopy);
    // You can also show a success message or perform other actions after successful copy
  } catch (error) {
    console.error('Unable to copy text to clipboard', error);
    // You can show an error message or handle the error in any way you prefer
  }
};


const Post = ({ title, content , image }) => (
  <div className=" w-[auto] mx-auto text-cyan-100 bg-cyan-800 rounded-md overflow-hidden shadow-md m-4 relative">
    <FaShare onClick={()=>shareHandler(title , image , content)} className=" absolute top-3 right-3" />
    <div className="p-4 flex gap-2 items-center">
      <FaRegUserCircle className=" text-[30px] pb-[5px]" /> <h2 className="text-xl font-bold mb-2">{title}</h2>
    </div>
    <img
      height={"100%"}
      width={"auto"}
      className="w-full h-48 object-cover"
      src={image}  
      alt="Post"
    />
    <div className="p-4">
      <p>{content}</p>
    </div>
  </div>
);

export default Post;