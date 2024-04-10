import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

export const userModel =
  mongoose?.model?.User || mongoose.model("User", userSchema);
