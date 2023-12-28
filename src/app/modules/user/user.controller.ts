import { Request, Response } from "express";
import { createUserToDB } from "./user.service";


export const createUser = async (req: Request, res: Response) => {
    const user = await createUserToDB();
    res.status(200).send({ message: "User Create Success" });
}