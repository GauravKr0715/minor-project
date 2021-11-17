import React ,{useState, useEffect} from 'react'
import Sideview from '../sideview'
import "./SectionCreate.css"
import { Link } from 'react-router-dom';

function SectionFinal() {

    const [selectedStudents, setSelectedStudents] = useState([]);
    useEffect(() => {

    }, [selectedStudents]);

    const [students, setStudents] = useState([
        {
            id: 101,
            name: 'Akshaya',
            isSelected: false
        },
        {
            id: 102,
            name: 'Gaurav',
            isSelected: false
        },
        {
            id: 103,
            name: 'Akshay',
            isSelected: false
        },
        {
            id: 104,
            name: 'Pooja',
            isSelected: false
        },
    ]);
    const checkIfStudentExists = (given_id) => {
        return selectedStudents.some(s => s.id == given_id);
    }
    const[Name,setName]=useState("false")
    return (
       
        <div>
        <Sideview/> 
        
        <div className="sec">
        <p>Section Creation</p>
        
        </div>
        <div className="frames">
        <div className="ta">
           <div className="btn-1"><Link to="/SectionTable" style={{textDecoration:"none",color:"beige"}} >Back</Link></div>
           <div className="btn-2"><Link to="/SectionFinal" style={{textDecoration:"none",color:"beige"}} >Save</Link></div>
           </div>
           </div>

        <div className="frame">
        <div className="frame-1">
           <div className="check">
             <input type="checkbox" id="ch" />

            <input type="text" placeholder="Starting Roll no...." id="S" />
            <input type="text" placeholder="Starting Roll no...." id="E" />

           
           </div>
           <div className="space">
           <ul>
           {
               students && students.map((student) => (
                <li> <input type="checkbox" id="ch" checked={student.isSelected} onChange={(e)=>{
                    if(e.target.checked) {
                        // add this student to the selected list
                        let new_array = [...selectedStudents, student];
                        setSelectedStudents(new_array)
                        student.isSelected = true;
                    } else {
                        // remove this studenet from the selected list
                        let new_array = selectedStudents.filter(s => s.id != student.id);
                        setSelectedStudents(new_array);
                        student.isSelected = false;
                    }
                }}/>   <p>{student.name}</p></li>
                ))
            }
     
           </ul>
           
           </div>
        </div>
        <div className="frame-2">
        <div className="f">
        <br></br>
        <ul style={{listStyle:"none" }}>
        {
            selectedStudents && selectedStudents.map((student) => (                
             <li >
             <div style={{ display:"flex", flexDirection:"row"}} className="div">
               <p>{student.name}</p>
             
             <button onClick={() => {
                let new_array = selectedStudents.filter(s => s.id != student.id);
                setSelectedStudents(new_array);
                students.filter(s => s.id == student.id)[0].isSelected = false;
             }}>Delete</button>
             </div>
             </li>
             ))
         }
  
        </ul>
        </div>
        
        </div>
        </div>
      
        
        </div>
    )
}

export default SectionFinal
