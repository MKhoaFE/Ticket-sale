import express from "express";
import { createBooking, deleteBooking, getBooking, getBookings} from "../controllers/booking.js";
import { verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:userId", verifyUser, createBooking);

//DELETE
router.delete("/:id", verifyUser, deleteBooking);

//GET BOOKING THAT USER BOOKED -> USER
router.get("/:userId", getBooking);

//GET ALL BOOKING -> ADMIN
router.get("/", getBookings);

export default router;
