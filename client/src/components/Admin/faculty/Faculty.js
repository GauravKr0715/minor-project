import React from "react";
import {Link} from "react-router-dom";
function Faculty(){
    return (
        <div>
            <div>
                <p>
                    Faculty
                </p>
                <div className="getCsvFormat">
                  <Link to="" style={{textDecoration:"none",color:"beige"}}>
                   <button class="button_" type="submit">
                    Get Csv Format
                   </button>
                  </Link>

                 </div>

            </div>

            <div className="container_f">

                 <div className="new">
                      <Link to="" style={{textDecoration:"none",color:"beige"}}>

                       <button class="button_" type="submit">
                          New
                       </button>
                      </Link>

                 </div>

                 <div>    Or    </div>

            
                 <div className="bulkImport">
                    <Link to="" style={{textDecoration:"none",color:"beige"}}>
                     <button class="button_" type="submit">
                        Bulk Import
                     </button>
                    </Link>

                 </div>
          </div>

         </div>
        
    )}
    export default Faculty;