
import mongoose, { Schema, Model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
    maxlength: 20,
  },
  password: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20,
  },
});

export const User: Model<any> = mongoose.model("User", userSchema);

const productSchema = new Schema({
  // Add your product schema definition here
});

export const Product: Model<any> = mongoose.model("Product", productSchema);