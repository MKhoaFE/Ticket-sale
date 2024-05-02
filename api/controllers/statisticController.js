//const moment = require('moment');

// const AppError = require('../utils/appError');
import {
    getVeDatTheoNgay,
    getThongKeTheoTinhThanh,
    getThongKeTheoLoaiXe,
    postThongKeTheoLoaiXeNoSQL,
    postThongKeTheoTinhThanhNoSQL,
    postVeDatTheoNgayNoSQL,
    getVeDatHomNayTheoTinhThanh,
    getThongKeTheoLoaiXeNoSQL,
    getThongKeTheoTinhThanhNoSQL,
    getVeDatTheoNgayNoSQL,
} from "../models/statisticModel.js";
//const config = require('../config/config');

export const updateStatistic = async (req, res) => {
    const veDatTheoNgay = await getVeDatTheoNgay();
    const ThongKeTheoTinhThanh = await getThongKeTheoTinhThanh();
    const ThongKeTheoLoaiXe = await getThongKeTheoLoaiXe();
    //const veDatHomNayTheoTinhThanh = getVeDatHomNayTheoTinhThanh();

    console.log('entered');
    await postThongKeTheoLoaiXeNoSQL(ThongKeTheoLoaiXe);
    await postThongKeTheoTinhThanhNoSQL(ThongKeTheoTinhThanh);
    await postVeDatTheoNgayNoSQL(veDatTheoNgay);

    res.status(200).json("Statistic updated successful");
};
export const getStatistic = async (req, res, next) => {
    const ThongKeTheoLoaiXe = await getThongKeTheoLoaiXeNoSQL();
    const ThongKeTheoTinhThanh = await getThongKeTheoTinhThanhNoSQL();
    const veDatTheoNgay = await getVeDatTheoNgayNoSQL();
    const veDatHomNayTheoTinhThanh = await getVeDatHomNayTheoTinhThanh();
    res.status(200).json({
        ThongKeTheoLoaiXe,
        ThongKeTheoTinhThanh,
        veDatTheoNgay,
        veDatHomNayTheoTinhThanh,
    });
};
