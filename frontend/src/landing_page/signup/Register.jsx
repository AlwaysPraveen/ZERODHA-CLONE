import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";


const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [userType] = useState("customer");

  const [errors, setErrors] = useState({});

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
  });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { fullName, email, password , userType};
    // console.log(formData);
    
    // try {
    //   const response = await fetch("http://your-backend-url/api/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   const data = await response.json();
    //   console.log("Login Success:", data);
    // } catch (error) {
    //   console.error("Login Error:", error);
    // }
    axios
    .post('https://zerodha-clone-6rsc.onrender.com/api/auth/signup',formData, {
      withCredentials: true ,
      headers: {
        'Content-Type': 'application/json', // Ensure data is sent as JSON
      },
      
    })
    .then((response) => {
      // Handle success
      handleSuccess('Signup successful');
      console.log('Signup successful:', response.data);
      setResponseMessage('Signup successful!');
      localStorage.setItem('user',JSON.stringify(response.data));
    })
    .catch((error) => {
      // Handle errors
      handleError(error.response?.data?.message);
      console.error('Error during signup:', error.response?.data || error.message);
      setResponseMessage(
        error.response?.data?.message || 'Something went wrong. Please try again.'
      );
    })
    setTimeout(() => {
      window.location.href= "https://zerodha-clone-2-dyji.onrender.com/signup";
    },3000);
  };

  return (
    <div className="container p-5 ">
        <div className="row  ">
          <div className="container col-6 my-5">
            <img src="media\images\signup.png" alt="Dashboard preview" className="img-fluid " />
          </div>
          <div className="col-6 my-5">
            <div className="card p-4 shadow-lg">
              <h3 className="text-center" style={{ color: "#387ED1" }}>Register Now</h3>
              <form onSubmit={handleSubmit}>
              <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    required 
                    style={{ borderColor: "#387ED1" }}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    required 
                    style={{ borderColor: "#387ED1" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3 position-relative">
                  <label className="form-label">Password</label>
                  <div className="input-group">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      className="form-control"
                      required
                      style={{ borderColor: "#387ED1" }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      {passwordVisible ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
                <button type="submit" className="btn w-100" style={{ backgroundColor: "#387ED1", color: "white" }}>
                  Register
                </button>
              </form>
              <ToastContainer/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Register;