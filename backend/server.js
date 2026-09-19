import express from "express";
import ConnectDB from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import cookieparser from "cookie-parser";
import { errorHandler } from "./middleware/errorHandler.js";
import movieRouter from "./routes/movieRoute.js";
import authRouter from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cookieparser());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/upload", express.static("upload"));

app.use("/api/auth", authRouter )
app.use("/api/movies", movieRouter  )


app.use(errorHandler);


app.listen(8000, () => {
  console.log("port is 8000");
  ConnectDB();
});
