import React from "react";
import classes from "./Login.module.css";

import Card from "../../UI/Card";
import { Link } from "react-router-dom";
const Login = (props) => {
  const btnClickHandler = (e) => {
    e.preventDefault();
  };

  const clickHandler = () => {
    props.hideLogin(false);
  };
  return (
    <div className={classes.login}>
      <div className="backdrop" onClick={clickHandler}></div>

      <Card>
        <div className={classes["login-form"]}>
          <form action="/nemetrix">
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
                <div className={classes["form-submit"]}>
                  <Link to="/dashboard">
                    <button onClick={btnClickHandler}>Log-in</button>
                  </Link>
                </div>
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
