
import postModel from "../model/postSchema.js";

export const allPosts = async (req, res) => {
  try {
    const post = await postModel.find();
    return res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const myPosts = async (req, res) => {
    const { email } = req.params;
  try {
    const post = await postModel.find({creatorEmail:email});
    return res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const putPost = async (req, res) => { 
  const email = req.params.email;
  try {
    const newPost = new postModel({
      creatorName: req.body.name,
      creatorEmail: email,
      caption: req.body.caption,
      image: req.body.url,
    });
    const result = await newPost.save();
    return res.status(200).json({
        success: true,
        data: result
      });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


