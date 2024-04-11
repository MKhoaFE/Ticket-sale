import { Login } from './components/login';
import { ManageProduct} from './components/ManageProduct';
import { Detailsproduct } from './components/Detailsproduct';
import { Editaddproduct } from './components/Editaddproduct';
import { Managecustomer } from './components/Managecustomer';
import { Managepointadmin } from './components/Managepointadmin';
import {Profile}  from'./components/Profile';
import { Order } from './components/Order';
import { Revenue } from './components/Revenue';
import {User}  from'./components/User';
import {BagProduct}  from'./components/BagProduct';
import {Register} from './components/Register'
import {Managepointuser} from './components/Managepointuser'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ManageProduct/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/ManageProduct" element={<ManageProduct/>}/>
          <Route path="/Detailsproduct/:id" element={<Detailsproduct/>}/>
          <Route path="/Managecustomer" element={<Managecustomer/>}/>
          <Route path="/Editaddproduct/:id" element={<Editaddproduct/>}/>
          <Route path="/Managepointadmin" element={<Managepointadmin/>}/>
          <Route path="/Managepointuser" element={<Managepointuser/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/Order" element={<Order/>}/>
          <Route path="/Revenue" element={<Revenue/>}/>
          <Route path="/User" element={<User/>}/>
          <Route path="/BagProduct" element={<BagProduct/>}/>
          <Route path="/BagProduct/:id" element={<BagProduct/>}/>
          {/* <Route path="/login" element={<Login/>}/>
          <Route path="/ManageProduct" element={<ManageProduct/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/ManageProduct" element={<ManageProduct/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}
{/* <BrowserRouter>
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
    </BrowserRouter> */}
export default App;