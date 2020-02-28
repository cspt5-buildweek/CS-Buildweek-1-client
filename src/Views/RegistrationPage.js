import React, { useState } from "react";
import axios from "axios"
// import { useInput } from "../CustomHooks/InputHook"

function RegistrationPage() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password1: "",
    password2: ""
  })
  // Handles input changes to user info for registration
  const handleChange = e => {
    setUserInfo({
      ...userInfo,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  // Handles submission to backend for login 
  // IMPORTANT set up a single variable for base URL in .env 
  // TODO Login and redirect to home page or redirect to login 
  // TODO Indicator of waiting
  const handleSubmit = e => {
    e.preventDefault()
    axios.post("https://lambda-mud-test.herokuapp.com/api/registration/", userInfo)
    .then(response => {
      console.log(response)
    })
    // TODO Must set up a .catch for failure 
  }
  
  return (
    <div>
      <h1>REGISTRATION PAGE</h1>
      <input type="text" name="username" onChange={handleChange}/>
      <input type="text" name="password1" onChange={handleChange}/>
      <input type="text" name="password2" onChange={handleChange}/>
      <button onClick={handleSubmit} type="submit">Submit</button>
    </div>
  );
}

export default RegistrationPage;
