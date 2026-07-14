import {Request, Response} from "express"
import * as Sentry from "@sentry/node";
import { prisma } from "../configs/prisma.js";

export const createProject = async (req: Request, res: Response) => {
    let tempProjectId: string;
    const { userId } = req.auth();  
    let isCreditDeducted = false; // Flag to track if credits were deducted 
    
    
    const { name = 'New Project', aspectRatio, userPrompt, productName,
    productDescription, targetLength = 5 } = req.body;

    const images: any = req.files;

    if(images.length < 2 || !productName){
        return res.status(400).json({ message: 'Please provide at least 2 images and a product name' })
    }

    const user =  await prisma.user.findUnique({
        where: { id: userId }
    })

    if(!user || user.credits < 5){
        return res.status(401).json({ message: 'Insufficient credits' })
    } else{
        //deduct credits for image generation
        await prisma.user.update({
            where: {id: userId},
            data: {credits: {decrement: 5}}
        }).then(() => {
            isCreditDeducted = true; // Set the flag to true after successful deduction
        })
    }


    try {


        
    } catch (error: any) {
        Sentry.captureException(error);  
        res.status(500).json({ message: error.code })
        
    }
}


export const createVideo = async (req: Request, res: Response) => {
    try {
        
    } catch (error: any) {
        Sentry.captureException(error);  
        res.status(500).json({ message: error.code })
        
    }
}


export const getAllPublishedProjects = async (req: Request, res: Response) => {
    try {
        
    } catch (error: any) {
        Sentry.captureException(error);  
        res.status(500).json({ message: error.code })
        
    }
}


export const deleteProject = async (req: Request, res: Response) => {
    try {
        
    } catch (error: any) {
        Sentry.captureException(error);  
        res.status(500).json({ message: error.code })
        
    }
}