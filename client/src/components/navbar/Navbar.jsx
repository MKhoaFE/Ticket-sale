import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
// import { SearchContext } from "../../context/SearchContext";
// import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { Button } from "@mui/material";



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
      <div className="container">
      <div className="navContainer ">
        <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
          <div className="trapzoid">
          <span className="logo">Futa Bus</span>
          </div>

        </Link>   {/* if there is user show his username otherwise show this div.  */}
        {user ? <div>
          <span style={{color: "black"}}>Hello {user.email}</span>
          <Button variant="contained" style={{background:"white", color:"black", marginLeft:"1rem"}} className="navButton" onClick={() => handleLogout()} >Logout</Button>
        </div> : (
          <div className="navItems">
            <button className="navButton" onClick={() => handleMoveToRegister()}>Register</button>
            <button className="navButton" onClick={() => handleMoveToLogin()} >Login</button>
          </div>
        )}
      </div>
      </div>

    </div>
  )
}

export default Navbar

// {user ? (<span>{user.username}</span> ): (<div className="navItems">    
// <button className="navButton">Register</button>
// <button className="navButton">Login</button>
// </div>)}