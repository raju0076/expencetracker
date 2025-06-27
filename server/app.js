import express from "express";
import { connectedDB } from "./configs/mongo.config.js";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, origin); 
    },
    credentials: true,
  })
);

connectedDB();

app.use("/users", userRouter);



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
