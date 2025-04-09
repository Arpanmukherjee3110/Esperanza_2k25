import mongoose, { Document, Schema } from "mongoose";
import { hash } from "bcryptjs";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
    enum: ["1st", "2nd", "3rd", "4th"],
  },
  department: {
    type: String,
    required: true,
    enum: ["CE", "CSE", "ECE", "EE", "ME"],
  },
  bio: {
    type: String,
    default: "",
  },
  credentials: {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      select: false,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  registeredEvents: {
    type: [],
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("credentials.password")) {
    return next();
  }
  try {
    if (this.credentials?.password) {
      this.credentials.password = await hash(this.credentials.password, 10);
    }
    next();
  } catch (err: any) {
    next(err);
  }
});

export const User = mongoose.models?.User || mongoose.model("User",userSchema)
