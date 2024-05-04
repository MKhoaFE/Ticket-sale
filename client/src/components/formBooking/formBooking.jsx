import "./formBooking.css"
import { useState,useEffect } from "react";
import axios from "axios";

const FormBooking = () => {
  const [Email, SetEmail] = useState();
  const [Phone, SetPhone] = useState();
  const [seat, setSeat] = useState([])
  useEffect(() => {
    axios.post(`http://localhost:8800/api/rides/byId`, {id:"6634c0b3e1df42fccdf2def8"})
        .then((res) => {
          setSeat(res.data.seat)
          console.log(res)
        })
        .catch((err) => console.log(err))

  }, [])
  return (
    <div className="formBooking">
      <div className="formBooking_title">Nhập email và số điện thoại để đặt vé</div>
      <div className="Booking_Form">
        <input
          className="Booking_Form_Value"
          placeholder="Your email"
          onChange={(values) => SetEmail(values.target.value)}
        />
      </div>
      <div className="Booking_Form">
        <input
          className="Booking_Form_Value"
          placeholder="Your phone"
          onChange={(values) => SetPhone(values.target.value)}
        />
      </div>
      <div className="Booking_Form">
        <input
          className="Booking_Form_Value"
          placeholder="Seat number"
          onChange={(values) => setSeat(values.target.value)}
        />
      </div>
      <div className="EmptySeat">Số ghế còn trống: <p>{" "}</p> {seat.map((seat,id) => {
          return seat.empty && <div key={id}> {seat.number}, </div>
        })}</div>
      <div  className="Booking_Button">
        Đặt vé
      </div>
    </div>
  )
}

export default FormBooking