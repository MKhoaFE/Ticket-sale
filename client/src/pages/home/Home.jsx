import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse By Hotel Type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Hotel Room Lists</h1>
        <FeaturedProperties/>
        <MailList/>
      </div>
      <div className="homeContainer2">
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
