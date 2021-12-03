
import React from 'react'
import "./App.css"
// import ReactDOM from 'react-dom'
import Slide from "./components/Slide"
import Landingpage from "./components/Students/Landingpage/Landingpage"
import StudentLogin from './components/login/S_Login';
import FacultyLogin from './components/login/F_Login';
import FacultyHome from './components/Faculty/Home';
import FacultyFeed from './components/Faculty/Feed';
import FacultyAttendance from './components/Faculty/Attendance';
import StudentHome from './components/Students/Home';
import StudentFeed from './components/Students/Feed';
import StudentAttendance from './components/Students/Attendance';
import AdminLogin from './components/login/A_Login';
import SectionCreate from './components/Admin/Section/SectionCreate';
import SectionTable from './components/Admin/Section/SectionTable';
import SectionFinal from "./components/Admin/Section/SectionFinal";
import AdminLandPage from "./components/Admin/AdminLandPage";
import SubjectPage from './components/Admin/Subject/Subject';
import AdminStudent from "./components/Admin/student/Student"
import AdminFaculty from "./components/Admin/faculty/Faculty"
import FacultyTT from "./components/Faculty/timetable"
import StudentTT from "./components/Students/Timetable"
import FacultyProfile from "./components/Faculty/profile"
import StudentProfile from "./components/Students/profile"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

/* import { library } from "@fontawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fontawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
library.add(faTrash, faEdit, faPlus); */


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

function App() {
  return (
    <div>
      <Router>


        <Switch>

          <Route path="/" exact component={Slide} />

          <Route path="/faculty"
            render={({ match: { url } }) => (
              <>
                <Route path={`${url}/login`} exact >
                  {/* <Authorization /> */}
                  <FacultyLogin />
                </Route>
                <Route path={`${url}/`} exact >
                  {/* <Authorization /> */}
                  <FacultyHome />
                </Route>
                <Route path={`${url}/feed`} exact >
                  {/* <Authorization /> */}
                  <FacultyFeed />
                </Route>
                <Route path={`${url}/attendance`} exact >
                  {/* <Authorization /> */}
                  <FacultyAttendance />
                </Route>
                <Route path={`${url}/time-table`} exact >
                  {/* <Authorization /> */}
                  <FacultyTT />
                </Route>
                <Route path={`${url}/profile`} exact >
                  {/* <Authorization /> */}
                  <FacultyProfile />
                </Route>
              </>
            )}>
          </Route>

          <Route path="/student"
          render={({ match: { url } }) => (
            <>
              <Route path={`${url}/login`} exact >
                {/* <Authorization /> */}
                <StudentLogin />
              </Route>
              <Route path={`${url}/`} exact >
                {/* <Authorization /> */}
                <StudentHome />
              </Route>
              <Route path={`${url}/feed`} exact >
                {/* <Authorization /> */}
                <StudentFeed />
              </Route>
              <Route path={`${url}/attendance`} exact >
                {/* <Authorization /> */}
                <StudentAttendance />
              </Route>
              <Route path={`${url}/time-table`} exact >
                  {/* <Authorization /> */}
                  <StudentTT />
                </Route>
                <Route path={`${url}/profile`} exact >
                {/* <Authorization /> */}
                <StudentProfile />
              </Route>
            </>
          )}>
        </Route>

          <Route path="/SLandingpage" exact component={Landingpage} />
          <Route path="/StudentLogin" component={StudentLogin} />
          <Route path="/faculty/login" component={FacultyLogin} />
          <Route path="/faculty/" component={FacultyHome} />
          <Route path="/student/" component={StudentHome} />
          <Route path="/AdminLogin" component={AdminLogin} />
          <Route path="/SectionCreate" component={SectionCreate} />
          <Route path="/SectionTable" component={SectionTable} />
          <Route path="/SectionFinal" exact component={SectionFinal} />
          <Route path="/SubjectPage" exact component={SubjectPage} />
          <Route path="/AdminLandPage" exact component={AdminLandPage} />
          <Route path="/AdminStudent" exact component={AdminStudent} />
          <Route path="/AdminFaculty" exact component={AdminFaculty} />
          <Route path="/FacultyTT" exact component={FacultyTT} />



        </Switch>
      </Router>

    </div>
  )
}

export default App

