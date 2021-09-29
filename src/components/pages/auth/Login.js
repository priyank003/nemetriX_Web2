import React, { Component } from "react";
import classes from "./Login.module.css";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { useRef } from "react";

import Config from "../../../azure/auth/Config";
import { PublicClientApplication } from "@azure/msal-browser";

const Login = () => {
  const dispatch = useDispatch();

  const emailInputRef = useRef();
  const selectInputRef = useRef();
  const loginHandler = (e) => {
    // eslint-disable-next-line
    const enteredMail = emailInputRef.current.value;
    const enteredSelect = selectInputRef.current.value;

    dispatch(authActions.login(enteredSelect));
    console.log(e);
  };

  return (
    <div className={classes.login}>
      <div className={classes["login-form"]}>
        <form onSubmit={loginHandler}>
          <div className={classes["form-div"]}>
            <h1 className={classes["form-heading"]}>
              Sign <span>in</span>{" "}
            </h1>

            <div className={classes["form-input"]}>
              <div className={classes["signup-req"]}>
                <p>Not registered yet ?</p> <Link to="/signup"> Sign-up</Link>
              </div>
              <div className={classes["input-cedentials"]}>
                <input
                  type="email"
                  ref={emailInputRef}
                  placeholder="AIT email"
                />
                <input type="password" placeholder="password" />
              </div>
              <div className={classes["input-dropdown"]}>
                <label htmlFor="">
                  <span>Login as</span>
                  <select name="year" id="year-select" ref={selectInputRef}>
                    <option value="">Select</option>
                    <option value="student">student</option>
                    <option value="admin">admin</option>
                  </select>
                </label>
              </div>

              <div className={classes["form-submit"]}>
                <Link to="/dashboard">
                  <button onClick={loginHandler}>Log-in</button>
                </Link>
              </div>

              <div className={classes["forgot-password"]}>
                <p>Forgot your password ?</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
