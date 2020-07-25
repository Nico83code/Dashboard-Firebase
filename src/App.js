import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProjectDetails from "./Components/Projects/ProjectDetails";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import CreateProject from "./Components/Projects/CreateProject";
import DashboardOverview from "./Components/Dashboard/DashboardOverview";
import Profile from "./Components/Dashboard/Profile";
import ListOverview from "./Components/ListView/ListOverview";
import StudentDetail from "./Components/Student/StudentDetail";
import Students from "./Components/Student/Students";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={DashboardOverview} />
          <Route path="/listoverview" component={ListOverview} />
          <Route path="/profile" component={Profile} />
          <Route path="/Students" exact component={Students} />
          <Route path="/Students/:id" component={StudentDetail} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
