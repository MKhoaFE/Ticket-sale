import Ticket from "../models/Ticket.js";

export const getTicket = async (req, res) => {
  try {
    const rides = await Ticket.find();
    res.status(200).json(rides);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
