import React from "react";
import { Link , redirect} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../redux/questionSlice";
import logo from "../img/logo.png";
import "../styles.css";
import e from "express";

export default function Login() {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: '',
    password: ''
  }); 

  const userSetter = (event) => {
    const { value, name } = event.target; 
    setUser(Object.assign(user, {[name]: value}));
  };

  const verifyUser = (e) => {
    e.preventDefault(); 
    fetch('/login', {
        method: 'POST',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
        .then((data)=>data.json())
        .then((data)=>{
            if (data.loggedIn === true){
                // let path = '/home';
                // navigate(path, {state: {username: state.username}});
                return redirect('/home')
            }else{
                alert("Wrong username or password. Please try again.")
            }
        })
    
}
  return (
    <div className='login'>
      <div className='loginBox'>
        <h1>
          {" "}
          <img id='logo' src={logo}></img>Softi{" "}
        </h1>

        <form id = 'loginForm' method = 'post'>
        <input type = "text" 
        name = 'username'  
        className = 'userInfo' 
        placeholder='Username or Email Address' 
        onChange = {(event) => {userSetter(event)}} required>
        </input>

        <input type = "password" 
        name = 'password' 
        className = 'userInfo' 
        placeholder='Password' 
        onChange = {(event) => {userSetter(event)}} required>
        </input>
        <button type = 'submit' value = 'login' className='login-btn' onClick={(e => {verifyUser(e)})}>
          Login
          </button>
          </form>
      </div>
    </div>
  );
}
