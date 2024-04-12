import React from "react";

export const Footer = () => {
  return (
    <div
      className="footer"
      style={{ backgroundColor: "#FFCCC0", marginTop: "5rem" }}
    >
      <div className="container" style={{ height: "100%" }}>
        <div className="wrapper">
          <div className="area-text-left">
            <div className="top">
              <div className="left">
                <h5>Trung tâm tổng đài & CSKH</h5> <span>1900 6067</span>
              </div>
              <div className="right">
                <img src="https://storage.googleapis.com/futa-busline-cms-dev/logo_Sale_Noti_7dab1d54a1/logo_Sale_Noti_7dab1d54a1.png"></img>
              </div>
            </div>
            <div className="bottom">
              <p>
                CÔNG TY CỔ PHẦN XE KHÁCH PHƯƠNG TRANG - FUTA BUS LINES Địa
                chỉ:Số 01 Tô Hiến Thành, Phường 3, Thành phố Đà Lạt, Tỉnh Lâm
                Đồng, Việt Nam.
              </p>
              <div className="d-flex flex-wrap p-flex ">
                <p>
                  <b>Email:</b> hotro@futa.vn
                </p>
                <p>
                  <b>Điện thoại:</b> 02838386852
                </p>
                <p>
                  <b>Fax:</b> 02838386853
                </p>
              </div>
            </div>
          </div>
          <div className="area-text-right">
            <div className="left">
              <b>FUTA Bus Lines</b>
              <li>Về chúng tôi</li>
              <li>Lịch trình</li>
              <li>Tuyển dụng</li>
              <li>Tin tức & Sự kiện</li>
              <li>Mạng lưới văn phòng</li>
            </div>
            <div className="right">
              <b>Hỗ trợ</b>
              <li>Tra cứu thông tin đặt vé</li>
              <li>Điều khoản sử dụng</li>
              <li>Câu hỏi thường gặp</li>
              <li>Hướng dẫn đặt vé trên Web</li>
              <li>Hướng dẫn nạp tiền trên App</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
