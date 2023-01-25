import React from 'react'
import {useSelector, useDispatch } from "react-redux"
import { userLogin } from "../redux/questionSlice"
import logo from '../img/logo.png'
import '../styles.css'

export default function Login() {
  // const dispatch = useDispatch()

  const [user, setUser] = useState({
    username: '', 
    pasword: ''
  });

  const userSetter = (e) => {
    const {value, name} = e.target; 
    setUser(Object.assign(user, {[name] : value})); 
  }

//   const createNewUser = (e) => {
//     fetch('/signup', {
//         method: 
//     })
//   }


  return (
    <div className="login">
      <div className = 'loginBox'>
      <h1> <img id = 'logo' src = {logo}></img>Signup </h1>
      <form id = 'loginForm' method = "post">
        <input type = "text" name = 'username' className = 'userInfo' placeholder='Username' 
        onChange = {(event) => {userSetter(event)}} required></input>
        <input type = "password" name = 'password' className = 'userInfo' placeholder='Password' 
        onChange = {(event) => {userSetter(event)}} required></input>
        <button className="login-btn" onClick={createNewUser}>Signup</button>
      </form>
      <p> Don't have an account? Click here to signup </p>
      </div>
    </div >
  )
}