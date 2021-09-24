import React, { useEffect, useState } from "react";
import classes from "./Signup.module.css";

import Card from "../../UI/Card";
import useInput from "../../../hooks/use-input";

const Signup = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasEror: nameInputHasEror,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasEror: emailInputHasEror,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim().includes("@"));

  const {
    value: enteredId,
    isValid: enteredIdIsValid,
    hasEror: idInputHasEror,
    valueChangeHandler: idChangeHandler,
    inputBlurHandler: idBlurHandler,
    reset: resetIdInput,
  } = useInput((value) => value.trim() !== "");
  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }
  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!nameInputHasEror) {
      return;
    }
    console.log("form submitted");

    resetNameInput();
  };

  //hide modal by clcik on backdrop
  const hideModalHandler = () => {
    props.hideSignup(false);
  };

  return (
    <div className={classes.signUp}>
      <div className="backdrop" onClick={hideModalHandler}></div>

      <Card>
        <div className={classes["signup-form"]}>
          <form action="/nemetrix" onSubmit={formSubmissionHandler}>
            <div className={classes["form-div"]}>
              <h1 className={classes["form-heading"]}>
                Sign <span>up</span>{" "}
              </h1>
              <div className={classes["form-input"]}>
                <div className={classes["input-name"]}>
                  <input
                    type="text"
                    placeholder="first name"
                    onChange={nameChangeHandler}
                    value={enteredName}
                    className={
                      classes[`${nameInputHasEror ? "input-invalid" : ""}`]
                    }
                    onBlur={nameBlurHandler}
                  />
                  <input type="text" placeholder="last name" />
                </div>
                {nameInputHasEror && (
                  <p className={classes["eror-text"]}>Name must not be empty</p>
                )}
                <div className={classes["input-cedentials"]}>
                  <input
                    type="email"
                    placeholder="AIT email"
                    onChange={emailChangeHandler}
                    value={enteredEmail}
                    className={
                      classes[`${emailInputHasEror ? "input-invalid" : ""}`]
                    }
                    onBlur={emailBlurHandler}
                  />

                  <input
                    type="text"
                    placeholder="Registered id"
                    onChange={idChangeHandler}
                    value={enteredId}
                    className={
                      classes[`${idInputHasEror ? "input-invalid" : ""}`]
                    }
                    onBlur={idBlurHandler}
                  />
                </div>
                {emailInputHasEror && (
                  <p className={classes["eror-text"]}>email must include @</p>
                )}
                {idInputHasEror && (
                  <p className={classes["eror-text"]}>id must not be empty</p>
                )}

                <div className={classes["input-study"]}>
                  <label htmlFor="">
                    <span>Year</span>
                    <select name="year" id="year-select">
                      <option value="">Select</option>
                      <option value="third">TE</option>
                      <option value="fourth">BE</option>
                      <option value="ME">ME 2nd year</option>
                    </select>
                  </label>

                  <label htmlFor="">
                    <span>Branch</span>

                    <select name="branch" id="branch-select">
                      <option value="">Select</option>
                      <option value="comp">Computer Engeering</option>
                      <option value="it">Information Technology</option>
                      <option value="entc">Electronics</option>
                      <option value="meach">Mechanical engineering</option>
                    </select>
                  </label>
                </div>
                <div className={classes["input-password"]}>
                  <input type="password" placeholder="set password" />
                  <input type="password" placeholder="confirm passwword" />
                </div>
                <div className={classes["form-submit"]}>
                  <button disabled={!formIsValid}>Sign-up</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Signup;
