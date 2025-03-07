import bcrypt from "bcryptjs";
import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    unique: true,
    trim: true,
  },
  type: {
    type: Number,
    required: true,
  },
  refresh_token: {
    type: [String],
  },
  reset_expires: {
    type: Date,
  },
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;
