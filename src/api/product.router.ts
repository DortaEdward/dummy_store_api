import { Router } from "express";
import { createProductHandler, deleteProductHandler, findProductByIdHandler, findProductHandler, updateProductHandler } from "../controller/product.controller";

const productRouter = Router();

productRouter.get("/", findProductHandler)
productRouter.get("/:id", findProductByIdHandler)
productRouter.post("/", createProductHandler)
productRouter.put("/:id", updateProductHandler)
productRouter.delete("/:id", deleteProductHandler)

export default productRouter;
