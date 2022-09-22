import React from "react";
import classes from "./DashBoardNav.module.css";
import AIT from "../../../assets/logos/AIT black logo.png";
import jobImg from "../../../assets/images/jobprofiles.svg";
import { Link, NavLink } from "react-router-dom";
import logoutIcon from "../../../assets/logos/logout_black_24dp.svg";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { sideNavActions } from "../../store/sideNav-slice";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import useWindowDimensions from "../../../hooks/use-windowSize";
const DashBoardNav = ({ onDrawerOpen, onDrawerClose, open }) => {
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  //logout redux
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  //show sidenav redux

  const showSideNav = useSelector((state) => state.sideNav.show);

  const hideSideNavHandler = () => {
    // width < 460 && dispatch(sideNavActions.hideSideNav());
  };
  const handleDrawerOpen = () => {
    onDrawerOpen();
  };

  const handleDrawerClose = () => {
    onDrawerClose();
  };

  return (
 
     
        <div className={classes.dashBoardNav}>
          <div className={classes["nav-top"]}>
            <div className={classes["dashboard-nav-header"]}>
              <img src={AIT} alt="" />
              <h1>Placement cell</h1>
              {width < 1200 && (
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              )}
            </div>
            <div className={classes["dashboard-nav-links"]}>
              <NavLink
                to="/dashboard/posts"
                activeClassName={classes["active-link"]}
                onClick={hideSideNavHandler}
              >
                <div className={classes["nav-link"]}>
                  <a href="/355555555">DashBoard</a>
                </div>
              </NavLink>

              <NavLink
                to="/dashboard/account"
                activeClassName={classes["active-link"]}
                onClick={hideSideNavHandler}
              >
                <div className={classes["nav-link"]}>
                  <a href="/uqhue">Account</a>
                </div>
              </NavLink>

              <NavLink
                to="/dashboard/analytics"
                activeClassName={classes["active-link"]}
                onClick={hideSideNavHandler}
              >
                <div className={classes["nav-link"]}>
                  <a href="/qwww">Analytics</a>
                </div>
              </NavLink>

              <NavLink
                to="/dashboard/companies"
                activeClassName={classes["active-link"]}
                onClick={hideSideNavHandler}
              >
                <div className={classes["nav-link"]}>
                  <a href="/ewwr">Companies</a>
                </div>
              </NavLink>
            </div>
          </div>
          <div className={classes["nav-bottom"]}>
            <div className={classes["dashboard-nav-img"]}>
              <img src={jobImg} alt="" />
            </div>
            <div className={classes["dashboard-nav-logout"]}>
              <h3>logout </h3>
              <Link to="/">
                <img src={logoutIcon} onClick={logoutHandler} alt="logout" />
              </Link>
            </div>
          </div>
        </div>
      
 
  );
};
export default DashBoardNav;
