import { Request, Response } from "express";

import Post from '../models/Post'

export const home = (req:Request, res:Response) => {

    const list = Post.getPosts;

    res.render('../views/pages/home', { list });

}