import express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import rideRoute from "./routes/Ride.route.js";
// import roomsRoute from "./routes/rooms.js";
// import bookingsRoute from "./routes/bookings.js";
import statisticRoute from "./routes/statisticRouter.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { updateDaily, updateMonthly } from "./controllers/statisticController.js";
import schedule from "node-schedule";
import config from "./config/config.js";

const app = express();
    
const connect = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://nhmkhoajob:Minhkhoa0404.@cluster0.1vup4p8.mongodb.net/",
            { dbName: "FutaBus" }
        );
    } catch (error) {
        throw error;
    }
};
mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected!");
});

mongoose.connection.on("connected", () => {
    console.log("MongoDB connected!");
});






app.use(cors({origin:"http://localhost:3000",method:"GET"}))


app.use(express.json())
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/statistic", statisticRoute);
app.use('/api/rides', rideRoute);

const job1 = schedule.scheduleJob("1 * *", updateMonthly);
const job2 = schedule.scheduleJob("0 * * *", updateDaily);
//Error Handler Middleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.errorMessage || "Something went wrong!";


    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        messsage: errorMessage,
        stack: err.stack,                           
    });
        
});



app.listen(8800, () => {
    connect();
    console.log("Connected to Backend!");
});
