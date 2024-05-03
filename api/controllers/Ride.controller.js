import Ride from "../models/Ride.js";

export const getAllRides = async (req, res) => {
    try {
      const rides = await Ride.find();
      res.status(200).json(rides);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };