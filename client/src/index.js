
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import DevelopersList from "views/IndexSections/unit/DevelopersList";
import Dashboard from "views/IndexSections/unit/Dashboard";
import EditProfile from "views/IndexSections/unit/EditProfile";
import AddExperience from "views/IndexSections/unit/AddExperience";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Index {...props} />} />
      <Route
        path="/landing-page"
        exact
        render={props => <Landing {...props} />}
      />
      <Route path="/login-page" exact render={props => <Login {...props} />} />
      <Route
        path="/profile-page"
        exact
        render={props => <Profile {...props} />}
      />
      <Route
        path="/register-page"
        exact
        render={props => <Register {...props} />}
      />
      <Route
        path='/developers'
        exact
        render={props=> <DevelopersList {...props}/>}
      />
      <Route
        path='/dashboard'
        exact
        render={props=> <Dashboard {...props}/>}
      />
      <Route
        path='/edit-profile'
        exact
        render={props=> <EditProfile {...props}/>}
      />
      <Route
        path='/add-experience'
        exact
        render={props=> <AddExperience {...props}/>}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
