import { Request, Response } from "express";
import { createProduct, deleteProduct, findProductById, findProducts, updateProduct } from "../services/product.service";


export async function createProductHandler(req: Request, res: Response) {
  const product = await createProduct(req.body)
  res.status(200)
  res.json({
    status: res.statusCode,
    product: product,
  })
}

export async function findProductHandler(req: Request, res: Response) {
  const foundProduct = await findProducts(req.body)
  res.status(200)
  res.json({
    status: res.statusCode,
    products: foundProduct,
  })
}

export async function findProductByIdHandler(req: Request, res: Response) {
  const id = req.params.id
  const foundProduct = await findProductById({ _id: id })
  res.status(200)
  res.json({
    status: res.statusCode,
    product: foundProduct,
  })
}

export async function updateProductHandler(req: Request, res: Response) {
  const query = req.body.query
  const update = req.body.update
  const updatedProduct = await updateProduct(query, update, {})
  res.status(200)
  res.json({
    status: res.statusCode,
    product: updatedProduct,
  })
}

export async function deleteProductHandler(req: Request, res: Response) {
  const id = req.params.id
  await deleteProduct({ _id: id })
  res.status(200)
  res.json({
    status: res.statusCode,
    message: "Product Deleted"
  })
}

