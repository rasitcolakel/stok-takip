import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Helmet } from "react-helmet";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
          <Helmet>
            <meta charSet="utf-8" />
            <title>Anasayfa</title>
          </Helmet>
        </Route>
        <Route path="/register">
          <Register />
          <Helmet>
            <meta charSet="utf-8" />
            <title>Register</title>
          </Helmet>
        </Route>
        <Route path="/login">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Log In</title>
          </Helmet>
          <Login />
        </Route>
        <Route path="/forgotpassword">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Forgot Password</title>
          </Helmet>
          <ForgotPassword />
        </Route>
        <Route path="*">
          <Helmet>
            <meta charSet="utf-8" />
            <title>404 Not Found</title>
          </Helmet>
          <div>No Match 404</div>
        </Route>
      </Switch>
    </Router>
  );
}
