import React from "react";
import { useState } from "react";
import classes from "./Header.module.css";
import AIT from "../../../assets/logos/AIT black logo.png";
import Signup from "../auth/Signup";
const Header = (props) => {
  const signupHandler = () => {
    props.onSignup(true);
  };

  const loginHandler = () => {
    props.onLogin(true);
  };
  return (
    <div className={classes.header}>
      <div className={classes["header-container"]}>
        <div className={classes["header-brand"]}>
          <img src={AIT} alt="" />
          <h1>AIT Placement cell</h1>
        </div>
        <div className={classes["header-nav"]}>
          {/* <div className={classes["nav-links"]}>
            <a href="/">Home </a>
          </div> */}

          <div className={classes["nav-auth"]}>
            <button className={classes["auth-login"]} onClick={loginHandler}>
              LOG-IN
            </button>
            <button className={classes["auth-signup"]} onClick={signupHandler}>
              SIGN-UP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
