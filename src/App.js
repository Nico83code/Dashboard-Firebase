import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import Postboard from "./Components/Dashboard/Postboard";
import PostDetails from "./Components/Posts/PostDetails";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import CreatePost from "./Components/Posts/CreatePost";
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
          <Route path="/Postboard" component={Postboard} />
          <Route path="/post/:id" component={PostDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreatePost} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
