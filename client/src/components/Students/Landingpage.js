import React from 'react'
import "./Landingpage.css"
import Sidebar from './sidebar';
/* import { Link } from "react-router-dom";
import logo from "./img/logo.jpg"; */

function Landingpage() {
    
    return (
      
        <div>
        
        <div className="container">
       
        <Sidebar/>
         
          <table className="tab">
            <thead>
         <tr>
         <th>Timings</th>
         <th><h4>09:10-10:05</h4>
         </th>
         <th><h4>10:05-11:00</h4>
         </th>
         <th style={{backgroundColor:"rgb(161, 161, 161)"}}><h4>            </h4>
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
         <td><p style={{fontSize:20,fontWeight:"bold"}}>{new Date().toLocaleDateString("default", { weekday: 'long' }) }</p></td>
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
            <td style={{backgroundColor:"rgb(161, 161, 161)", color:"black",fontWeight:"bold"}}>
            <p > 
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

         <div className="time">
            
         </div>

        </div>
  
        </div>
    )
}

export default Landingpage
