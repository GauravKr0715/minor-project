
import React from 'react'
import Slide from "./components/Slide"
import Landingpage from "./components/Students/Landingpage"
import StudentLogin from './components/Login/S_Login';
import FacultyLogin from './components/Login/F_Login';
import AdminLogin from './components/Login/A_Login';
import Assignments from "./components/Students/Assignments"
import Myattendence from "./components/Students/Myattendence"
import Myprofile from "./components/Students/Myprofile"
import Timetable from "./components/Students/Timetable"
import Onlineclasses from "./components/Students/Onlineclasses"
import Tests from "./components/Students/Tests"
import Notes from "./components/Students/Notes"
import Queries from "./components/Students/Queries"

import {BrowserRouter as Router , Switch , Route} from "react-router-dom"

function App() {
  return (
    <div>
    <Router>
      
      
      <Switch>
     
       <Route path="/" exact component={Slide}/>      
       <Route path="/Landingpage" exact component={Landingpage}/>    
       <Route path="/StudentLogin" component={StudentLogin} />
       <Route path="/FacultyLogin" component={FacultyLogin} />
       <Route path="/AdminLogin" component={AdminLogin} />
       <Route path="/Myprofile" component={Myprofile} />
       <Route path="/Myattendence" component={Myattendence} />
       <Route path="/Timetable" component={Timetable} />
       <Route path="/Onlineclasses" component={Onlineclasses} />
       <Route path="/Assignments" component={Assignments} />
       <Route path="/Tests" component={Tests} />
       <Route path="/Notes" component={Notes} />
       <Route path="/Queries" component={Queries} />
       
       
      </Switch>
      </Router>
      
    </div>
  )
}

export default App

