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
import React from "react";

const Header = ({ type }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
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
                      <InputLabel id="demo-simple-select-label">
                        Điểm đi
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        style={{ width: "12rem" }}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
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
                      <InputLabel id="demo-simple-select-label">
                        Điểm đến
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        style={{ width: "12rem" }}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
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
