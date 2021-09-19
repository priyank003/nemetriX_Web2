import "./App.css";
import Header from "./components/pages/home/Header";
import Landing from "./components/pages/home/Landing";
import Signup from "./components/pages/auth/Signup";
import Login from "./components/pages/auth/Login";
import { useState } from "react";

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

      {showSignup ? (
        <Signup hideSignup={signupHandler} />
      ) : showLogin ? (
        <Login hideLogin={loginHandler} />
      ) : (
        <Landing />
      )}
    </div>
  );
}

export default App;
