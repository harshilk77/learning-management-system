import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config({});

// call database config
connectDB();

const app = express();

const PORT = process.env.PORT || 4000;

// middleware

app.use(express.json());
app.use(cookieParser());

// cors
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// apis
app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
