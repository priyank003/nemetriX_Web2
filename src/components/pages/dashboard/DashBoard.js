import classes from "./DashBoard.module.css";
import DashBoardNav from "./DashBoardNav";
import search from "../../../assets/logos/search_black_24dp.svg";
import calendarIcon from "../../../assets/logos/today_black_24dp.svg";
import bellIcon from "../../../assets/logos/bell.png";
import userImg from "../../../assets/images/user/cheerful-curly-business-girl-wearing-glasses.jpg";
import DashBoardCalendar from "./DashBoardCalendar";
import rocketicon from "../../../assets/logos/rocket.svg";
import interview from "../../../assets/logos/interview.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashBoardPages from "./DashBoardPages";
import { useSelector } from "react-redux";

const DashBoard = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  console.log(isAuth);

  return (
    <div className={classes.dashboard}>
      <div className={classes["dashboard-container"]}>
        <DashBoardNav />
        <div className={classes["dashboard-main"]}>
          <div className={classes["dashboard-main-header"]}>
            <div className={classes["dashboard-search"]}>
              <span>Dashboard</span>

              <div className={classes["search-input"]}>
                <input type="text" placeholder="Search Jobs" />
                <div className={classes["search-icon"]}>
                  <img src={search} alt="" />
                </div>
              </div>
            </div>
            <div className={classes["dashboard-user"]}>
              <div className={classes["user-date"]}>
                {" "}
                <img src={calendarIcon} alt="" />
                <span> 24 sept, 2021</span>
              </div>

              <div className={classes["user-notifications"]}>
                <img src={bellIcon} alt="" />
                <span> 3 </span>
              </div>
              <div className={classes["user-profile"]}>
                <Link to="/dashboard/account">
                  <img src={userImg} alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className={classes["dashboard-main-container"]}>
            <div className={classes["main-left"]}>
              <DashBoardPages />
            </div>
            <div className={classes["main-right"]}>
              <DashBoardCalendar />

              <div className={classes["dashboard-stats"]}>
                <div className={classes["dashboard-jobs"]}>
                  <div className={classes["dashboard-job-icon"]}>
                    <img src={rocketicon} alt="" />
                  </div>

                  <h2>300 vacancies</h2>
                </div>
                <div className={classes["dashboard-jobs-selections"]}>
                  <div className={classes["job-selection-icon"]}>
                    <img src={interview} alt="" />
                  </div>
                  <h2>150 Selected</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
