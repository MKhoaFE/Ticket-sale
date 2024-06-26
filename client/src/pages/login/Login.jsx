import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import "./login.css";

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined,
    });    

    const {user, loading, error, dispatch} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e)=>{    
        setCredentials(prev=>({...prev, [e.target.id]: e.target.value })); //using previous value
        //set the password = password.value //creating variable password and setting values 
    }
                                   
    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({type:"LOGIN_START"}); //updating loading state
        try{
            const res = await axios.post("/auth/login", credentials);
            console.log(res.data, "type", typeof res.data);
            dispatch({type:"LOGIN_SUCCESS", payload: res.data.details })
            navigate("/");
            console.log("logged in");
        }
        catch(err){
            dispatch({type:"LOGIN_FAILURE", payload:err.response.details});
        }
    } 



    return (
        <div className="login">
          <div className='login-container'>
            
          <div className="lContainer">
          <h1 style={{marginBottom: '15px'}}>LOGIN</h1>
            <input
              type="text"
              placeholder="email"
              id="email"
              onChange={handleChange}
              className="lInput"
              style={{marginBottom: '20px'}}
            />
            <input
              type="password"
              placeholder="password"
              id="password"
              onChange={handleChange}
              className="lInput"
              style={{marginBottom: '20px'}}
            />
            <button style={{width: '190px', height: '50px', fontSize: '24px'}} disabled={loading} onClick={handleClick} className="lButton">
              Login 
            </button>
            {error && <span>{error.message}</span>}
          </div>
          </div>
        </div>
      );
    };

export default Login;
