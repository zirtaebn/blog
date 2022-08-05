import { Request, Response } from "express";

export const newPost = (req:Request, res:Response) => {

    res.render('../views/pages/home');

}