import { Request, Response } from "express";
import {
  createUserToDB,
  getAdminUserFromDB,
  getUserByIdFormDB,
  getUsersFormDB,
} from "./user.service";

export const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const user = await createUserToDB(userData);
    res.status(201).send({ message: "User Create Success", data: user });
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUsersFormDB();
    res.status(200).send({ data: users });
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await getUserByIdFormDB(id);
    res.status(200).send({ data: user });
  } catch (error) {
    res.status(400).send({ message: error });
  }
};


export const getAdminUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAdminUserFromDB();
    console.log(users)
    res.status(200).send({ data: users });
  } catch (error) {
    res.status(400).send({ message: error });
  }
}