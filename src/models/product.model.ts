import mongoose from "mongoose";

// The input given by user for requests
export interface ProductInput {
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string[];
}

export interface ProductDocument extends ProductInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

function generateRandomPrice() {
  const max = Math.floor(Math.random() * 100000)
  const min = Math.floor(Math.random() * 0.05)
  const randomPrice = Math.random() * (max - min) + min
  return parseFloat(randomPrice.toFixed(2))
}

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, default: generateRandomPrice() },
  images: { type: [String], default: [] },
  category: { type: [String], default: [] },
}, { timestamps: true })

productSchema.virtual("id").get(function() {
  return this._id.toHexString()
})

productSchema.set("toObject", {
  virtuals: true
})

productSchema.set("toJSON", {
  virtuals: true
})

const productModel = mongoose.model("product", productSchema)

export default productModel;
