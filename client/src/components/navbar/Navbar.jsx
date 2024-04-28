import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
// import { SearchContext } from "../../context/SearchContext";
// import { useState } from "react";
import {useNavigate} from 'react-router-dom';



const Navbar = () => {
  const navigate = useNavigate();
  const {user, dispatch} = useContext(AuthContext);
  console.log("Navbar",user);

  const handleMoveToLogin = () =>  {
    navigate('/login')
  }

  const handleMoveToRegister = () =>  {
    navigate('/register')
  }

  console.log(user)
  const handleLogout = () =>  {
    dispatch({type:"LOGOUT"});
    navigate('/')
  }



  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
        <span className="logo">Hotel Booking</span>
        </Link>   {/* if there is user show his username otherwise show this div.  */}
        {user ? <div>
          <span>{user.username}</span>
          <button className="navButton" onClick={() => handleLogout()} >Logout</button>
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

// {user ? (<span>{user.username}</span> ): (<div className="navItems">    
// <button className="navButton">Register</button>
// <button className="navButton">Login</button>
// </div>)}