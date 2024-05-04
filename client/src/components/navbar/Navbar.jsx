import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
// import { SearchContext } from "../../context/SearchContext";
// import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { Button } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';


const Navbar = () => {
  const navigate = useNavigate();
  const {user, dispatch} = useContext(AuthContext);

  const handleMoveToLogin = () =>  {
    navigate('/login')
  }

  const handleMoveToRegister = () =>  {
    navigate('/register')
  }
  const handleMoveToBoooking = () =>  {
    navigate('/booking')
  }
  const handleMoveToUserTicket = () =>  {
    navigate('/myticket')
  }

  const handleLogout = () =>  {
    dispatch({type:"LOGOUT"});
    navigate('/')
  }



  return (
    <div className="navbar">
          <div className="Left_container">
          {user ? <div className="left_nav">
            <div className="Booking_navbar" onClick={handleMoveToBoooking}>Booking</div>
            <div className="Booking_navbar" onClick={handleMoveToUserTicket}>My Ticket</div>
          </div> : (
            <div className="left_nav">
               <div className="Booking_navbar" onClick={handleMoveToBoooking}>Booking</div>
            </div>
          )}
          </div>
          <Link to="/" className="trapzoid" >
            <span className="logo">Futa Bus</span>
          </Link>   {/* if there is user show his username otherwise show this div.  */}
          <div className="Right_Container">
          {user ? <div className="right_nav">
            <span style={{color: "black"}}><PersonIcon/> Hello {user.email}</span>
            <Button variant="contained" style={{background:"white", color:"black", marginLeft:"1rem"}} className="navButton" onClick={() => handleLogout()} >Logout</Button>
          </div> : (
            <div className="navItems">
              <button className="navButton" onClick={() => handleMoveToRegister()}>Register</button>
              <button className="navButton" onClick={() => handleMoveToLogin()} >Login</button>
            </div>
          )}
          </div>

    </div>
  )
}

export default Navbar
