import React from "react";
/* import { useHistory } from "react-router-dom"; */

import "./AdminLandPage.css";
import { Link } from "react-router-dom";
// import logo from "../../assets/image/logo.jpg";





function AdminLandPage() {
 
    return (
      <div>
      <div className="top-nav">
        
       
         <div>
          {/* <Link to="/Landingpage">  <img src={logo} alt="" className="img"/></Link>
            <p>Admin</p> */}
            
            </div>
      </div>
      <div className="container_">
        <div className="one">
          <Link to="/SubjectPage">

            <button class="button_" type="submit">

              Subject
            </button>
          </Link>


        </div>
        <div className="two">
          <Link to="">
            <button class="button_" type="submit">
              Student
            </button>
          </Link>

        </div>
        <div className="three">
          <Link to="">
            <button class="button_" type="submit">
              Faculty
            </button>
          </Link>

        </div>

        <div className="four">
          <Link to="">
            <button class="button_" type="submit">
              Section
            </button>
          </Link>

        </div>
        </div>
</div>
      
    )}
       
export default AdminLandPage;