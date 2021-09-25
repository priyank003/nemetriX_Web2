import React from "react";
import classes from "./Account.module.css";
import userImg from "../../../assets/images/user/cheerful-curly-business-girl-wearing-glasses.jpg";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className={classes.account}>
      <div className={classes["account-container"]}>
        <div className={classes["account-header"]}>
          <div className={classes["user-img"]}>
            <img src={userImg} />
          </div>
          <div className={classes["user-credentials"]}>
            <div className={classes["user-id"]}>
              <h1>20195</h1>
            </div>
            <div className={classes["user-name"]}>
              <h1>Alexandra gomes</h1>
            </div>
          </div>
        </div>
        <div className={classes["account-details"]}>
          <div className={classes["user-email"]}>
            {" "}
            <p>Alexandra_20195@aitpune.edu.in</p>
          </div>
          <div className={classes["user-study"]}>
            <div className={classes["user-year"]}>
              <h2>SE</h2>
            </div>
            <div className={classes["user-stream"]}>
              <h2>Computer Science</h2>
            </div>
          </div>
        </div>
        <div className={classes["account-adverstisement"]}>
          <div className={classes["adv-heading"]}>
            <h1>For AIT exclusive interview experience</h1>
          </div>
          <div className={classes["adv-link"]}>
            <a href="https://anubhav.aitoss.club/"> Take me there</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
