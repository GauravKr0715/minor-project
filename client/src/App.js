
import React from 'react'

import Slide from "./components/Slide"

import {BrowserRouter as Router , Switch , Route} from "react-router-dom"

function App() {
  return (
    <div>
    <Router>
      
      
      <Switch>
     
       <Route path="/" exact component={Slide}/>
    
       
       
      </Switch>
      </Router>
      
    </div>
  )
}

export default App

