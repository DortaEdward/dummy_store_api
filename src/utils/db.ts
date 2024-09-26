import mongoose from "mongoose"
import { data } from "./data"
import productModel from "../models/product.model"

export function connectToDb(dburi: string) {
  try {
    mongoose.connect(dburi)
    console.log('Connected to db')

  } catch (error) {
    console.error("Unable to connect to db")
    process.exit(1)
  }
}


export async function seedDb() {
  try {
    const products = await productModel.create(data);
  } catch (error) {
    console.error("Error with seeding:", error)
    process.exit(1)
  }

}
