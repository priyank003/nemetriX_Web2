import "./App.css";
import Header from "./components/pages/home/Header";
import Landing from "./components/pages/home/Landing";

import Signup from "./components/pages/auth/Signup";
import Login from "./components/pages/auth/Login";
import DashBoard from "./components/pages/dashboard/DashBoard";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/pages/home/Footer";
import Highlights from "./components/pages/home/Highlights";
import { useSelector, useDispatch } from "react-redux";
import store from "./components/store";
function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const signupHandler = (bool) => {
    bool ? setShowSignup(bool) : setShowSignup(false);
  };

  const loginHandler = (bool) => {
    bool ? setShowLogin(bool) : setShowLogin(false);
  };

  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuth);
  return (
    <div>
      <div className="App">
        <Switch>
          <Route path="/signup">
            <Header onSignup={signupHandler} onLogin={loginHandler} />
            <Signup />
          </Route>

          <Route path="/login">
            <Header onSignup={signupHandler} onLogin={loginHandler} />
            <Login />
          </Route>

          <Route path="/dashboard">
            <DashBoard />
          </Route>

          <Route path="/">
            <Header onSignup={signupHandler} onLogin={loginHandler} />
            <Landing />

            <Highlights />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
