import "./formBooking.css"
import { useState,useEffect } from "react";
import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const FormBooking = () => {
  const location = useLocation()
  const nav = useNavigate()
  const  User  = useContext(AuthContext);
  const [Email, SetEmail] = useState();
  const [Name, SetName] = useState();
  const [Phone, SetPhone] = useState();
  const [seatEmpty, setSeatEmpty] = useState([])
  const [ride, setRide] = useState({})
  const [seat,setSeat] = useState(0)
  const handleBookingTicket = () => {
    axios.post(`http://localhost:8800/api/rides/byId/seat`,{RideId: ride._id,seat: seat})
    .then((res) => {
      console.log("he",res.data)
    })
    .catch((err) => console.log(err))

    axios.post(`http://localhost:8800/api/userticket`, {email: Email, name: Name, SeatNumber: seat, car_type:ride.car_type , RideId: ride._id, from: ride.from, to:ride.to,date: ride.date,time_go: ride.time_go, time_arrival: ride.time_arrival, payment: true, phone: Phone})
    .then((res) => {
      nav('/myticket')
    })
    .catch((err) => console.log(err))

  }
  useEffect(() => {
    axios.post(`http://localhost:8800/api/rides/byId`, {id:location.state._id})
        .then((res) => {
          setSeatEmpty(res.data.seat)
          setRide(res.data)
          console.log(res.data)
        })
        .catch((err) => console.log(err))

  }, [])
  console.log(seatEmpty)
  return (
    <div className="formBooking">
      <div className="User_Infor">
      <div className="formBooking_title">Thông tin khách hàng</div>
      <div className="Booking_Form">
        <input
          className="Booking_Form_Value"
          placeholder="Your name"
          onChange={(values) => SetName(values.target.value)}
        />
      </div>
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
      <div className="EmptySeat">Số ghế còn trống: <p>{" "}</p> {seatEmpty.map((seat,id) => {
          return seat.empty && <div key={id}> {seat.number}, </div>
        })}</div>
      </div>
      <div className="Make_Payment">
        <div className="Make_Payment_Test"> Thanh toán</div>

        <div  className="Booking_Button_Test" onClick={handleBookingTicket}>
        Đặt vé
        </div>
      </div>
    </div>
  )
}

export default FormBooking