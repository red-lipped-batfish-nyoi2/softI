import React, { Component } from "react";
import Home from './components/Home.jsx';
import { useSelector } from 'react-redux';
import Login from './components/Login.jsx';
import './styles.css';


function App() {

  //link to state global
  //access to is logged in

  //useSelector: mapsToProps equivalent - takes in a function argument that returns the part of the state you want
  //passes down state properties as props
  const loginStatus = useSelector((state) => state.question.isLoggedIn);

  return (
    <div id="main">
      <img src="client/img/login.png" />
      {/* <p>Login Status: {String(loginStatus)}</p> */}
      {loginStatus ? <Home /> : <Login />}
    </div>
  );
}



export default App;
