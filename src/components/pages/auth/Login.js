import React from "react";
import classes from "./Login.module.css";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
const Login = () => {
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    dispatch(authActions.login());
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
                <input type="email" placeholder="AIT email" />
                <input type="password" placeholder="password" />
              </div>
              <div className={classes["input-dropdown"]}>
                <label htmlFor="">
                  <span>Login as</span>
                  <select name="year" id="year-select">
                    <option value="">Select</option>
                    <option value="student">student</option>
                    <option value="admin">admin</option>
                  </select>
                </label>
              </div>
              <Link to="/dashboard">
                <div className={classes["form-submit"]}>
                  <button onClick={loginHandler}>Log-in</button>
                </div>
              </Link>

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
