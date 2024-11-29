import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    username: { type: String},
    email: { type: String, required: true, unique: true },
    emailVerified: {type: Boolean, default:false},
    password: { type: String},
    provider: {type: String},
    providerId: { type: String },
    verificationCode: {type: String},
    resetCode: {type: String},
    resetCodeExpiration: {type: Date},
    image: { type: String, default: "" },
    isAdmin: {type: Boolean, default: false},
    balance: {type: Number, default: 0},
    paypalAddress: {type: String},
    pendingWithdrawal: {
      status: {type: Boolean, default: false},
      amount: {type: Number}
    }
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;