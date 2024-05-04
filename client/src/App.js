import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Booking from "./pages/booking/booking";
import UserTIcket from "./pages/userTicket/UserTicket";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/myticket" element={<UserTIcket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
