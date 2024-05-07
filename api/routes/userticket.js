import express from "express";
import { createUserTicket } from "../controllers/userticket.controller.js";
import { getAllUserTicket } from "../controllers/userticket.controller.js";

const router = express.Router();

router.post("/", createUserTicket);
router.post("/myticket", getAllUserTicket);

export default router;
