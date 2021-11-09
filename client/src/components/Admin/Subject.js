import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddUser from './AddUser';
import Sidebar from '../Students/sidebar';


// import { DropDown } from '../Admin/Dropdown/DropDown.js'; 
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';



export default class Subject extends Component {
state = {
   todos: [
     { Id: '1', Subject: 'Push your code to github', Faculty:'ddgf' },
     { Id: '2', Subject: 'Email to your manager', Faculty: 'gvhg' }
   ]
};
deleteToDo = (todo) => {
  const filteredItems = this.state.todos.filter(x => x.Id !== todo.Id);
  this.setState({
      todos: filteredItems
  });
};
addToDo = (todo) => {
  this.setState({
      todos: [...this.state.todos, todo]
  });
};
editToDo = (x) => {
  this.setState(state => ({
      todos: state.todos.map(todo => {
          if (todo.Id === x.Id) {
              return {
                  ...todo,
                  Faculty: todo.Faculty === "Done" ? "Pending" : "Done"
              };
          } else {
              return todo;
          }
      })
  }));
};
// addToDo = (todo) => {
//   this.setState({
//       todos: [...this.state.todos, todo]
//   });
// };
render() {
    return (
      
      <div className="container">
        <div className="time">
          <Sidebar/>
        {/* <div className="col-md-3"></div>
          <div className="col-md-6">
            <Select options={F_names} />
          </div>
          <div className="col-md-4"></div> */}
        {/* <DropDown /> */}
         <div className="tablediv">
           <AddUser onAdd ={this.addToDo}></AddUser>
             {/* <h2> TodoList </h2> */}
             <table className="table"  >
                   <thead>
                     <tr>
                        <th>Sr. No.</th>
                        <th>Subject Name</th>
                        <th>Faculty Name</th>
                        <th>Action</th>
                     </tr>
                   </thead>
                   <tbody>
                       {this.state.todos.map(x => {
                         return (
                              <tr key={x.Id}>
                              <td>{x.Id}</td>
                              <td>{x.Subject}</td>
                              <td style={{ color: x.Faculty === "Done" ? "green" : "red" }}>{x.Faculty}</td>
                              <td>
                                 <button className="btn btn-primary" onClick={() => this.deleteToDo(x)}><span>
                             <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
                              </span></button>
                              <button className="btn btn-primary" onClick={() => this.editToDo(x)}>
                                <span>
                              <FontAwesomeIcon icon="edit"></FontAwesomeIcon>
                                    </span>
                               </button>
                              </td>
                              </tr>
                          );
                       })}
                    </tbody>
                </table>
         </div> 
       </div>
      
    </div>
    );
  }
}



// import React, { Component } from 'react';
// import Users from './Users';
// import AddUser from './AddUser';

// class Subject extends Component{

//     // Default dummy data
//     state = {

//         users:[
//           {name:"Travis Jackson", age:18, isEditing:false},
//           {name:"Linda Moorhouse", age:22, isEditing:false},
//           {name:"Jeffrey Delgado", age:21, isEditing:false}
    
//         ]
//       }
//       // (newUser) is received from AddUser.js
//       addUser = (newUser) => {
//             let users = [...this.state.users, newUser];
//             this.setState({
//                 users
//             });     
//       }

//       // when press edit button
//       // (i) is received from Users.js
//       pressEditBtn = (i) => {
//         let users = this.state.users;
//         users[i].isEditing = true;
//         this.setState({
//             users
//         });
//       }

//       // (i, name, age) is received from Users.js
//       updateUser = (i, name, age) => {
//         let users = this.state.users;
//         users[i].name = name;
//         users[i].age = age;
//         users[i].isEditing = false;

//         this.setState({
//             users
//         });

//       }
//       // (i) is received from Users.js
//       pressDelete = (i) => {
//         let users = this.state.users.filter((u,index)=>{
//             return index !== i;
//         });
//         this.setState({
//             users
//         });
//       }

//     render(){
//         return(
//             <div className="contain">
//                 {/* <h1>CRUD with React CLI</h1> */}
//                 <Users allUsers={this.state.users} pressEditBtn={this.pressEditBtn} updateUser={this.updateUser} pressDelete={this.pressDelete} />
//                 <AddUser addUser={this.addUser}/>
//             </div>
//         );
//     }
// }

// export default Subject;
// import React from 'react';

// import "./Subject.css";
// import Sidebar from '../Students/sidebar';


// // class SubjectPage extends Component {

   
// // // }
// export default function SubjectPage() {
//    constructor(){
//       super();
//       this.state= {
//          subject_F_list : [{Subject_name:88, Faculty_name : 99}],
//          message: '',
//          newsubject_name: '',
//          newfaculty_name: ''


//       }
//    }
//    delete_rowlist = (subject_index) =>{
//       this.state.subject_F_list.splice(subject_index , 1); //a-b
//       this.setState({
//          subject_F_list : this.state.subject_F_list,
//          message: "Deleted info Successfully"
//       })

//    }
//    processSubject_name= (obj) =>{
//       this.setState({
//          newsubject_name : obj.target.value

//       })
//    }

//    processFaculty_name= (obj) =>{
//       this.setState({
//          newfaculty_name : obj.target.value

//       })
//    }
//    save = () =>{
//       var new_name ={Subject_name:this.newsubject_name,
//                      Faculty_name:this.newfaculty_name,

         
//       };
//       this.setState({
//          new_name : this.state.subject_F_list.concat(new_name),
//          message: "Added successfully",
//          newsubject_name:'',
//          newfaculty_name: ''
//       })

//    }


//    render(){
//       return(
//          <div className="container">
   
//             <div className="time">
//                <div className="col-lg-3">
//                   <input type = "text" className="form-control" value= {this.state.newsubject_name} onChange={this.processSubject_name}/>
//                   <label>Subject Name</label>

               
//                </div>
//                <div className="col-lg-3">
//                   <input type="text" className="form-control"  value= {this.state.newfaculty_name}onChange={this.processFaculty_name}/>
//                   <label>Faculty Name</label>

               
//                </div>
//                        <div className="col-lg-12 text-center"></div>
//                        <p className="text-primary text-center">{this.state.message}</p>
//                        <table className="table table-bordered">
//                           <thead>
//                              <tr>
//                                 <th>Sr. No.</th>
//                                 <th>Subject name</th>
//                                 <th>Faculty name</th>
//                                 <th>Action</th>
//                              </tr>
//                           </thead>
//                           <tbody>

//                              {
//                                 this.state.subject_F_list.map((subject_F_info , index) => {
//                                    return(
//                                       <tr key ={index}>
//                                       <td>{index}</td>
//                                       <td>{subject_F_info.Subject_name}</td>
//                                       <td>{subject_F_info.Faculty_name}</td>
//                                       <td>
//                                          <button onClick= {this.delete_rowlist.bind(this, index)} className="btn btn-danger btn-sm">Delete</button></td>

//                                       </tr>
//                                    )
//                                    }

//                                 )}
//                              }
//                           </tbody>


                  
//                        </table>

   
//                        </div>
                       
//                        </div>
//                        <div className="col-lg-3">
//                           <button className= "btn btn-primary"> Save </button>
               
                    
//                     </div>
//       )

                           
// }}