import React from "react";
import "./Login.css";
import col_logo from "../../assets/image/logo.jpg"
// import icon from "../assets/image/s_logo.jpeg";
// import { Link } from "react-router-dom";
// import image1 from "../assets/image/s.png";
import bg from "../../assets/image/b3.jpg"

export default function FacultyLogin() {
    return (
        <div >
        <img src={bg} alt="" className="body" />
      <div class="form-container">
        
      <img src={col_logo} alt="ui-element"  className="image"/> 
       
            <h1>FACULTY LOGIN</h1>
        
          {/* <img src="../assets/image/a.png" alt="ui-element"/> */}
        <form class="register-form">
          {/* Uncomment the next line to show the success message */}
          {/* <div class="success-message">Success! Thank you for registering</div> */}
          {/* <h6>first</h6> */}
          {/* <label for="fname">First name: </label>
          <input
            id="first-name"
            class="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
          /> */}
          {/* Uncomment the next line to show the error message */}
          {/* <span id="first-name-error">Please enter a first name</span> */}
          {/* <label for="fname">Last name: </label>
          <input
            id="last-name"
            class="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
          /> */}
          {/* Uncomment the next line to show the error message */}
          {/* <span id="last-name-error">Please enter a last name</span> */}
          <label for="fname">College ID Number : </label>
          <input
            id="college-id-no"
            class="form-field"
            type="text"
            placeholder="College ID No"
            name="collegeIdNo"
          />
           {/* <label for="fname">Email : </label> */}

          {/* <input
            id="email"
            class="form-field"
            type="text"
            placeholder="Email"
            name="email"
          /> */}
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
