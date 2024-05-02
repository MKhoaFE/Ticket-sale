import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
import { useState } from "react";

const List = () => {
  const [date, setDate] = useState(null);
  const handleDateChange = (newDate) => {
    setDate(newDate);
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
                style={{ width: "12rem", }}
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
            {/* {loading ? "loading": <>
            
              {data.map(item=>(

            <SearchItem item={item} key={item._id}/>
              ))}
           
            </>} */}
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
