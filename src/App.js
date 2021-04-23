import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { Helmet } from "react-helmet";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Logout from "./pages/Logout";

export default function App() {
  let [auth, setAuth] = React.useState(
    localStorage.getItem("user") ? true : false
  );
  const GuardedRoute = ({ component: Component, auth, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
  return (
    <Router>
      <Sidebar />
      <Switch>
        <GuardedRoute
          exact
          path="/"
          component={() => (
            <>
              <Home />
              <Helmet>
                <meta charSet="utf-8" />
                <title>Anasayfa</title>
              </Helmet>
            </>
          )}
          auth={auth}
        ></GuardedRoute>
        <GuardedRoute
          path="/register"
          component={() => (
            <>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Register</title>
              </Helmet>
              <Register />
            </>
          )}
          auth={!auth}
        ></GuardedRoute>
        <GuardedRoute
          path="/login"
          component={() => (
            <>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Log In</title>
              </Helmet>
              <Login />
            </>
          )}
          auth={!auth}
        ></GuardedRoute>

        <GuardedRoute
          path="/forgotpassword"
          component={() => (
            <>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Forgot Password</title>
              </Helmet>
              <ForgotPassword />
            </>
          )}
          auth={!auth}
        />

        <GuardedRoute
          path="/logout"
          component={() => (
            <>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Logging Out</title>
              </Helmet>
              <Logout />
            </>
          )}
          auth={auth}
        />
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
