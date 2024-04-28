import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    country: {
      type: String,
    //   required: true,
    },
    img: {
      type: String,
    },
    city: {
      type: String,
    //   required: true,
    },
    phone: {
      type: String,
    //   required: true,
    },
    password: {
      type: String,
    //   required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    booking: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
      },
    ]
  },
  { timestamps: true }   //created at and updated at time.
);

export default mongoose.model("User", UserSchema);
