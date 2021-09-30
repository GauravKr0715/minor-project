import React from "react";
import "./Login.css";
import logo from "/Users/pooja/Desktop/M_Project/minor-project/client/src/assets/image/s.png";
import col_logo from "/Users/pooja/Desktop/M_Project/minor-project/client/src/assets/image/logo.jpg"
// import Slogo from "/Users/pooja/Desktop/M_Project/minor-project/client/src/assets/image/s_logo.jpeg"
// import { Link } from "react-router-dom";
// import image1 from "../assets/image/s.png";

export default function StudentLogin() {
  // const [values, setValues] = useState({
  //   firstName: "",
  //   lastName: "",
  //   enrollNo: "",
  //   email: "",
  //   password: "",
 

 

    return (
  
        <div>
          <div className="top-nav">
            
            <img className="col_logo" src={col_logo} alt="" />
          </div>

      <div class="logo">
      <img className="icon" src={logo} alt="" />
      </div>  
    
      
           
      
      <div class="form-container">
      
        

           {/* <div > */}
            <h1>STUDENT LOGIN</h1>
        
          {/* <img src="../assets/image/a.png" alt="ui-element"/> */}
        <form class="register-form">
          {/* <div className="success-message"></div> */}
          {/* Uncomment the next line to show the success message */}
          {/* <div class="success-message">Success! Thank you for registering</div> */}
          {/* <h6>first</h6> */}
          {/* <label for="fname">First name: </label>
          <input
            // onChange = {handleFirstNameInputchange}
            // value={values.firstName}
            id="first-name"
            class="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
          />
          {/* Uncomment the next line to show the error message */}
          {/* <span id="first-name-error">Please enter a first name</span> */}
          {/* <label for="fname">Last name: </label>
          <input
            // onChange = {handleLastNameInputchange}
            // value={values.lastName}
            id="last-name"
            class="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
          /> */} 
          {/* Uncomment the next line to show the error message */}
          {/* <span id="last-name-error">Please enter a last name</span> */}
          <label for="fname">Enrollment Number: </label>
          <input
            // onChange = {handleEnrollNoInputchange}
            // value={values.enrollNo}
            id="enroll-no"
            class="form-field"
            type="text"
            placeholder="Enrollment No"
            name="enrollNo"
          />
          {/* <label for="fname">Email : </label>

          <input */}
            {/* // onChange = {handleEmailInputchange}
            // value={values.email}
          //   id="email"
          //   class="form-field"
          //   type="text"
          //   placeholder="Email"
          //   name="email"
          // /> */}
          <label for="fname">Password : </label>

          <input
            // onChange = {handlePasswordInputchange}
            // value={values.password}
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
