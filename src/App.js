import "./App.css";
import Header from "./components/pages/home/Header";
import Landing from "./components/pages/home/Landing";
import Stats from "./components/pages/home/Stats";
import Signup from "./components/pages/auth/Signup";
import Login from "./components/pages/auth/Login";
import DashBoard from "./components/pages/dashboard/DashBoard";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";

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
      <Switch>
        <Route path="/home">
          <Header onSignup={signupHandler} onLogin={loginHandler} />
        </Route>
        <Route path="/home">
          <Landing />
          <Stats />
        </Route>
        <Route path="/signup">
          <Header onSignup={signupHandler} onLogin={loginHandler} />
        </Route>
        <Route path="/signup">
          {" "}
          {/* <Signup hideSignup={signupHandler} /> */}
          <Signup />
        </Route>
        <Route path="/login">
          <Header onSignup={signupHandler} onLogin={loginHandler} />
        </Route>
        <Route path="/login">
          <Login /> {/* <Login hideLogin={loginHandler} /> */}
        </Route>
        <Route path="/dashboard">
          <DashBoard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
