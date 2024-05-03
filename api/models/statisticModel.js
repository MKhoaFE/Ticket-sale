import sql from "mssql";

import {
    getConnectionPool,
    thongKeTheoTinhThanhModel,
    thongKeTheoLoaiXeModel,
    VeDatTheoNgayModel,
} from "../utils/database.js";
//const mongoose = require("mongoose");

export const getThongKeTheoTinhThanh = async () => {
    const sqlString = `select NoiDen TinhThanh, FORMAT(THOIGIANDEN, 'MM-yyyy') AS ThangNam, sum(GIAVE) TongDoanhThu, count(MAVE) SoVeDat
                        FROM VeXe
                        Group by NoiDen, FORMAT(THOIGIANDEN, 'MM-yyyy')`;
    const pool = await getConnectionPool();
    const request = new sql.Request(pool);
    const result = await request.query(sqlString);
    return result.recordsets;
};
export const getThongKeTheoLoaiXe = async () => {
    const sqlString = `select lx.TenLoaiXe LoaiXe, FORMAT(THOIGIANDEN, 'MM-yyyy') AS ThangNam, sum(GIAVE) TongDoanhThu, count(MAVE) SoVeDat
                        FROM VEXE vx
                        Join Xe x on vx.BienSoXe = x.BSXe
                        join LoaiXe lx on lx.IDLoaiXe = x.IDLoaiXe
                        Group by lx.TENLOAIXE, FORMAT(THOIGIANDEN, 'MM-yyyy')`;
    const pool = await getConnectionPool();
    const request = new sql.Request(pool);
    const result = await request.query(sqlString);
    return result.recordsets;
};
export const getVeDatHomNay = async () => {
    const sqlString = `select count(MAVE) SoVeDat
                        FROM VeXe
                        WHERE NGAYDAT = GETDATE()`;
    const pool = await getConnectionPool();
    const request = new sql.Request(pool);
    const result = await request.query(sqlString);
    return result.recordset[0];
};
export const getVeDatTheoNgay = async () => {
    const sqlString = `select NgayDat Ngay, count(MaVe) SoVeDat
                        FROM VeXe
                        Group by NGAYDAT`;
    const pool = await getConnectionPool();
    const request = new sql.Request(pool);
    const result = await request.query(sqlString);
    return result.recordsets;
};

export const postThongKeTheoLoaiXeNoSQL = async (req) => {
    for (let i = 0; i < req[0].length; i++){
        await new thongKeTheoLoaiXeModel(req[0][i]).save();
    } 
    //return result;
};
export const postThongKeTheoTinhThanhNoSQL = async (req) => {
    for (let i = 0; i < req[0].length; i++) {
        
        await new thongKeTheoTinhThanhModel(req[0][i]).save();
    } 
    // const result = 
    // return result;
};
export const postVeDatTheoNgayNoSQL = async (req) => {
    for (let i = 0; i < req[0].length; i++) {
        await new VeDatTheoNgayModel(req[0][i]).save();
    } 
    // const result = 
    // return result;
};

export const getThongKeDoanhThuTheoLoaiXeNoSQL = async (req) => {
    try {
        const result = await thongKeTheoLoaiXeModel.find().select('LoaiXe ThangNam TongDoanhThu -_id');
        return result;
    } catch (err) {
        return err;
    }
};
export const getThongKeSoLuongTheoLoaiXeNoSQL = async (req) => {
    try {
        const result = await thongKeTheoLoaiXeModel
            .find()
            .select("LoaiXe ThangNam SoVeDat -_id");
        return result;
    } catch (err) {
        return err;
    }
};
export const getThongKeDoanhThuTheoTinhThanhNoSQL = async (req) => {
    try {
        const result = await thongKeTheoTinhThanhModel
            .find()
            .select("TinhThanh ThangNam TongDoanhThu -_id");
        return result;
    } catch (err) {
        return err;
    }
};
export const getThongKeSoLuongTheoTinhThanhNoSQL = async (req) => {
    try {
        const result = await thongKeTheoTinhThanhModel
            .find()
            .select("TinhThanh ThangNam SoVeDat -_id");
        return result;
    } catch (err) {
        return err;
    }
};
export const getVeDatTheoNgayNoSQL = async (req) => {
    try {
        const result = await VeDatTheoNgayModel.find().select('Ngay SoVeDat -_id');
        return result;
    } catch (err) {
        return err;
    }
};

export const getStatistic = async () => {
    const pool = await getConnectionPool();
    const request = new sql.Request(pool);
    const result = await request.execute("sp_GetStatistic");
    return result.recordsets;
};
