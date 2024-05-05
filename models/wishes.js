import mongoose, { Schema, mongo } from "mongoose";

const wishSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Wish = mongoose.models.Wish || mongoose.model("Wish", wishSchema);

export default Wish;
