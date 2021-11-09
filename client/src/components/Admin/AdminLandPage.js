import React from "react";
/* import { useHistory } from "react-router-dom"; */

import "./AdminLandPage.css";

import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.jpg";





function AdminLandPage() {
 
    return (
      <div>
      <div>
      <Link to="/AdminLandPage">  <img src={logo} alt="" className="img"/></Link>
       
        </div>
      
  
      <div className="sec">
      <p>Admin</p>
      
      </div>
    

      <div className="container_">
        <div className="one">
          <Link to="/SubjectPage" style={{textDecoration:"none",color:"beige"}}>

            <button class="button_" type="submit">

              Subjects
            </button>
          </Link>


        </div>
        <div className="two">
          <Link to="" style={{textDecoration:"none",color:"beige"}}>
            <button class="button_" type="submit">
              Student
            </button>
          </Link>

        </div>
        <div className="three">
          <Link to="" style={{textDecoration:"none",color:"beige"}}>
            <button class="button_" type="submit">
              Faculty
            </button>
          </Link>

        </div>

        <div className="four">
          <Link to="/SectionCreate" style={{textDecoration:"none",color:"beige"}}>
            <button class="button_" type="submit">
              Section
            </button>
          </Link>

        </div>
        </div>

        <div className="logout">
      <Link to="/logout" style={{textDecoration:"none",color:"beige" ,fontSize:3}}><p><i className="fas fa-sign-out-alt"></i> Logout</p></Link>
      
      </div>
</div>
      
    )}
       
export default AdminLandPage;