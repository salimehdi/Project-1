
import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema(
  {

    creatorName: {
      type: String, 
      trim: true,
    },
    creatorEmail: {
      type: String, 
      trim: true,
      lowercase: true,
    },
    caption: {
      type: String,
    },
    image: {
      type: String,
    }

  },
  { timestamps: true }
);

const postModel = mongoose.model("post", postSchema);

export default postModel;