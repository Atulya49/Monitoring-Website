import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

//routes import
import cpcRouter from "./route/cpcRouter.js";
import maagRouter from './route/maagRouter.js'
import opdRouter from './route/opwRouter.js'
//routes declaration
app.use("/api/v1/opw", opdRouter)
app.use("/api/v1/cpc", cpcRouter);
app.use("/api/v1/maag", maagRouter);

// http://localhost:8000/api/v1/users/register

export { app };
