import "./connection.js"; 
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import { usersRouter } from "./routes/UsersRoutes.js";
import { loginRouter } from "./routes/LoginRoutes.js";
import { adminRouter } from "./routes/Admin.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 2024;

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST","GET"],
    credentials: true,
  })
);
app.use(cookieParser());

// Routes
app.use("/api", usersRouter);
app.use("/api", loginRouter);
app.use("/api", adminRouter);

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
