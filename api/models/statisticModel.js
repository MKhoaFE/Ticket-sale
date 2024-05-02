import sql from "mssql";

import {
    getConnectionPool,
    thongKeTheoTinhThanhModel,
    thongKeTheoLoaiXeModel,
    VeDatTheoNgayModel,
} from "../utils/database.js";
//const mongoose = require("mongoose");

export const getThongKeTheoTinhThanh = async () => {
    const sqlString = `select NoiDen TinhThanh, MONTH(THOIGIANDEN) Thang, YEAR(THOIGIANDEN) Nam, sum(GIAVE) TongDoanhThu, count(MAVE) SoVeDat
                        FROM VeXe
                        Group by NoiDen, MONTH(THOIGIANDEN), YEAR(THOIGIANDEN)`;
    const pool = await getConnectionPool();
    const request = new sql.Request(pool);
    const result = await request.query(sqlString);
    return result.recordsets;
};
export const getThongKeTheoLoaiXe = async () => {
    const sqlString = `select lx.TenLoaiXe LoaiXe, MONTH(THOIGIANDEN) Thang, YEAR(THOIGIANDEN) Nam, sum(GIAVE) TongDoanhThu, count(MAVE) SoVeDat
                        FROM VEXE vx
                        Join Xe x on vx.BienSoXe = x.BSXe
                        join LoaiXe lx on lx.IDLoaiXe = x.IDLoaiXe
                        Group by lx.TENLOAIXE, MONTH(THOIGIANDEN), YEAR(THOIGIANDEN)`;
    const pool = await getConnectionPool();
    const request = new sql.Request(pool);
    const result = await request.query(sqlString);
    return result.recordsets;
};
export const getVeDatHomNayTheoTinhThanh = async () => {
    const sqlString = `select NoiDen, count(MAVE) SoVeDat
                        FROM VeXe
                        WHERE NGAYDAT = GETDATE()
                        Group by NoiDen`;
    const pool = await getConnectionPool();
    const request = new sql.Request(pool);
    const result = await request.query(sqlString);
    return result.recordsets;
};
export const getVeDatTheoNgay = async () => {
    const sqlString = `select DAY(NGAYDAT) Ngay, MONTH(NGAYDAT) Thang, YEAR(NGAYDAT) Nam, count(MaVe) SoVeDat
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

export const getThongKeTheoLoaiXeNoSQL = async (req) => {
    try {
        const result = await thongKeTheoLoaiXeModel.find();
        return result;
    } catch (err) {
        return err;
    }
};
export const getThongKeTheoTinhThanhNoSQL = async (req) => {
    try {
        const result = await thongKeTheoTinhThanhModel.find();
        return result;
    } catch (err) {
        return err;
    }
    // const result =
    // return result;
};
export const getVeDatTheoNgayNoSQL = async (req) => {
    try {
        const result = await VeDatTheoNgayModel.find();
        return result;
    } catch (err) {
        return err;
    }
    // const result =
    // return result;
};

export const getStatistic = async () => {
    const pool = await getConnectionPool();
    const request = new sql.Request(pool);
    const result = await request.execute("sp_GetStatistic");
    return result.recordsets;
};
