import express, { Request, Response } from "express";
import env from "dotenv"
import { connectToDb, seedDb } from "./utils/db";
import { rateLimit } from 'express-rate-limit'
import morgan from "morgan";
import helmet from "helmet"
import cors from "cors"
import path from "path"
import apiRouter from "./api";

env.config()

const app = express();

const PORT = process.env.PORT || "6969"
const DBURI = process.env.DBURI || "mongodb://127.0.0.1:27017/dummy-store"

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
})

app.use(morgan("dev"))
app.use(helmet())
app.use(cors())
//app.use(limiter)

app.use("/images", express.static(path.join(__dirname, "images")))

app.get("/", (_, res: Response) => {
  res.send("Base route")
})

app.use("/api", apiRouter)

/*
app.get("/seed", (req: Request, res: Response) => {
  const result = seedDb()
  res.json(result)
})
*/

app.listen(PORT, () => {
  connectToDb(DBURI)
  console.log(`Listening at: http://localhost:${PORT}`)
})
