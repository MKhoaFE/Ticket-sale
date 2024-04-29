const sql = require("mssql");

const database = require("../utils/database");
const mongoose = require("mongoose");

exports.getThongKeTheoTinhThanh = async () => {
    const sqlString = `select NoiDen, MONTH(THOIGIANDEN) Thang, YEAR(THOIGIANDEN) Nam ,count(MAVE) SoVeDat, sum(GIAVE) TongDoanhThu
                        FROM VeXe
                        Group by NoiDen, Thang, Nam`;
    const pool = await database.getConnectionPool();
    const request = new sql.Request(pool);
    const result = await request.query(sqlString);
    return result.recordset[0];
};
exports.getThongKeTheoLoaiXe = async () => {
    const sqlString = `select lx.TenLoaiXe, MONTH(THOIGIANDEN) Thang, YEAR(THOIGIANDEN) Nam ,count(MAVE) SoVeDat, sum(GIAVE) TongDoanhThu
                        FROM VeXe vx
                        Join Xe x on vx.BienSoXe = x.BienSoXe
                        join LoaiXe lx on lx.IDLoaiXe = x.IDLoaiXe
                        Group by NoiDen, Thang, Nam`;
    const pool = await database.getConnectionPool();
    const request = new sql.Request(pool);
    const result = await request.query(sqlString);
    return result.recordset[0];
};
exports.getVeDatHomNayTheoTinhThanh = async () => {
    const sqlString = `select NoiDen, count(MAVE) SoVeDat
                        FROM VeXe
                        WHERE NGAYDAT = GETDATE()
                        Group by NoiDen`;
    const pool = await database.getConnectionPool();
    const request = new sql.Request(pool);
    const result = await request.query(sqlString);
    return result.recordset[0];
};
exports.getVeDatTheoNgay = async () => {
    const sqlString = `select count(MaVe), DAY(NGAYDAT), MONTH(NGAYDAT), YEAR(NGAYDAT),
                        FROM VeXe
                        Group by NGAYDAT`;
    const pool = await database.getConnectionPool();
    const request = new sql.Request(pool);
    const result = await request.query(sqlString);
    return result.recordset[0];
};

exports.postThongKeTheoLoaiXeNoSQL = async (req) => {
    const result = await new database.thongKeTheoLoaiXeModel(req.body).save();
    return result;
};
exports.postThongKeTheoTinhThanhNoSQL = async (req) => {
    const result = await new database.thongKeTheoTinhThanhModel(
        req.body
    ).save();
    return result;
};
exports.postVeDatTheoNgayNoSQL = async (req) => {
    const result = await new database.VeDatTheoNgayModel(req.body).save();
    return result;
};

exports.getStatistic = async () => {
    const pool = await database.getConnectionPool();
    const request = new sql.Request(pool);
    const result = await request.execute("sp_GetStatistic");
    return result.recordsets;
};
