import { Login } from "./components/login";
import { Managecustomer } from "./components/Managecustomer";
import { Profile } from "./components/Profile";
import { Revenue } from "./components/Revenue";
import { User } from "./components/User";
import { Register } from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<ManageProduct />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/Managecustomer"
                        element={<Managecustomer />}
                    />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/Revenue" element={<Revenue />} />
                    <Route path="/User" element={<User />} />
                    {/* <Route path="/login" element={<Login/>}/>
          <Route path="/ManageProduct" element={<ManageProduct/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/ManageProduct" element={<ManageProduct/>}/> */}
                </Routes>
            </Router>
        </div>
    );
}
{
    /* <BrowserRouter>
      <Routes>
        <Route path="Login" element={<Login />} />
        <Route path="Profile" element={<Revenue />} />
        <Route path="Shop" element={<Managepointuser />}>
          <Route index element={<ManageProduct />} />
          <Route path="User" element={<User />} />
          <Route path="Admin" element={<Managepointadmin />} />
          <Route path="Revenue" element={<Revenue />} />          
        </Route>
      </Routes>
    </BrowserRouter> */
}
export default App;
