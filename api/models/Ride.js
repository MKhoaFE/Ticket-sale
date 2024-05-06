import mongoose, { mongo } from "mongoose";
// const mongoose = require('mongoose');
const RideSchema = new mongoose.Schema({
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
  car_type: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  slot: {
    type: Number,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  tickets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
    },
  ],
  seat: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
      },
      empty: {
        type: Boolean,
      },
      number: {
        type: Number,
      },
    },
  ],
});

export default mongoose.model("Ride", RideSchema);
