import React from "react";
import "./Login.css";
import bg from "../../assets/image/b3.jpg"
import col_logo from "../../assets/image/logo.jpg"


export default function StudentLogin() {
  
    return (
  
        <div >
         
      <img src={bg} alt="" className="body" />
       
      <div class="form-container">
      <img src={col_logo} alt="ui-element"  className="image"/>
      
            <h1>STUDENT LOGIN</h1>
        
          
        <form class="register-form">
       
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
