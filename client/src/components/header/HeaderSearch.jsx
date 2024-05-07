import "./header.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/images/BG_1.png";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "bootstrap/dist/css/bootstrap.min.css";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const HeaderSearch = () => {
    const navigate = useNavigate();

  //Lấy thông tin tỉnh thành
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [date, setDate] = useState(null);
  const [date1, setDate1] = useState(null);
  const [ticketNumber, setTicketNumber] = useState(1);
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);
  const [typeTicket, setTypeTicket] = useState(true)

  useEffect(() => {
    if((selectedCity!== "")&&(selectedDestination!== "")&&(date!== null)&&(date1!==null)){
      console.log("test");
      setIsSearchEnabled(true);
    }
    else {
      console.log("test1");
      setIsSearchEnabled(false);
    }
    
  },[selectedCity, selectedDestination, date, date1])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
      );
      setCities(result.data);
    };
    fetchData();
  }, []);

//   useEffect(() => {
//     setIsSearchEnabled(
//       selectedCity !== "" &&
//         selectedDestination !== "" &&
//         date !== null &&
//         ticketNumber !== ""
//     );
//   }, [selectedCity, selectedDestination, date, ticketNumber]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };
  const handleDate1Change = (newDate) => {
    setDate1(newDate);
  };
  const handleTicketNumberChange = (event) => {
    const value = event.target.value;
    setTicketNumber(value);
  };

  const handleCityChange = (event) => {
    const selectedCityId = event.target.value;
    const selectedCity = cities.find((city) => city.Id === selectedCityId);
    setSelectedCity(selectedCityId);
    setDistricts(selectedCity.Districts);
    setWards([]);
  };

  const handleDestinationChange = (event) => {
    const selectedDestinationId = event.target.value;
    const selectedDestination = cities.find(
      (city) => city.Id === selectedDestinationId
    );
    // setSelectedDestination(selectedDestination.Name.split(' ').slice(1).join(" "));
    setSelectedDestination(event.target.value);
  };

  const handleSearch = ()=>{
    const _from = cities.find(
        (city) => city.Id === selectedCity
    );
    const _to = cities.find(
        (city) => city.Id === selectedDestination
    );
    
    var city = "";
    var destination = "";
    if(_from != null){
       city = _from.Name
    }
    if(_to != null){
       destination = _to.Name
    }

    const regexCity = new RegExp(`\\b${city}\\b`, 'i');
    const regexDestination = new RegExp(`\\b${destination}\\b`, 'i');
    // Thực hiện chuyển hướng với truy vấn tương ứng
    navigate(`/search?from=${encodeURIComponent(city)}&to=${encodeURIComponent(destination)}`);
    console.log("đi1", city)
    console.log("đến1", destination)
    //console.log("xuất p", date)
    //navigate(`/search?from=${encodeURIComponent(city)}&to=${encodeURIComponent(destination)}&date=${date}`);
    //navigate(`/search?from=${city}#to=${destination}`);
    
  }

  // console.log("ticket: ", typeTicket)
  // console.log("num: ", ticketNumber)
  // console.log("đi: ", selectedCity)
  // console.log("đến: ", selectedDestination)
  console.log("kích hoạt button",isSearchEnabled )

  return (
    <div className="headerSearch">
              <div className="top">
                <FormControlLabel
                  control={<Checkbox checked={typeTicket}/>}
                  style={{ color: "black" }}
                  label="Một chiều"
                  onChange={()=>setTypeTicket(!typeTicket)}
                />
                <FormControlLabel
                  control={<Checkbox checked={!typeTicket}/>}
                  style={{ color: "black" }}
                  label="Khứ hồi"
                  onChange={()=>setTypeTicket(!typeTicket)}
                />
              </div>
              <div className="mid">
                <div className="formInput1">
                  <Box sx={{ minWidth: "10rem" }}>
                    <FormControl>
                      <label>Điểm đi</label>
                      <InputLabel id="city-label" style={{marginTop: "25px"}}>{selectedCity ? '': 'Chọn điểm đi'}</InputLabel>
                      <Select
                        labelId="city-label"
                        id="city"
                        value={selectedCity}
                        onChange={handleCityChange}
                        style={{ width: "12rem" }}
                      >
                        <MenuItem value="">Chọn điểm đi</MenuItem>
                        {cities.map((city) => (
                          <MenuItem key={city.Id} value={city.Id}>
                            {city.Name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                  <div className="icon" style={{marginTop:"1.5rem"}}>
                    <MultipleStopIcon
                      style={{
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    />
                  </div>
                  <Box sx={{ minWidth: "10rem" }}>
                      <FormControl>
                        <label>Điểm đến</label>
                        <InputLabel id="destination-label" style={{marginTop: "25px"}}>{selectedDestination ? '': 'Chọn điểm đến'}</InputLabel>
                        <Select
                          labelId="destination-label"
                          id="destination"
                          value={selectedDestination}
                          onChange={handleDestinationChange}
                          style={{ width: "12rem" }}
                        >
                        <MenuItem value="">Chọn điểm đến</MenuItem>
                        {cities.map((city) => {
                          if (city.Id !== selectedCity) {
                            return (
                              <MenuItem key={city.Id} value={city.Id}>
                                {city.Name}
                              </MenuItem>
                            );
                          }
                          return null;
                        })}
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <div className="formInput2">
                  <Box sx={{ minWidth: "10rem" }}>
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      style={{ width: "12rem" }}
                    >
                      <label>Ngày đi</label>
                      <DatePicker
                        value={date}
                        onChange={handleDateChange}
                        renderInput={(params) => (
                          <TextField {...params} label="Ngày đi" />
                        )}
                      />
                    </LocalizationProvider>
                  </Box>
                  {!typeTicket?
                    <Box sx={{ minWidth: "10rem" }}>
                      <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        style={{ width: "12rem" }}
                      >
                        <label>Ngày về</label>
                        <DatePicker
                          value={date1}
                          onChange={handleDate1Change}
                          renderInput={(params) => (
                            <TextField {...params} label="Ngày về" />
                          )}
                        />
                      </LocalizationProvider>
                    </Box>
                    :null
                  }
                  <Box sx={{ minWidth: "10rem" }}>
                    <label>Số vé</label>
                    <TextField
                      id="outlined-multiline-flexible"
                      //label="Số vé"
                      multiline
                      maxRows={4}
                      style={{ width: typeTicket? "12rem" : "5rem", display:"flex" }}
                      value={ticketNumber}
                      onChange={handleTicketNumberChange}
                      
                    />
                  </Box>
                </div>
              </div>
              <div className="bottom">
                <div className="wrap">
                  {/* <Link to="/hotels"> */}
                    <Button
                      variant="outlined"
                      onClick={handleSearch}
                      style={{
                        backgroundColor: !isSearchEnabled
                          ? "#EF5222"
                          : "#FFCCC0",
                        color: "white",
                        padding: "10px 80px",
                      }}
                       //disabled={!isSearchEnabled}
                    >
                      Search
                    </Button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
  )
}

export default HeaderSearch;