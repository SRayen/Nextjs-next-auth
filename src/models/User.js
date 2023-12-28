import mongoose, { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export const User = models?.User || model("User", userSchema);
