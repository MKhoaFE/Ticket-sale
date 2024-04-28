import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import Booking from "../models/Booking.js";
import User from "../models/User.js";
import { createError } from "../utils/error.js";

export const createBooking = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const booking = new Booking(req.body);
    await booking.save();
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User does not exist!' });
    }
    user.booking = [...user.booking, booking._id];
    await user.save();

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

  export const deleteBooking = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    try {
      await Room.findByIdAndDelete(req.params.id);
  
      try {
        await Hotel.findByIdAndUpdate(hotelId, {
          $pull: { rooms: req.params.id },
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json("Booking has been deleted.");
    } catch (err) {
      next(err);
    }
  };

  export const getBooking = async (req, res, next) => {
    try {
      const userId = req.params.userId;
      const userBooking = await User.findById(userId).populate('booking');
      res.status(200).json(userBooking.booking);
    } catch (err) {
      next(err);
    }
  };

  export const getBookings = async (req, res, next) => {
    try {
      const bookings = await Booking.find();
      res.status(200).json(bookings);
    } catch (err) {
      next(err);
    }
  };
  