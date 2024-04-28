import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

export const createRoom = async (req, res) => {
  try {
    const hotelId = req.params.hotelid;

    const room = new Room(req.body);
    await room.save();
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
      return res.status(404).json({ message: 'Khách sạn không tồn tại.' });
    }

    hotel.rooms = [...hotel.rooms, room._id];
    await hotel.save();

    res.status(201).json(room);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateRoom = async (req, res, next) => {
    try {
      const updatedRoom = await Room.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedRoom);
    } catch (err) {
      next(err);
    }
  };
  export const updateRoomAvailability = async (req, res, next) => {
    try {
      await Room.updateOne(
        { "roomNumbers._id": req.params.id },
        {
          $push: {
            "roomNumbers.$.unavailableDates": req.body.dates                // $. because you are updating nested properties
          },
        }
      );
      res.status(200).json("Room status has been updated.");
    } catch (err) {
      next(err);
    }
  };
  export const deleteRoom = async (req, res, next) => {
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
  
      res.status(200).json("Room has been deleted.");
    } catch (err) {
      next(err);
    }
  };
  
  export const getRoom = async (req, res, next) => {
    try {
      const room = await Room.findById(req.params.id);
      res.status(200).json(room);
    } catch (err) {
      next(err);
    }
  };

  export const getRooms = async (req, res, next) => {
    try {
      const rooms = await Room.find();
      res.status(200).json(rooms);
    } catch (err) {
      next(err);
    }
  };
  