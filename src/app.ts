import express from "express";
import cors from "cors";
import userRoute from "./app/modules/user/user.route";
/*
 * Step 1 - Create Interface
 * Step 2 - Create Schema
 * Step 3 - Model
 * Step 3 - Connect To Database
 */
const app = express();

// cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoute);

app.get("/", (req, res) => {
  res.send("Hello world");
});

export default app;
