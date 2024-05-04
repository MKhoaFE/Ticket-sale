import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    seat_number: {
      type: Number,
      required: true,
    },
    car_type: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    email:{
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Ticket", RoomSchema);
