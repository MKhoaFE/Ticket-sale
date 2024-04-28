import mongoose from "mongoose";
const BookingSchema = new mongoose.Schema(
  {
    hotelName: {
      type: String,
      required: true,
    },
    roomNumber: { 
        type: Number,
        required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    startDate:{
        type: Date,
        required: true,
    },
    endDate:{
        type: Date,
        required: true,
    }
  }
);

export default mongoose.model("Booking", BookingSchema);
