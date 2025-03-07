import mongoose, { Schema } from "mongoose";

const mentorSchema = new Schema(
  {
    user_id: {
        type: String,
        required: true,
        unique: true,
    },
    description:{
        type: String,
    },
    email: {
      type: String,
      required: true,
    },
    mentor_name: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 1,
    },
    skills:{
        type: [String],
    },
    interests:{
        type: [String],
    },
    career_goal:{
        type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Mentor = mongoose.model("Mentor", mentorSchema);
