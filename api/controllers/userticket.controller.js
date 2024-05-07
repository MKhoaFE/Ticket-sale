import userticket from "../models/userticket.js";

export const createUserTicket = async (req, res) => {
  const newUserTicket = new userticket(req.body); //enter by user
  console.log(req.body);
  try {
    const userticket = await newUserTicket.save();
    res.json(userticket);
  } catch (error) {
    res.json(error);
  }
};

export const getAllUserTicket = async (req, res) => {
  console.log(req.body);
  try {
    const ticket = await userticket.find({ email: req.body.email });
    console.log(ticket);
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
