import mongoose from "mongoose";
const UserTicketSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  name: {
    type: String,
    //   required: true,
  },
  SeatNumber: {
    type: Number,
  },
  RideId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  date: {
    type: String,
  },
  time_go: {
    type: String,
  },
  time_arrival: {
    type: String,
  },
  payment: {
    type: Boolean,
    //   required: true,
  },
  phone: {
    type: String,
    //   required: true,
  },
});

export default mongoose.model("userticket", UserTicketSchema);
