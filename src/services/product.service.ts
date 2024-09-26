import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import productModel, { ProductDocument, ProductInput } from "../models/product.model";

export async function createProduct(payload: ProductInput) {
  try {
    const createdProduct = await productModel.create(payload);
    return createdProduct;
  } catch (err) {
    throw err
  }
}

export async function findProducts(query: FilterQuery<ProductDocument>, options: QueryOptions = { lean: true }) {
  try {
    const result = await productModel.find(query, {}, options)
    return result
  } catch (err) {
    throw err
  }
}

export async function findProductById(query: FilterQuery<ProductDocument>) {
  return await productModel.findById(query)
}

export async function updateProduct(query: FilterQuery<ProductDocument>, update: UpdateQuery<ProductDocument>, options: QueryOptions) {
  try {
    return productModel.findOneAndUpdate(query, update, options)
  } catch (err) {
    throw err
  }
}

export async function deleteProduct(query: FilterQuery<ProductDocument>) {
  return await productModel.deleteOne(query)
}
