import React from "react";

import classes from "./Header.module.css";
import AIT from "../../../assets/logos/AIT black logo.png";

import { Link } from "react-router-dom";
const Header = (props) => {
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
            <div className={classes["header-brand-img"]}>
              <img src={AIT} alt="" />
            </div>

            <h1>AIT Placement cell</h1>
          </div>
        </Link>

        <div className={classes["header-nav"]}>
          <div className={classes["nav-auth"]}>
            <Link to="/login">
              <button className={classes["auth-login"]}>Sign-in</button>
            </Link>
            <Link to="/signup">
              <button className={classes["auth-signup"]}>Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
