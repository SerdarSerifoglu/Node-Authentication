import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const SALT_ROUNDS = 12;

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        "Please provide a valid email",
      ],
    },
    password: {
      type: String,
      minlength: [6, "Please provide a password with min lenght 6"],
      required: true,
      select: false,
      trim: true,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function preSave(next) {
  const user = this;
  if (!user.isModified("password")) return next();
  try {
    const hash = await bcrypt.hash(user.password, SALT_ROUNDS);
    user.password = hash;
    return next();
  } catch (error) {
    return next(error);
  }
});

UserSchema.methods.comparePassword = async function comparePassword(candidate) {
  console.log("model", { pass: this.password, candidate });
  return await bcrypt.compare(candidate, this.password);
};

export default mongoose.model("User", UserSchema);
