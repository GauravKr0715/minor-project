
import React from 'react'
import Slide from "./components/Slide"
import LandingSpage from "./components/Students/Landingpage"
import StudentLogin from './components/Login/S_Login';
import FacultyLogin from './components/Login/F_Login';
import AdminLogin from './components/Login/A_Login';

import {BrowserRouter as Router , Switch , Route} from "react-router-dom"

function App() {
  return (
    <div>
    <Router>
      
      
      <Switch>
     
       <Route path="/" exact component={Slide}/>      
       <Route path="/LandingSpage" exact component={LandingSpage}/>    
       <Route path="/StudentLogin" component={StudentLogin} />
       <Route path="/FacultyLogin" component={FacultyLogin} />
       <Route path="/AdminLogin" component={AdminLogin} />
       
       
      </Switch>
      </Router>
      
    </div>
  )
}

export default App

