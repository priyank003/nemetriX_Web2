import classes from "./DashBoardNav.module.css";
import AIT from "../../../assets/logos/AIT black logo.png";
import jobImg from "../../../assets/images/jobprofiles.svg";
import { NavLink } from "react-router-dom";
const DashBoardNav = () => {
  return (
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
          >
            <div className={classes["nav-link"]}>
              <a href="">DashBoard</a>
            </div>
          </NavLink>

          <NavLink
            to="/dashboard/account"
            activeClassName={classes["active-link"]}
          >
            <div className={classes["nav-link"]}>
              <a href="">Account</a>
            </div>
          </NavLink>

          <NavLink
            to="/dashboard/analytics"
            activeClassName={classes["active-link"]}
          >
            <div className={classes["nav-link"]}>
              <a href="">Analytics</a>
            </div>
          </NavLink>

          <NavLink
            to="/dashboard/companies"
            activeClassName={classes["active-link"]}
          >
            <div className={classes["nav-link"]}>
              <a href="">Companies</a>
            </div>
          </NavLink>
        </div>
      </div>
      <div className={classes["nav-bottom"]}>
        <div className={classes["dashboard-nav-img"]}>
          <img src={jobImg} alt="" />
        </div>
      </div>
    </div>
  );
};
export default DashBoardNav;
