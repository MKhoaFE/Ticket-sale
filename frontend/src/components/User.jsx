import "../css/User.css"
import Nav from './nav';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar} from "@fortawesome/free-solid-svg-icons";
import Moment from 'react-moment'




export const User = () => {
  const [userdata, setuserdata] = useState([]);
  useEffect(()=>{
    axios({
          method: 'get',
          url: 'http://localhost:4000/user/user',
         })
         .then(result=>{
         setuserdata(result.data)})
        .catch(result=>{
         })
  },[]);
  library.add(faStar);
  return (
    <div>
      <Nav/>
      <div class="rectangle1-12">
        <table className="table">
        <div class="user-list">USER LIST</div>
        <div className="containerUser1">
                <div class="dif">#</div>
                <div class="name1">First Name</div>
                <div class="name2">Last Name</div>
                <div class="email">Email</div>
                <div class='time1'>Created At</div>
                <div class='time2'>Modified At</div>
                </div>          
                {userdata.map((userdata) => (
                <div
                  className="containerUser2"                  
                >     
                <div className="_1u">{userdata.ID}</div>         
                <div className="LastNameUser">{userdata.LAST_NAME}</div>     
                <div className="FirstNameUser">{userdata.FIRST_NAME}</div>           
                <div className="UsernameUser">{userdata.USERNAME}</div>    
                <div className="CreatedUser">{userdata.CREATED_AT}</div> 
                <div className="ModifiedUser">{userdata.MODIFIED_AT}</div>        
                </div>
                ))}
           {/* {Moment(userdata.CREATED_AT).format('YYYY-MM-DD')} */}
           {/* {Moment(userdata.MODIFIED_AT).format('YYYY-MM-DD')} */}
           </table>       
    </div>
    
    </div>

  );
};