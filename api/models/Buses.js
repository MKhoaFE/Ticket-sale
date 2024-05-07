import mongoose from "mongoose";
// const mongoose = require('mongoose');
const BusesSchema = new mongoose.Schema({
    MaTuyen: {
        type: String,
    },
    DiemBatDau: {
        type: String,
    },
    DiemKetThuc: {
        type: String,

    },
    ThoiGianChay: {
        type: String,
    },
    LoaiXe: {
        type: string,
    },
    GiaVe: {
        type: string,
    }


});

export default mongoose.model("Buses", BusesSchema);

