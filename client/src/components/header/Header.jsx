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

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
      );
      setCities(result.data);
    };
    fetchData();
  }, []);

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

            <div className="headerSearch">
              <div className="top">
                <FormControlLabel
                  control={<Checkbox />}
                  style={{ color: "black" }}
                  label="Một chiều"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  style={{ color: "black" }}
                  label="Khứ hồi"
                />
              </div>
              <div className="mid">
                <div className="formInput1">
                  <Box sx={{ minWidth: "10rem" }}>
                    <FormControl>
                      <InputLabel id="city-label">Điểm đi</InputLabel>
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
                  <div className="icon">
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
                      <InputLabel id="destination-label">Điểm đến</InputLabel>
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
                      <DatePicker />
                    </LocalizationProvider>
                  </Box>
                  <Box sx={{ minWidth: "10rem" }}>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Số vé"
                      multiline
                      maxRows={4}
                      style={{ width: "12rem" }}
                    />
                  </Box>
                </div>
              </div>
              <div className="bottom">
                <div className="wrap">
                  <Button
                    variant="outlined"
                    style={{
                      backgroundColor: "#FFCCC0",
                      color: "white",
                      padding: "10px 80px",
                    }}
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
