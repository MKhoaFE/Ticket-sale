import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState} from "react";
import ticketLogo from "../../assets/images/ticket.jpg";
import { useLocation } from 'react-router-dom';

const List = () => {
  const [date, setDate] = useState(null);
  const location = useLocation();
  const destination = new URLSearchParams(location.search).get("to");
  const city = new URLSearchParams(location.search).get("from");
  console.log("dest: ", destination)
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const [rides, setRides] = useState([]);

  useEffect(() => {
    fetchRides();
  }, []);

  const fetchRides = async () => {
    try {
      const response = await fetch(`http://localhost:8800/api/rides/search?from=${city}&to=${destination}`);
      if (!response.ok) {
        throw new Error("Failed to fetch rides");
      }
      const data = await response.json();
      setRides(data);
    } catch (error) {
      console.error("Error fetching rides:", error);
    }
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" />
            </div>
            <div className="lsItem">
              <label>Ngày đi</label>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                style={{ width: "12rem" }}
              >
                <DatePicker
                  value={date}
                  onChange={handleDateChange}
                  renderInput={(params) => (
                    <TextField {...params} label="Ngày" />
                  )}
                />
              </LocalizationProvider>
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input type="number" min={1} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input type="number" min={0} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input type="number" min={1} className="lsOptionInput" />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <div className="listResult">
              {/* <ul>
                {rides.map((ride) => (
                  <li key={ride._id}>
                    <p>From: {ride.from}</p>
                    <p>To: {ride.to}</p>
                    <p>Date: {ride.date}</p>
                    <p>Time Go: {ride.time_go}</p>
                    <p>Time Arrival: {ride.time_arrival}</p>
                    <p>Car Type: {ride.car_type}</p>
                    <p>Sum Distance: {ride.sum_distance}</p>
                  </li>
                ))}
              </ul> */}
              {rides.map((ride) => (
                <div key={ride._id}>
                  <CardActionArea>
                    <div className="ticketItem" style={{ display: "flex" }}>
                      <img src={ticketLogo}></img>
                      <div className="wrapper">
                      <div className="card-title">
                            From:
                            <span
                              style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                            >
                              {ride.from}
                            </span>
                            To:
                            <span
                              style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                            >
                              {ride.to}
                            </span>
                          </div>
                          <div className="card-content" style={{display:"flex"}}>
                        <div className="left" style={{display:"block"}}>

                          <div className="date">
                            Date:{" "}
                            <span
                              style={{ fontWeight: "bold", fontSize: "1rem" }}
                            >
                              {" "}
                              {ride.date}
                            </span>
                          </div>
                          <div className="time-go">
                            Time Start:{" "}
                            <span
                              style={{ fontWeight: "bold", fontSize: "1rem" }}
                            >
                              {" "}
                              {ride.time_go}
                            </span>
                          </div>
                          <div className="time-arrival">
                            Time Arrival:{" "}
                            <span
                              style={{ fontWeight: "bold", fontSize: "1rem" }}
                            >
                              {" "}
                              {ride.time_arrival}
                            </span>
                          </div>
                          <div className="car-type">
                            Type:{" "}
                            <span
                              style={{ fontWeight: "bold", fontSize: "1rem" }}
                            >
                              {" "}
                              {ride.car_type}
                            </span>
                          </div>
                          <div className="distance">
                            Distance:{" "}
                            <span
                              style={{ fontWeight: "bold", fontSize: "1rem" }}
                            >
                              {" "}
                              {ride.distance} km
                              
                            </span>
                          </div>
                        </div>
                        <div className="right">
                          <p style={{fontWeight:"bold", fontSize:"1.1rem", color:"#F93A27"}}>Giá vé: {ride.price}</p>
                          <p style={{fontWeight:"bold", fontSize:"1.1rem"}}>Còn trống:{ride.slot}</p>
                        </div>
                      </div>
                      </div>

                    </div>
                  </CardActionArea>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="homeContainer2">
        <Footer />
      </div>
    </div>
  );
};

export default List;
