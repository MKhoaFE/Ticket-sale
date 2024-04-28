import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./booking.css";
import Table from "../../components/table/Table"
const booking = () => {
    return (
      <div>
        <Navbar />
        <Header/>
        <div className="homeContainer">
          <Table/>
        </div>
        <div className="homeContainer2">
          <Footer/>
        </div>
      </div>
    );
  };
  
  export default booking;