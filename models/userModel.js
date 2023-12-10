import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    sector: {
      type: String,
      required: [true, "Please add a name"],
    },
    terms: {
      type: Boolean,
      required: [true, "Please add terms"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
