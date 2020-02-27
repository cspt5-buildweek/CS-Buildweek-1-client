import React, { useState } from "react";
import axios from "axios"
// import { useInput } from "../CustomHooks/InputHook"

function LoginPage() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: ""
  })
  // Handles input changes to user info for login
  const handleChange = e => {
    setUserInfo({
      ...userInfo,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  // Handles submission to backend for login 
  // IMPORTANT set up a single variable for base URL in .env 
  // TODO Redirection to home game page once key is received
  // TODO Indicator of waiting for login from server
  const handleSubmit = e => {
    e.preventDefault()
    axios.post("https://lambda-mud-test.herokuapp.com/api/login/", userInfo)
    .then(response => {
      console.log(response)
    })
    // TODO Must set up a .catch for failure 
  }
  
  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <input type="text" name="username" onChange={handleChange}/>
      <input type="text" name="password" onChange={handleChange}/>
      <button onClick={handleSubmit} type="submit">Submit</button>
    </div>
  );
}

export default LoginPage;
