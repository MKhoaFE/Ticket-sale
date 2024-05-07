import express from "express";
import {getTicket} from "../controllers/ticket.controller.js";
const router = express.Router();

router.get("/", getTicket);

export default router;