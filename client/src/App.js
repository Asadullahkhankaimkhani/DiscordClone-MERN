import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

// Pages
import Login from "./pages/AuthPages/Login";
import Register from "./pages/AuthPages/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import AlertNotification from "./shared/components/AlertNotification";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/">
          <Redirect to="/dashboard" />
        </Route>
      </Switch>
      <AlertNotification />
    </Router>
  );
}

export default App;
