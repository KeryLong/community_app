import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import Login from "./components/auth/Login/Login";
import SignUp from "./components/auth/SignUp";
import Register from "./components/auth/register/Register";
import Reset from "./components/auth/reset/Reset";

import DashboardNN from "./components/DashboardNN/DashboardNN";
import Navbar from "./components/layout/Navbar";
import ProjectDetails from "./components/projects/ProjectDetails";
import CreateProject from "./components/projects/CreateProject";


function App() {
  return (
    
    <div className="app">
      
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/signin" component={SignIn } />
          <Route exact path="/login" component={Login } />
          <Route path="/" component={DashboardNN} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset" component={Reset} />
          
          <Route exact path="/project/:id" component={ProjectDetails} />
          <Route exact path="/createproject" component = {CreateProject} />
          
        </Switch>
      </Router>

    </div>
  );
}

export default App;
