//const moment = require('moment');

// const AppError = require('../utils/appError');
import {
    getVeDatTheoNgay,
    getThongKeTheoTinhThanh,
    getThongKeTheoLoaiXe,
    postThongKeTheoLoaiXeNoSQL,
    postThongKeTheoTinhThanhNoSQL,
    postVeDatTheoNgayNoSQL,
    getVeDatHomNay,
    getThongKeSoLuongTheoLoaiXeNoSQL,
    getThongKeDoanhThuTheoLoaiXeNoSQL,
    getThongKeSoLuongTheoTinhThanhNoSQL,
    getThongKeDoanhThuTheoTinhThanhNoSQL,
    getVeDatTheoNgayNoSQL,
} from "../models/statisticModel.js";
//const config = require('../config/config');
export const updateDaily = async (req, res, next) => {
    const veDatTheoNgay = await getVeDatTheoNgay();

    await postVeDatTheoNgayNoSQL(veDatTheoNgay);
    return "Statistic updated successful";
};

export const updateMonthly = async (req, res, next) => {
    const ThongKeTheoTinhThanh = await getThongKeTheoTinhThanh();
    const ThongKeTheoLoaiXe = await getThongKeTheoLoaiXe();

    await postThongKeTheoLoaiXeNoSQL(ThongKeTheoLoaiXe);
    await postThongKeTheoTinhThanhNoSQL(ThongKeTheoTinhThanh);
    return "Statistic updated successful";
};


export const updateStatistic = async (req, res) => {
    const veDatTheoNgay = await getVeDatTheoNgay();
    const ThongKeTheoTinhThanh = await getThongKeTheoTinhThanh();
    const ThongKeTheoLoaiXe = await getThongKeTheoLoaiXe();

    console.log("entered api");
    await postThongKeTheoLoaiXeNoSQL(ThongKeTheoLoaiXe);
    await postThongKeTheoTinhThanhNoSQL(ThongKeTheoTinhThanh);
    await postVeDatTheoNgayNoSQL(veDatTheoNgay);
    res.status(200).json("Statistic updated successful");
};
export const getStatistic = async (req, res, next) => {
    var ThongKeDoanhThuTheoLoaiXe = await getThongKeDoanhThuTheoLoaiXeNoSQL();
    var carType = [];
    for (let i = 0; i < ThongKeDoanhThuTheoLoaiXe.length; i++) {
        if (!carType.includes(ThongKeDoanhThuTheoLoaiXe[i].LoaiXe))
            carType.push(ThongKeDoanhThuTheoLoaiXe[i].LoaiXe);
    }
    ThongKeDoanhThuTheoLoaiXe = ThongKeDoanhThuTheoLoaiXe.map((item) => {
        const { LoaiXe, TongDoanhThu, ThangNam } = item;
        return { ThangNam, [LoaiXe.trim()]: TongDoanhThu };
    });
    var ThongKeDoanhThuTheoTinhThanh =
        await getThongKeDoanhThuTheoTinhThanhNoSQL();
    var Province = [];
    for (let i = 0; i < ThongKeDoanhThuTheoTinhThanh.length; i++) {
        if (!Province.includes(ThongKeDoanhThuTheoTinhThanh[i].TinhThanh))
            Province.push(ThongKeDoanhThuTheoTinhThanh[i].TinhThanh);
    }
    ThongKeDoanhThuTheoTinhThanh = ThongKeDoanhThuTheoTinhThanh.map((item) => {
        const { TinhThanh, TongDoanhThu, ThangNam } = item;
        return { ThangNam, [TinhThanh.trim()]: TongDoanhThu };
    });

    var veDatTheoNgay = await getVeDatTheoNgayNoSQL();
    veDatTheoNgay = veDatTheoNgay.map((item) => {
        const { Ngay, SoVeDat } = item;
        return {
            Ngay: new Date(item.Ngay).toISOString().split("T")[0],
            SoVeDat,
        };
    });
    var veDatHomNay = await getVeDatHomNay();
    res.status(200).json({
        ThongKeDoanhThuTheoLoaiXe,
        ThongKeDoanhThuTheoTinhThanh,
        veDatTheoNgay,
        veDatHomNay,
        Province,
        carType,
    });
};
