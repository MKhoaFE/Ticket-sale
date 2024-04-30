//const moment = require('moment');

// const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const statisticModel = require('../models/statisticModel');
const config = require('../config/config');
const { thongKeTheoTinhThanhModel } = require('../utils/database');

export const updateStatistic = async (req, res) => {
    const veDatTheoNgay = statisticModel.getVeDatTheoNgay();
    const ThongKeTheoTinhThanh = statisticModel.getThongKeTheoTinhThanh();
    const ThongKeTheoLoaiXe = statisticModel.getThongKeTheoLoaiXe();
    //const veDatHomNayTheoTinhThanh = statisticModel.getVeDatHomNayTheoTinhThanh();

    console.log('entered');
    statisticModel.postThongKeTheoLoaiXeNoSQL(ThongKeTheoLoaiXe);
    statisticModel.postThongKeTheoTinhThanhNoSQL(ThongKeTheoTinhThanh);
    statisticModel.postVeDatTheoNgayNoSQL(veDatTheoNgay);

    res.send({ veDatTheoNgay, ThongKeTheoTinhThanh, ThongKeTheoLoaiXe });
};
export const getStatistic = async (req, res, next) => {
    const { user, cart, categoryTree } = req;
    //const isLoggedIn = req.isAuthenticated();

    const SOrdernRevenue = await statisticModel.getSOrdernRevenue();
    SOrdernRevenue.totalRevenue =
        SOrdernRevenue.totalRevenue == null ? 0 : SOrdernRevenue.totalRevenue;
    const totalRevenueString =
        SOrdernRevenue.totalRevenue.toLocaleString('vi-VN');
    const [totalOrderDaily, totalMonthlyRevenue] =
        await statisticModel.getStatistic();

    const JSONtotalOrderDaily = JSON.stringify(totalOrderDaily);
    const JSONtotalMonthlyRevenue = JSON.stringify(totalMonthlyRevenue);

    user.avatarPath = user.avatarPath || '/assets/img/account_icon.svg';
    res.send({
        headerName: 'Thống kê',
        title:'Statistic',
        statistic: true,
        status: 'success',
        layout: 'admin',
        navbar: () => 'navbar',
        footer: () => 'empty',
        categoryTree,
        ...user,
        ...cart,
        currentUrl: req.originalUrl,
        isAdmin,
        isLoggedIn,
        totalSuccessfulOrder: SOrdernRevenue.totalSuccessfulOrder,
        totalRevenue: SOrdernRevenue.totalRevenue,
        totalRevenueString,
        JSONtotalOrderDaily,
        JSONtotalMonthlyRevenue,
        totalOrderDaily,
        totalMonthlyRevenue,
    });
};
