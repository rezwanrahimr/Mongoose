import express from "express";
import { createUser, getUserById, getUsers } from "./user.controller";
const route = express.Router();

route.get("/", getUsers);
route.post("/create-user", createUser);
route.get("/:id", getUserById);
export default route;
