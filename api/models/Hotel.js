import mongoose from "mongoose";
// const mongoose = require('mongoose');
const HotelSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time_go: {
    type: String,
    required: true,
  },
  time_arrival: {
    type: String,
    required: true,
  },
  sum_time: {
    type: String,
    required: true,
  },
  car_type: {
    type: String,
    required: true,
  },
  sum_distance: {
    type: String,
    required: true,
  },

  tickets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
    },
  ],
});

export default mongoose.model("Ride", HotelSchema);

// const Hotel = mongoose.model("student", HotelSchema);


// module.exports = Hotel;

// module.exports = mongoose.model("Hotel", HotelSchema);