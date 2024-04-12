import { Layout } from "antd";
import NavbarComp from './components/NavbarComp';
import "./App.css";
import "./components/style/style.css"
import { Footer } from "./components/Footer";
import { Copyright } from "./components/Copyright";

function App() {
  return (
    <Layout style={{backgroundColor:"white"}}> 
      <NavbarComp/>
      <Footer/>
      <Copyright/>
    </Layout>
  );
}

export default App;

