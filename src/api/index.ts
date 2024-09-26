import { Router, Response } from "express";
import productRouter from "./product.router";

const apiRouter = Router();

apiRouter.get("/", (_, res: Response) => {
  res.send("Welcome to the api")
})

apiRouter.use("/product", productRouter)

export default apiRouter;
