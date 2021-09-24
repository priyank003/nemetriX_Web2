import classes from "./DashBoard.module.css";
import DashBoardNav from "./DashBoardNav";
import search from "../../../assets/logos/search_black_24dp.svg";
import Card from "../../UI/Card";
import filter from "../../../assets/logos/filter_list_black_24dp.svg";
import DashBoardPost from "./DashBoardPost";
import calendarIcon from "../../../assets/logos/today_black_24dp.svg";
import bellIcon from "../../../assets/logos/bell.png";
import userImg from "../../../assets/images/user/cheerful-curly-business-girl-wearing-glasses.jpg";
import DashBoardCalendar from "./DashBoardCalendar";
import rocketicon from "../../../assets/logos/rocket.svg";
import interview from "../../../assets/logos/interview.svg";
const DashBoard = () => {
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
                <img src={userImg} alt="" />
              </div>
            </div>
          </div>
          <div className={classes["dashboard-main-container"]}>
            <div className={classes["main-left"]}>
              <div className={classes["dashboard-posts"]}>
                <div className={classes["dashboard-posts-header"]}>
                  <h3>All Notices</h3>

                  <div className={classes["dashboard-posts-filter"]}>
                    <img src={filter} alt="" />
                  </div>
                </div>

                <div className={classes["dashboard-notices"]}>
                  <DashBoardPost />
                  <DashBoardPost />
                  <DashBoardPost />
                  <DashBoardPost />
                  <DashBoardPost />
                  <DashBoardPost />
                </div>
              </div>
              {/* <div className={classes["dashboard-charts"]}>
                dashboard-charts
              </div> */}
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
              {/* <div className={classes["dashboard-designs"]}>
                dashboard-designs
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
