import React from "react";
import "./App.css";
import Header from "./components/pages/home/Header";
import Landing from "./components/pages/home/Landing";

import Signup from "./components/pages/auth/Signup";
import Login from "./components/pages/auth/Login";
import DashBoard from "./components/pages/dashboard/DashBoard";

import { Switch, Route } from "react-router-dom";
import Footer from "./components/pages/home/Footer";
import Highlights from "./components/pages/home/Highlights";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect } from "react";
function App() {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }
  const { width } = useWindowDimensions();

  return (
    <div>
      <div className="App">
        <Switch>
          <Route path="/signup">
            <Header />
            <Signup />
          </Route>

          <Route path="/login">
            <Header />
            <Login />
          </Route>

          <Route path="/dashboard">
            <DashBoard />
          </Route>

          <Route path="/">
            <Header />
            <Landing />

            <Highlights />
            <Footer/>
            {width < 460 ? <Footer /> : ""}
          </Route>
        </Switch>
      </div>
     
    </div>
  );
}

export default App;
