import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
    },
    from:{
      type: String,
    },
    to:{
      type: String,
    },
    seat_number: {
      type: String,
    },
    car_type: {
      type: String,
    },
    phone: {
      type: Number,
    },
    email:{
      type: String,
    },
    type_ticket:{
      type: String,
    },

  },
  { timestamps: true }
);

export default mongoose.model("Ticket", RoomSchema);
