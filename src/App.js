import "./App.css";
import Header from "./components/pages/home/Header";
import Landing from "./components/pages/home/Landing";
import Stats from "./components/pages/home/Stats";
import Signup from "./components/pages/auth/Signup";
import Login from "./components/pages/auth/Login";
import DashBoard from "./components/pages/dashboard/DashBoard";
import { useState } from "react";
import { Route } from "react-router-dom";

function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const signupHandler = (bool) => {
    bool ? setShowSignup(bool) : setShowSignup(false);
  };

  const loginHandler = (bool) => {
    bool ? setShowLogin(bool) : setShowLogin(false);
  };

  return (
    <div className="App">
      <Header onSignup={signupHandler} onLogin={loginHandler} />
      <Route path="/home">
        {/* {showSignup ? (
          <Signup hideSignup={signupHandler} />
        ) : showLogin ? (
          <Login hideLogin={loginHandler} />
        ) : (
          <Landing />
        )} */}
        <Landing />
        <Stats />
      </Route>
      <Route path="/signup">
        {" "}
        <Signup hideSignup={signupHandler} />
      </Route>
      <Route path="/login">
        {" "}
        <Login hideLogin={loginHandler} />
      </Route>
      <Route path="/dashboard">
        <DashBoard />
      </Route>
    </div>
  );
}

export default App;
