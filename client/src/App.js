
import React from 'react'

import Slide from "./components/Slide"
import StudentLogin from './components/Student_Pages/S_Login';
import FacultyLogin from './components/Faculty_Pages/F_Login';
import AdminLogin from './components/Admin_Pages/A_Login';

import {BrowserRouter as Router , Switch , Route} from "react-router-dom"

function App() {
  return (
    <div>
    <Router>
      
      
      <Switch>
     
       <Route path="/" exact component={Slide}/>
       <Route path="/Student_Pages" component={StudentLogin} />
       <Route path="/Faculty_Pages" component={FacultyLogin} />
       <Route path="/Admin_Pages" component={AdminLogin} />
       
       
      </Switch>
      </Router>
      
    </div>
  )
}

export default App

