import React from "react";
import classes from "./Login.module.css";

import Card from "../../UI/Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store";
const Login = (props) => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const loginHandler = (e) => {
    dispatch(authActions.login());
  };
  return (
    <div className={classes.login}>
      <Card>
        <div className={classes["login-form"]}>
          <form onSubmit={loginHandler}>
            <div className={classes["form-div"]}>
              <h1 className={classes["form-heading"]}>
                Log <span>in</span>{" "}
              </h1>
              <div className={classes["form-input"]}>
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
      </Card>
    </div>
  );
};

export default Login;
