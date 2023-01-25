import React, { useState } from "react";
import { Link, redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../img/logo.png";
import "../styles.css";

export default function Signup() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: '',
    password: ''
  }); 

  const userSetter = (event) => {
    const { value, name } = event.target; 
    setUser(Object.assign(user, {[name]: value}));
  };

  const createUser = (e) => {
    e.preventDefault(); 
    fetch('/usersignup', {
        method: 'POST',
        body: JSON.stringify({ username, password })
      })
        .then((data)=>data.json())
        .then((data)=>{
            if (data.userCreated === true){
              return redirect('/login');
            }else{
                alert("Error signing up. Please try again")
            }
        })
      }

  return (
    <div className='login'>
      <div className='loginBox'>
        <h1>
          <img id='logo' src={logo}></img>
          Signup with Softi
        </h1>
        <form id='loginForm' method = 'post'>
          <input
            type='text'
            name = 'username'
            className='userInfo'
            placeholder='Username'
            onChange = {(event) => {userSetter(event)}}
            required></input>
          <input
            type='password'
            name = 'password'
            className='userInfo'
            placeholder='Password'
            onChange = {(event) => {userSetter(event)}}
            required></input>
            <button className='login-btn' onClick={(e) => {createUser(e)}}>
             Signup
            </button>
        </form>
      </div>
    </div>
  );
}