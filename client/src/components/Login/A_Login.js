import React from "react";
import "./Login.css";
import bg from "../../assets/image/b3.jpg"
import col_logo from "../../assets/image/logo.jpg"
// import icon from "../assets/image/s_logo.jpeg";
// import { Link } from "react-router-dom";
// import image1 from "../assets/image/s.png";

export default function AdminLogin() {
    return (
        <div >
        <img src={bg} alt=""  className="body"/>
      <div class="form-container">
        
      <img src={col_logo} alt="ui-element" className="image"/> 
            <h1>ADMIN LOGIN</h1>
        
        <form class="register-form">
          
       
           <label for="fname">Email : </label> 

          {<input
            id="email"
            class="form-field"
            type="text"
            placeholder="Email"
            name="email"
          /> }
           <label for="fname">Password : </label>

          <input
            id="password"
            class="form-field"
            type="password"
            placeholder="Password"
            name="password"
          />
          {/* Uncomment the next line to show the error message */}
          {/* <span id="email-error">Please enter an email address</span> */}
          <button class="button" type="submit">
            LOGIN
          </button>
        </form>
      </div>
      </div>
    );
  }
