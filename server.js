import express from "express";
import userRouter from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./DB/db.js";
import cors from "cors";

import dotenv from "dotenv";

// app.use(express.static("public"));

dotenv.config();

connectDB();
const app = express();

// Configure cors middleware to allow requests from http://localhost:3000
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // You might need this for certain scenarios
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api/user", userRouter);

const port = process.env.PORT || 5000;

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
