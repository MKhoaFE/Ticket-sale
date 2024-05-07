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
import { Link } from "react-router-dom";
import HeaderSearch from "./HeaderSearch";

const Header = ({ type }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  //Lấy thông tin tỉnh thành
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [date, setDate] = useState(null);
  const [ticketNumber, setTicketNumber] = useState("");
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
      );
      setCities(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setIsSearchEnabled(
      selectedCity !== "" &&
        selectedDestination !== "" &&
        date !== null &&
        ticketNumber !== ""
    );
  }, [selectedCity, selectedDestination, date, ticketNumber]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
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

  const handleDistrictChange = (event) => {
    const selectedDistrictId = event.target.value;
    const selectedDistrict = districts.find(
      (district) => district.Id === selectedDistrictId
    );
    setWards(selectedDistrict.Wards);
  };

  const handleDestinationChange = (event) => {
    const selectedDestinationId = event.target.value;
    const selectedDestination = cities.find(
      (city) => city.Id === selectedDestinationId
    );
    setSelectedDestination(selectedDestinationId);
  };
  return (
    <div className="header container">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        {type !== "list" && (
          <>
            <div className="image1">
              <img src={logo} alt="" />
            </div>

            <HeaderSearch />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
