import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: { type: String, required: [true, "user name is required"] },
  email: { type: String, required: [true, "email is required"], unique: true },
  password: { type: String, required: [true, "password is required"] },
  address: { type: Array },
  phone: {
      type: String,
      required: [true, "phone number is required"]
    },
  userType: {
    type: String,
    required: [true, "user type is required"],
    default: "client",
    enum: ["client", "admin", "vendor", "driver"],
  },

  profile : {
    type : String, 
    default : "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
  }
}, {timestamps:true});


const User = mongoose.model("User", userSchema);

export default User;