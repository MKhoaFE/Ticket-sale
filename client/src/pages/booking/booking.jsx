import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import FormBooking from "../../components/formBooking/formBooking";
import "./booking.css";
const Booking = () => {

    return (
      <div>
        <Navbar />
        <div className="homeContainer">
          <FormBooking/>
        </div>
        <div className="homeContainer2">
          <Footer/>
        </div>
      </div>
    );
  };
  
  export default Booking;