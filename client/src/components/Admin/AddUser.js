import React, { Component } from "react";
import Select from 'react-select';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Subject.css"

const F_names = [
    { label: "Albania", value: 355 },
    { label: "Argentina", value: 54 },
    { label: "Austria", value: 43 },
    { label: "Cocos Islands", value: 61 },
    { label: "Kuwait", value: 965 },
    { label: "Sweden", value: 46 },
    { label: "Venezuela", value: 58 }
  ];


export default class AddUser extends Component {
    state = {
        Id: null,
        Subject: null,
        Faculty: null
    };
    handleIdChange = (event) => {
        this.setState({
         Id: event.target.value
        });
    };
    handleSubjectChange = (event) => {
        this.setState({
            Subject: event.target.value
        });
    }
    handleFacultyChange = (event) => {
        this.setState({
            Faculty: event.target.value
        });
    };
    handleToDoSubmit = (event) => {
        event.preventDefault();
        // event.target.reset();
        // const data  = event.target,
        // newTodo ={

        // }
        this.props.onAdd({
            Id: this.state.Id,
            Subject: this.state.Subject,
            Faculty: this.state.Faculty,
           
            
        
        }) ;

       
        
        this.setState({
            Id: null,
            Subject: null,
            Faculty: null
        });
    };
    
    render() {
        return (
            <div>
                <h3>
                    {/* Add ToDo */}
                </h3>
                <form onSubmit={this.handleToDoSubmit}>
                    <table>
                        <td>
                    <div className="subName" >
                        <input value={this.state.Subject} onChange={this.handleSubjectChange} className="form-control" placeholder="Subject Name " />
                    </div>
                    </td>
                    {/* <div className="form-group" >
                        <input value={this.state.Title} onChange={this.handleTitleChange} className="form-control" placeholder="Faculty Name " />
                    </div> */}
                    <td>
                    <div className="facName">
         
                   <Select value={this.state.Faculty} onChange={this.handleFacultyChange} className="form-control" placeholder="Faculty Name " options={F_names} />
                    </div>
          
          </td>
          {/* <div className="col-md-4"></div> */}
                    {/* <div className="form-group">
                        <select value={this.state.Status} onChange={this.handleStatusChange}  className="form-control" >
                            <option value="Done" >Done</option>
                            <option value="Pending" >Pending</option>
                        </select>
                    </div> */}
                    <div className="plus_btn">
                    <button type="submit" className="btn-primary">
                    <i class="fas fa-plus-square" ></i>
                             
                               </button>
                               </div>
                 
                    {/* <button type="submit" className="form-control btn btn-primary" >Add Todo</button> */}
                </table>
                </form>
            </div>
        );
    }
}



// import React,{ Component } from 'react';

// class AddUser extends Component{

//     state = {
//         name:null,
//         age:null,
//         isEditing:false
//     }
//     //call addUser (App.js)
//     handleSubmit = (e) => {
//         e.preventDefault();
//         this.props.addUser(this.state);  
        // e.target.reset();

//     }
//     // update state
//     updateState = (e) => {
//         this.setState({
            // [e.target.name]:e.target.value,
//         });
//     }

//     render(){
//         return(
//             <div className="row">
//                 <form onSubmit={this.handleSubmit}>
//                     <div className="input-field col s4">
//                         <input name="Sname" autoComplete="off" placeholder="Enter Subject Name" required type="text" onChange={ this.updateState} />
//                     </div>
//                     <div className="input-field col s2">
//                         <input name="Fname" autoComplete="off" type="" required placeholder="Enter Faculty Name" onChange={ this.updateState } />
//                         <select name="Fname"> </select>
//                         <option value="YTFHT">FYHFT</option>
//                         <option value="YTFHT">YJTTF</option>

//                     </div>
//                     <div className="input-field col s2">
//                         <input type="submit" value="Add +" className="btn blue"/>
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }
// export default AddUser;