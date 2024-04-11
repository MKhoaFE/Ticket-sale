import "../css/Revenue.css";
import Nav from "./nav";
import {library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from "react-chartjs-2";

export const Revenue = () => {
  const monthlyRevenueData = [];
  const dailyOrderData = [];

  const xMonths = [];
  const xDates = [];

  const revenue = $("#myRevenueChart").data("revenue");
  const orderNumber = $("#myOrderChart").data("ordernumber");
  revenue.forEach((item) => {
      monthlyRevenueData.push(item.monthlyRevenue);
      xMonths.push(`${item.orderMonth}/${item.orderYear}`);
  });
  orderNumber.forEach((item) => {
      dailyOrderData.push(item.dailyOrder);
      xDates.push(`${item.orderDate}/${item.orderMonth}/${item.orderYear}`);
  });

  new Chart("myRevenueChart", {
      type: "line",
      data: {
          labels: xMonths,
          datasets: [
              {
                  label: "Monthly Revenue",
                  data: monthlyRevenueData,
                  borderColor: "#88E1C1",
                  fill: false,
              },
          ],
      },
      options: {
          legend: { display: false },
          title: {
              display: true,
              text: "Tổng doanh thu theo tháng",
          },
      },
  });

  new Chart("myOrderChart", {
      type: "line",
      data: {
          labels: xDates,
          datasets: [
              {
                  label: "Daily Orders",
                  data: dailyOrderData,
                  borderColor: "#7D94E5",
                  fill: false,
              },
          ],
      },
      options: {
          legend: { display: false },
          title: {
              display: true,
              text: "Tổng đơn theo ngày",
          },
      },
  });
  var [revenue3,setRevenue3]=useState({
    labels: ["a","b"],
    datasets: [    
      {
        label: " ",
        data: [1,2],
        fill: false,
        borderColor: "#742774"
      }
    ]
  })
  useEffect(() => {
    var total=[]
    var date=[]
      axios({
        method: 'get',
        url: `http://localhost:4000/order/order/revenue`,
      })
      .then(response => {
        for(var i=0;i<response.data.length;i=i+1)
        {
          total.push(response.data[i].total)
          date.push(response.data[i].MODIFIED_AT)
        }
      });
      setRevenue3({
        labels: date,
        datasets: [    
          {
            label: " ",
            data: total,
            fill: false,
            borderColor: "#742774"
          }
        ]
      
    })
    }
    ,[]);
    var options = {
      
      scales: {
        y: {
          stepSize: 2,
          beginAtZero: true,
          ticks: {
            autoSkip: true
          }
    
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Revenue'
        },
        
      },
      
    }
    library.add(faStar);
  return (
      <div>
          <div
              class="container border border-success rounded text-start"
              style="background-color: #ffffff">
              <h5 class="mt-2 mb-0">Tổng đơn hàng thành công</h5>
              <div class="d-flex align-items-center justify-content-center mb-3">
                  <div class="fs-2 fw-bold" style="color: #2006BF;">
                      {" "}
                      {{ totalSuccessfulOrder }}{" "}
                  </div>
              </div>
          </div>

          <div
              class="container mt-3 border border-success rounded text-start"
              style="background-color: #ffffff">
              <h5 class="mt-2 mb-0">Tổng doanh thu</h5>
              <div class="d-flex align-items-center justify-content-center mb-3">
                  <div class="fs-2 fw-bold" style="color: #2006BF;">
                      {" "}
                      {{ totalRevenueString }} VNĐ{" "}
                  </div>
              </div>
          </div>
          <div
              class="container mt-3 border border-success rounded text-start"
              style="background-color: #ffffff">
              <h5 class="mt-2 mb-3">Biểu đồ</h5>
              <div class="d-flex align-items-center justify-content-center mb-3 row">
                  <canvas
                      id="myOrderChart"
                      class="mb-4"
                      style="width: 100%; max-width: 700px"
                      data-ordernumber="{{JSONtotalOrderDaily}}"></canvas>
                  <canvas
                      id="myRevenueChart"
                      class="mb-4"
                      style="width: 100%; max-width: 700px"
                      data-revenue="{{JSONtotalMonthlyRevenue}}"></canvas>
              </div>
          </div>
          <div>
              <Nav />

              <div className="rectangle-11">
                  <div className="catagories">Catagories</div>
                  <div
                      className="days1"
                      onClick={(e) => {
                          var total = [];
                          var date = [];
                          axios({
                              method: "get",
                              url: `http://localhost:4000/order/order/revenue`,
                          }).then((response) => {
                              for (
                                  var i = 0;
                                  i < response.data.length;
                                  i = i + 1
                              ) {
                                  total.push(response.data[i].total);
                                  date.push(response.data[i].MODIFIED_AT);
                              }
                          });
                          console.log(total);
                          console.log(date);
                          setRevenue3({
                              labels: date,
                              datasets: [
                                  {
                                      label: " ",
                                      data: total,
                                      fill: true,
                                      borderColor: "#742774",
                                  },
                              ],
                          });
                          console.log(revenue3);
                      }}>
                      DAYS
                  </div>
                  <div
                      className="months1"
                      onClick={(e) => {
                          var total = [];
                          var date = [];
                          axios({
                              method: "get",
                              url: `http://localhost:4000/order/order/month`,
                          }).then((response) => {
                              for (
                                  var i = 0;
                                  i < response.data.length;
                                  i = i + 1
                              ) {
                                  total.push(response.data[i].total);
                                  date.push(response.data[i].MODIFIED_AT);
                              }
                          });
                          setRevenue3({
                              labels: date,
                              datasets: [
                                  {
                                      label: " ",
                                      data: total,
                                      fill: true,
                                      borderColor: "#742774",
                                  },
                              ],
                          });
                          console.log(revenue3);
                      }}>
                      MONTHS
                  </div>
                  <div
                      className="years1"
                      onClick={(e) => {
                          var total = [];
                          var date = [];
                          axios({
                              method: "get",
                              url: `http://localhost:4000/order/order/year`,
                          }).then((response) => {
                              for (
                                  var i = 0;
                                  i < response.data.length;
                                  i = i + 1
                              ) {
                                  total.push(response.data[i].total);
                                  date.push(response.data[i].MODIFIED_AT);
                              }
                          });
                          console.log(total);
                          console.log(date);
                          setRevenue3({
                              labels: date,
                              datasets: [
                                  {
                                      label: " ",
                                      data: total,
                                      fill: true,
                                      borderColor: "#742774",
                                  },
                              ],
                          });
                      }}>
                      YEARS
                  </div>
              </div>
              <div class="user-list">
                  REVENUE
                  <div className="chart-container">
                      <Line data={revenue3} options={options} redraw={true} />
                  </div>
              </div>
          </div>
      </div>
  );
};

  