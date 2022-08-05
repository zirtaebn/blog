import { Request, Response } from "express";

import Post from '../models/Post'

export const addPost = (req:Request, res:Response) => {

    
    const title:string = req.body.title;
    const description:string = req.body.description;

    const today = new Date;
    const date:string = today.toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric'});

    console.log(req.body);

    Post.newPost({title, date, description});
    
    res.redirect("/");

}