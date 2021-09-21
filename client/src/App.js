
import React from 'react'

import Slide from "./components/Slide"
import StudentLogin from "./components/login/StudentLogin"

import {BrowserRouter as Router , Switch , Route} from "react-router-dom"

function App() {
  return (
    <div>
    <Router>
      <Switch>
       <Route path="/" exact component={Slide}/>
       <Route path="/StudentLogin" exact component={StudentLogin}/>
    
       
       
      </Switch>
      </Router>
      
    </div>
  )
}

export default App

