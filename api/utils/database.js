import sql from "mssql";
import mongoose from "mongoose";
const { Schema } = mongoose;
import config from "../config/config.js";

export const getConnectionPool = async () => {
    let pool = null;

    const finalConfig = {
        ...config.DATABASE,
        // driver: 'msnodesqlv8',
        options: {
            trustServerCertificate: true,
            // trustedConnection: true,
        },
    };

    try {
        pool = await new sql.ConnectionPool(finalConfig).connect();
    } catch (err) {
        console.log(err);
    }
    return pool;
};

const thongKeTheoTinhThanhSchema = new Schema({
    TinhThanh: {
        type: String,
        required: true,
    },
    Thang: {
        type: Number,
        required: true,
    },
    Nam: {
        type: Number,
        required: true,
    },

    TongDoanhThu: {
        type: Number,
        required: true,
    },
    SoVeDat: {
        type: Number,
        required: true,
    },
});

export const thongKeTheoTinhThanhModel = mongoose.model(
    "thongKeTheoTinhThanh",
    thongKeTheoTinhThanhSchema
);

const thongKeTheoLoaiXeSchema = new Schema({
    LoaiXe: {
        type: String,
        required: true,
    },

    Thang: {
        type: Number,
        required: true,
    },

    Nam: {
        type: Number,
        required: true,
    },

    TongDoanhThu: {
        type: Number,
        required: true,
    },

    SoVeDat: {
        type: Number,
        required: true,
    },
});

export const thongKeTheoLoaiXeModel = mongoose.model(
    "thongKeTheoLoaiXe",
    thongKeTheoLoaiXeSchema
);

const VeDatTheoNgaySchema = new Schema({
    Ngay: {
        type: Number,
        required: true,
    },

    Thang: {
        type: Number,
        required: true,
    },
    Nam: {
        type: Number,
        required: true,
    },
    SoVeDat: {
        type: Number,
        required: true,
    },
});

export const VeDatTheoNgayModel = mongoose.model(
    "VeDatTheoNgay",
    VeDatTheoNgaySchema
);
