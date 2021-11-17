import React from 'react'
import { Link } from 'react-router-dom';
import Sideview from '../sideview'
import Dynamics from '../Subject/Dynamics';
import "../Section/SectionCreate.css"

function Subject() {
   
    return (
        <div>
            <Sideview/> 

            <div className="sec">
            <p>Subjects Creation</p>
            
            </div>

            <div className="options">

            
            <div className="twoss">
                <label htmlFor="semester">Semester:  </label>
                <select>  
                   <option value = "Ist sem"> Ist Semester
                     </option>  
                   <option value = "IInd sem"> IInd Semester   
                     </option>  
                   <option value = "IIIrd sem"> IIIrd Semester
                     </option>  
                   <option value = "IVth sem"> IVth Semester                         </option>  
                     <option value = "IVth sem"> Vth Semester 
                     </option>  
                     <option value = "IVth sem"> VIth Semester
                     </option>  
                     <option value = "IVth sem"> VIIth Semester
                     </option>  
                     <option value = "IVth sem"> VIIIth Semester  
                     </option>  
                </select>  
            </div>



            <div className="fourss">
            <label htmlFor="Department">Department: </label>
            <select>  
                   <option value = "CSE"> CSE
                     </option>  
                   <option value = "IT">  IT
                     </option>  
                   <option value = "ECE"> ECE
                     </option>  
                   <option value = "EEE"> EEE  
                     </option>  
                     <option value = "MECH"> MECH 
                     </option>
                     <option value = "CIVIL"> CIVIL
                     </option>
                     <option value = "BBA"> BBA 
                     </option>
                     <option value = "MBA"> MBA  
                     </option>
                </select>
            </div>
            </div>

            <div className="dyn">
              
                <Dynamics/>
                        
            </div>

            <div ><button className="nextone">Save</button></div>

        </div>
    )
}

export default Subject
