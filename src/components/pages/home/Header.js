import React from "react";
import { useState } from "react";
import classes from "./Header.module.css";
import AIT from "../../../assets/logos/AIT black logo.png";
import Signup from "../auth/Signup";
import { Link } from "react-router-dom";
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
        <Link
          style={{
            textDecoration: "none",
          }}
          to="/"
        >
          <div className={classes["header-brand"]}>
            <img src={AIT} alt="" />
            <h1>AIT Placement cell</h1>
          </div>
        </Link>

        <div className={classes["header-nav"]}>
          <div className={classes["nav-auth"]}>
            <Link to="/login">
              <button className={classes["auth-login"]} onClick={loginHandler}>
                LOG-IN
              </button>
            </Link>
            <Link to="/signup">
              <button
                className={classes["auth-signup"]}
                onClick={signupHandler}
              >
                SIGN-UP
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
