const sql = require("mssql");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const config = require("../config/config");

exports.getConnectionPool = async () => {
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
    TinhThanh: String,
    Thang: Number,
    Nam: Number,
    TongDoanhThu: Number,
    SoVeDat: Number,
});

const thongKeTheoTinhThanhModel = mongoose.model(
    "thongKeTheoTinhThanh",
    thongKeTheoTinhThanhSchema
);

const thongKeTheoLoaiXeSchema = new Schema({
    LoaiXe: String,
    Thang: Number,
    Nam: Number,
    TongDoanhThu: Number,
    SoVeDat: Number,
});

const thongKeTheoLoaiXeModel = mongoose.model(
    "thongKeTheoLoaiXe",
    thongKeTheoLoaiXeSchema
);

const VeDatTheoNgaySchema = new Schema({
    Ngay: Number,
    Thang: Number,
    Nam: Number,
    SoVeDat: Number,
});

const VeDatTheoNgayModel = mongoose.model("VeDatTheoNgay", VeDatTheoNgaySchema);

module.exports = {
    VeDatTheoNgayModel,
    thongKeTheoTinhThanhModel,
    thongKeTheoLoaiXeModel,
};
