

import express from "express";
const fetchRouter = express.Router();
import  putToFireBase  from "../middleware/putToFireBase.js";
import {allPosts , putPost , myPosts} from "../controller/fetchController.js";

fetchRouter.get("/allPosts", allPosts);
fetchRouter.get("/myPosts/:email", myPosts);
fetchRouter.post("/putPost/:email" , putPost);

export default fetchRouter;