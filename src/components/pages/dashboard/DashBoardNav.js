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
const DashBoardNav = () => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  //logout redux
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  //show sidenav redux

  const showSideNav = useSelector((state) => state.sideNav.show);

  const hideSideNavHandler = () => {
    width < 460 && dispatch(sideNavActions.hideSideNav());
  };
  return (
    <Fragment>
      {showSideNav && (
        <div className={classes.dashBoardNav}>
          <div className={classes["nav-top"]}>
            <div className={classes["dashboard-nav-header"]}>
              <img src={AIT} alt="" />
              <h1>Placement cell</h1>
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
      )}
    </Fragment>
  );
};
export default DashBoardNav;
