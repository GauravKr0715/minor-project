import React , {useState} from 'react'
import Sideview from '../sideview'
import Modal from '@material-ui/core/Modal';
import { Link } from 'react-router-dom'
import "./SectionCreate.css";
import ClassModal from'./ClassModal';

function SectionTable() {
   const [open, setOpen] = React.useState(false);
   const [selectedSlot,setSelectedSlot]=useState(null);
   const handleClose = () => {
     setOpen(false);
   };
     
   const handleOpen = () => {
     setOpen(true);
   };

   const [time_table, setTimeTable] = useState([
      [
        { "slot_id": "D1S1", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D1S2", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D1S3", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D1S4", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D1S5", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D1S6", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
      ], [
        { "slot_id": "D2S1", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D2S2", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D2S3", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D2S4", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D2S5", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D2S6", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
      ], [
        { "slot_id": "D3S1", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D3S2", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D3S3", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D3S4", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D3S5", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D3S6", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
      ], [
        { "slot_id": "D4S1", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D4S2", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D4S3", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D4S4", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D4S5", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D4S6", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
      ], [
        { "slot_id": "D5S1", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D5S2", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D5S3", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D5S4", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D5S5", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D5S6", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
      ], [
        { "slot_id": "D6S1", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D6S2", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D6S3", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D6S4", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D6S5", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
        { "slot_id": "D6S6", "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" },
      ]
    ]);

    const [options, setOptions] = useState([
       "class1",
       "class2",
       "class3"
   ]);

   //  const [options, setOptions] = useState([
   //     {
   //        class_id: "101",
   //        subject_id: "201",
   //        subject_name: "Subject 1",
   //        subject_type: 1,
   //        faculty_id: "301",
   //        faculty_name: "Faculty 1"
   //     },{
   //       class_id: "102",
   //       subject_id: "202",
   //       subject_name: "Subject 2",
   //       subject_type: 2,
   //       faculty_id: "302",
   //       faculty_name: "Faculty 2"
   //    },{
   //       class_id: "ABC123",
   //       subject_id: "UND123",
   //       subject_name: "Unalloted",
   //       subject_type: 0,
   //       faculty_id: "UND123",
   //       faculty_name: "ABCXYZ"
   //    },
   //  ]);

    console.log(options);

   //  const [classes, setClasses] = useState([
   //    { "class_id": "101", "subject_id": "201", "subject_name": "Subject 1", "subject_type": 1, "faculty_id": "301", "faculty_name": "Faculty 1" },
   //    { "class_id": "102", "subject_id": "202", "subject_name": "Subject 2", "subject_type": 2, "faculty_id": "302", "faculty_name": "Faculty 2" },
   //    { "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" }
   //  ])

    const[today,setDays]=useState(["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"])
       
    const [Tnames,setTnames]=useState([
   [{
      Subject:"ADBA",
      Faculty:"Mr.Mohit Dayal",
      Type:"Lecture"
}],[{
      Subject:"WC",
      Faculty:"Dr.Meenakshi",
      Type:"Lecture"
}],[{
      Subject:"ACN",
      Faculty:"Mr.Ujjwal Jain",
      Type:"Lab"
}],

   [{
      Subject:"ACN",
      Faculty:"Mr.Ujjwal Jain",
      Type:"Lab"
}],[{
      Subject:"CNS",
      Faculty:"Ms.Kajal Kaul",
      Type:"Lecture"
}],[{
      Subject:"No Lecture",
      Faculty:" ",
      Type:" "
}]
])

const getClassString = (slot) => {
   return (
      <div>
         <p>{slot.subject_name}</p><br/>
         <p>{slot.subject_type}</p><br/>
         <p>{slot.faculty_name}</p>
      </div>
   )
}

// let momentFunc=(idx)=>{
//    days.map((day)=>{
//    if(idx === day.idx){
//       return day.day
//    }
// })
// }
    
    return (
       <div>
        <div>
        <Sideview/>

        <div className="sec">
        <p>Section Creation</p>
        
        </div>

        <div className="dyns">
           <table className="table">
             <thead>
               <tr>
               <th>Days/Time</th>
               <th><h4>09:10-10:05</h4></th>
               <th><h4>10:05-11:00</h4></th>
               <th style={{backgroundColor:"rgb(161, 161, 161)"}}><h4></h4></th>
               <th><h4>11:30-12:25</h4></th>
               <th><h4>12:25-01:20</h4></th>
               <th><h4>01:20-02:15</h4></th>
               <th><h4>02:15-03:10</h4></th>
            </tr>
            </thead>
             
             <tbody>
             {
                  time_table.map((day, idx) => (
                     <tr>
                     <td><h4 >{today[idx]}</h4></td>
                     {
                        day.map((slot, idx) => (
                           <td onClick={() => {
                              setSelectedSlot(slot.slot_id)
                              handleOpen()
                              // openEditModal(slot)
                           }}>
                            <h5>Add ➕</h5>
                           </td>
                           
                        ))
                     }
                     </tr>
                  ))
               }
</tbody> 
            
            
           
           </table>
           <div className="ta">
           <div className="btn-1"><Link to="/SectionCreate" style={{textDecoration:"none",color:"beige"}} >Back</Link></div>
           <div className="btn-2"><Link to="/SectionFinal" style={{textDecoration:"none",color:"beige"}} >Next</Link></div>
           </div>
        
        </div>
        
        </div>
      <ClassModal open={open}
      onClose={() => handleClose()}/>
      </div>

    
    )
      
}

export default SectionTable;
