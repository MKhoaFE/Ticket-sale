import "../css/Managecustomer.css"
import Nav from "./nav"
import icon_search from "../asset/img/magnifying-glass-solid.svg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useState, useEffect } from 'react';
export const Managecustomer = () => {

    library.add(faStar);
    
    const [pointCustomer, setpointCustomer] = useState([]);
    const [pointCustomerTemp, setpointCustomerTemp] = useState([]);
    useEffect(()=>{
      axios({
            method: 'get',
            url: 'http://localhost:4000/point/point',
           })
           .then(result=>{
            setpointCustomer(result.data)
            setpointCustomerTemp(result.data)
          })
          .catch(result=>{
           })
    },[]);
    function filteredLevelGold(){
      setpointCustomerTemp(pointCustomer.filter((point)=>point.point>3000))
      console.log(pointCustomer)
    }
    function filteredLevelSliver(){
      
      
      setpointCustomerTemp(pointCustomer.filter((point)=>point.point>1000 && point.point<3000 ))
      console.log(pointCustomer)


    }
    function filteredLevelBronze(){
      setpointCustomerTemp(pointCustomer.filter((point)=>point.point<1000 ))

    }
    return (
      <div>
        <Nav/>
        <div class="containerManageCustomer">
        <div className="container1">
        <div class="rectangle6-11">
            <div class="catagories">Catagories</div>
            <button class="all-catagories">All Catagories</button>
            <button class="gold"  onClick={filteredLevelGold}>Gold</button>
            <button class="sliver"onClick={filteredLevelSliver}>Sliver</button>
            <button class="bronze"onClick={filteredLevelBronze}>Bronze</button>
        </div> 
        </div>
        <div className="container2">
        <div class="rectangle6-13">
            <div class="user-list1">USER LIST</div>
            <div className="information1">
            <div class="diff">#</div>
            <div class="name2">Name</div>
            <div class="loyalty-points">Loyalty Points</div>
            <div class="voucher-points">Voucher points</div>
            <div class="customer-levels">Customer levels</div>
            </div>
            <div class="line3-3"></div>
            {pointCustomerTemp.map((pointCustomerTemp)=>(
              <div class="user1">
              <div class="_1m">{pointCustomerTemp.id}</div>
              <div class="thuanm">{pointCustomerTemp.username}</div>
              <div class="_100m">{pointCustomerTemp.accpoint}</div>
              <div class="_50m">{pointCustomerTemp.point}</div>
              {pointCustomerTemp.point<1000 ? (
        <div class="sliverm">Bronze</div>
      ) : pointCustomerTemp.point>1000 &&pointCustomerTemp.point<3000 ?(
          <div class="sliverm">Sliver</div>
        ) : (
          <div class="sliverm">Gold</div>
        )}
              </div>
            ))}
        </div>
      </div>
      </div>
      </div>
    );
  };
  