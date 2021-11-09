import React from 'react'
import { Link } from 'react-router-dom';
import Sideview from '../sideview'
import Dynamic from './Dynamic';
import "./SectionCreate.css"

function SectionCreate() {
    let minOffset = 0, maxOffset = 10;
    let thisYear = (new Date()).getFullYear();
    let allYears = [];
    for(let x = 0; x <= maxOffset; x++) {
        allYears.push(thisYear + x)
    }

    const yearList = allYears.map((x) => {return(<option key={x}>{x}</option>)});
    return (
        <div>
            <Sideview/> 

            <div className="sec">
            <p>Section</p>
            
            </div>

            <div className="option">

            <div className="ones">
            <label htmlFor="YOP">YoP:  </label>
            <select>
                {yearList}
            </select>
            </div>

            <div className="twos">
                <label htmlFor="year">Year:  </label>
                <select>  
                   <option value = "Ist Year"> Ist Year
                     </option>  
                   <option value = "IInd Year"> IInd Year   
                     </option>  
                   <option value = "IIIrd Year"> IIIrd Year  
                     </option>  
                   <option value = "IVth Year"> IVth Year  
                     </option>  
                </select>  
            </div>


            <div className="threes">
            <label htmlFor="Name">Name:  </label>
            <input type="text" placeholder="Section Name..." />
            </div>

            <div className="fours">
            <label htmlFor="Branch">Branch: </label>
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
              
                <Dynamic/>
                        
            </div>

            <div className="nextone"><Link to="/SectionTable" style={{textDecoration:"none",color:"beige"}} >Next</Link></div>

        </div>
    )
}

export default SectionCreate
