import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
  // const { dispatch } = useContext(DarkModeContext);
  const navigate = useNavigate();
  const {user, dispatch} = useContext(AuthContext);
  console.log("Navbar",user);

  const handleMoveToLogin = () =>  {
    navigate('/login')
  }

  console.log(user)
  const handleLogout = () =>  {
    dispatch({type:"LOGOUT"});
    navigate('/')
  }

  return (
      <div className="sidebar">
          <div className="top">
              <Link to="/" style={{ textDecoration: "none" }}>
                  <span className="logo">Admin Panel</span>
              </Link>
          </div>
          <hr />
          <div className="center">
              <ul>
                  <p className="title">MAIN</p>
                  {/* <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>          
          </li> */}

                  <Link to="/" style={{ textDecoration: "none" }}>
                      <li>
                          <DashboardIcon className="icon" />
                          <span>Dashboard</span>
                      </li>
                  </Link>

                  <p className="title">LISTS</p>
                  <Link to="/users" style={{ textDecoration: "none" }}>
                      <li>
                          <PersonOutlineIcon className="icon" />
                          <span>Users</span>
                      </li>
                  </Link>
                  <Link to="/lines" style={{ textDecoration: "none" }}>
                      <li>
                          <StoreIcon className="icon" />
                          <span>Lines</span>
                      </li>
                  </Link>
                  <Link to="/Schedule" style={{ textDecoration: "none" }}>
                      <li>
                          <CreditCardIcon className="icon" />
                          <span>Schedule</span>
                      </li>
                  </Link>
                  <Link to="/bookings" style={{ textDecoration: "none" }}>
                      <li>
                          <LocalShippingIcon className="icon" />
                          <span>Reservation</span>
                      </li>
                  </Link>
                  <Link to="/statistic" style={{ textDecoration: "none" }}>
                      <li>
                          <InsertChartIcon className="icon" />
                          <span>Statistic</span>
                      </li>
                  </Link>
                  {/* <p className="title">USEFUL</p>

          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li> */}
                  {/* <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li> */}
                  <p className="title">USER</p>
                  {/* <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li> */}
                  <li>
                      <ExitToAppIcon className="icon" />
                      <span onClick={() => handleLogout()}>Logout</span>
                  </li>
              </ul>
          </div>
          {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
      </div>
  );
};

export default Sidebar;
