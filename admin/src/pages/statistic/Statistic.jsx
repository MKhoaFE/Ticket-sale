import "./Statistic.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data2 = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 800 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },
];

const Statistic = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[1];
    const [list, setList] = useState();
    const { data, loading, error } = useFetch(`/${path}`);
    const type = [];
    const province = [
        "DL",
        "DN",
        "HN",
        "NT",
        "BT",
        "TPHCM",
        "VT"
    ];
    const colors = [
        "#FC4100",
        "#1A4D2E",
        "#8884b8",
        "#888428",
        "#87676",
        "#1A4D2D",
    ]; // Array of colors

    province.forEach((item, index) => {
        const strokeColor = colors[index % colors.length]; // Dynamic stroke color based on index

        type.push(
            <Line
                type="monotone"
                dataKey={item}
                stroke={strokeColor}
                connectNulls
            />
        );
    });
    useEffect(() => {
        setList(data);
    }, [data]);
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <div className="chart">
                    <div className="title">
                        Daily Order
                    </div>
                    <ResponsiveContainer width="100%" aspect={4 / 1}>
                        <LineChart
                            width={730}
                            height={250}
                            data={data.veDatTheoNgay}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <XAxis
                                dataKey="Ngay"
                                stroke="gray"
                                allowDuplicatedCategory={false}
                            />
                            <YAxis></YAxis>
                            <CartesianGrid
                                strokeDasharray="3 3"
                                className="chartGrid"
                            />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="SoVeDat"
                                stroke="#FC4100"
                                connectNulls
                            />
                            <Legend />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="chart">
                    <div className="title">
                        Monthly Revenue by Limmosine Type
                    </div>
                    <ResponsiveContainer width="100%" aspect={4 / 1}>
                        <LineChart
                            width={730}
                            height={250}
                            data={data.ThongKeDoanhThuTheoLoaiXe}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <XAxis
                                dataKey="ThangNam"
                                stroke="gray"
                                allowDuplicatedCategory={false}
                            />
                            <YAxis></YAxis>
                            <CartesianGrid
                                strokeDasharray="3 3"
                                className="chartGrid"
                            />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="Thuong"
                                stroke="#FC4100"
                                connectNulls
                            />
                            <Line
                                type="monotone"
                                dataKey="VIP"
                                stroke="#8884d8"
                                connectNulls
                            />
                            <Legend />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="chart">
                    <div className="title">Monthly Revenue by Province</div>
                    <ResponsiveContainer width="100%" aspect={4 / 1}>
                        <LineChart
                            width={730}
                            height={250}
                            data={data.ThongKeDoanhThuTheoTinhThanh}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <XAxis
                                dataKey="ThangNam"
                                stroke="gray"
                                allowDuplicatedCategory={false}
                            />
                            <YAxis />
                            <CartesianGrid
                                strokeDasharray="3 3"
                                className="chartGrid"
                            />
                            <Tooltip />
                            {type}
                            <Legend />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Statistic;
