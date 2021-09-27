import React from 'react'
import "./Landingpage.css"
import { Link } from "react-router-dom";
function Landingpage() {
    
    return (
        <div>
        <div className="container">
           <div className="name">
               <p className="name1">Student <br />
                  Akshaya R</p>
           </div>
           <div className="logout">
              <p className="name2">Logout <i class="fas fa-sign-out-alt"></i></p>
           </div>
          <table className="tab">
            <thead>
         <tr>
         <th>Timings</th>
         <th><h4>09:10-10:05</h4>
         </th>
         <th><h4>10:05-11:00</h4>
         </th>
         <th style={{backgroundColor:"rgb(170, 170, 59)"}}><h4>            </h4>
         </th>
         <th><h4>11:30-12:25</h4>
         </th>
         <th><h4>12:25-01:20</h4>
         </th>
         <th><h4>01:20-02:15</h4>
         </th>
         <th><h4>02:15-03:10</h4>
         </th>
         </tr>
         </thead>
         <tbody>
         <tr>
         <td><p style={{fontSize:20}}>Schedule</p></td>
         <td>
            <p>ADBA <br></br>
               Lecture<br></br>
               Mr.Mohit Dayal 
            </p>
            </td>
            <td>
            <p>WC<br></br>
               Lecture<br></br>
               Dr. Meenakshi 
            </p>
            </td>
            <td style={{backgroundColor:"rgb(170, 170, 59)"}}>
            <p > <br></br>
               Lunch Break<br></br>
               
            </p>
            </td>
            <td>
            <p>ACN <br></br>
               LAB<br></br>
               Mr.Ujjval Jain
            </p>
            </td>
            <td>
            <p>ACN <br></br>
               LAB<br></br>
               Mr.Ujjval Jain
            </p>
            </td>
            <td>
            <p>CNS <br></br>
               Lecture<br></br>
               Ms.Kajal Kaul
            </p>
            </td>
            <td>
            <p>
                 No Lecture
               <br></br>
                
            </p>
         </td>
         </tr>
</tbody>
          </table>

          <div className="tl">
               <div className="con">
                 <p>
            
                 
</p>
               </div>
          </div>

        
          <div className="Nav1">
               <div className="Opt1">
                   <ul style={{listStyleType:"none"}}>
                      <Link to="/Myprofile"  style={{textDecoration:"none",color:"black"}}> <li>My Profile</li></Link>
                      <Link  to="/Assignments" style={{textDecoration:"none",color:"black"}} > <li>My Attendence</li></Link>
                      <Link to="/Timetable" style={{textDecoration:"none",color:"black"}}> <li>Time Table</li></Link>
                      <Link to="/Onlineclasses" style={{textDecoration:"none",color:"black"}}><li>Online Classes</li></Link>
                   </ul>
               </div>
          </div>

          <div className="Nav2">
               <div className="Opt2">
               <ul style={{listStyleType:"none"}}>
                       
               <Link to="/Assignments" style={{textDecoration:"none",color:"black"}}>  <li>Assignments</li></Link>
               <Link to="/Notes" style={{textDecoration:"none",color:"black"}}>  <li>Notes</li></Link>
               <Link to="/Tests" style={{textDecoration:"none",color:"black"}}>  <li>Tests</li></Link>
               <Link to="/Queries" style={{textDecoration:"none",color:"black"}}>  <li>Queries</li></Link>
                   </ul>
               </div>
          </div>

        </div>

        </div>
    )
}

export default Landingpage
