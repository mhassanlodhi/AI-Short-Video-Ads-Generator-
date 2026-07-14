import express from "express";
import { createProject, createVideo, deleteProject, getAllPublishedProjects } from "../controllers/projectController.js";
import { protect } from "../middlewares/auth.js";
import { createVerify } from "crypto";
import upload from "../configs/multer.js";

const projectRouter = express.Router();

projectRouter.post('/create', upload.array('images', 2), protect, createProject)
projectRouter.post('/video', protect, createVideo)
projectRouter.post('/published', getAllPublishedProjects)
projectRouter.delete('/:projectId', protect, deleteProject)


export default projectRouter


