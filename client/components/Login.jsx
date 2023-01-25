import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { userLogin } from "../redux/questionSlice"
import logo from '../img/logo.png'
import '../styles.css'

export default function Login() {
  const dispatch = useDispatch()

  return (
    <div className="login">
      <div className = 'loginBox'>
      <h1> <img id = 'logo' src = {logo}></img>Softi </h1>
      <form id = 'loginForm'>
        <input type = "text" className = 'userInfo' placeholder='Username' required></input>
        <input type = "password" className = 'userInfo' placeholder='Password' required></input>
        <button className="login-btn" onClick={() => dispatch(userLogin())}>Login</button>
      </form>
      </div>
    </div >
  )
}