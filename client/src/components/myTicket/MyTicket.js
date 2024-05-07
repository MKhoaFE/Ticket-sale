import "./MyTicket.css";
import { useState, useEffect } from "react";
import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const MyTicket = () => {
  const User = useContext(AuthContext);
  const [ticket, setTicket] = useState([]);
  useEffect(() => {
    axios
      .post(`http://localhost:8800/api/userticket/myticket`, {
        email: User.user.email,
      })
      .then((res) => {
        setTicket(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(ticket);
  return (
    <div className="MyTicket">
      <div className="MyTicket_Title">Vé của bạn</div>
      {ticket.map((ticket, id) => {
        return (
          <div key={id} className="Ticket_Infor">
            <div className="Ticket_Infor_Ride">
              <div className="Ticket_Destination">Name: {ticket.name}</div>
              <div className="Ticket_Destination">Email : {ticket.email}</div>
              <div className="Ticket_Destination">Phone: {ticket.phone}</div>
              <div className="Ticket_Destination">
                Seat Number: {ticket.SeatNumber}
              </div>
              <div className="Ticket_Destination">
                Car type: {ticket.car_type}
              </div>
            </div>
            <div className="Ticket_Infor_Ride">
              <div className="Ticket_Destination">
                From : {ticket.from} - To : {ticket.to}
              </div>
              <div className="Ticket_Destination">
                Time go : {ticket.time_go} - Time arrive : {ticket.time_arrival}
              </div>
              <div className="Ticket_Destination">Date: {ticket.date}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyTicket;
