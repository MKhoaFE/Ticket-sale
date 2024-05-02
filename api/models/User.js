import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    //   required: true,
    },
    gender: {
      type: String,
    //   required: true,
    },
    avatar: {
      type: String,
    },
    address: {
      type: String,
    //   required: true,
    },
    phone: {
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
