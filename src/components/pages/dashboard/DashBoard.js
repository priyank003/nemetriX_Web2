import classes from "./DashBoard.module.css";
import DashBoardNav from "./DashBoardNav";

import DashBoardCalendar from "./DashBoardCalendar";
import rocketicon from "../../../assets/logos/rocket.svg";
import interview from "../../../assets/logos/interview.svg";

import DashBoardPages from "./DashBoardPages";

import DashboardHeader from "./DashboardHeader";
const DashBoard = () => {
  return (
    <div className={classes.dashboard}>
      <div className={classes["dashboard-container"]}>
        <DashBoardNav />

        <div className={classes["dashboard-main"]}>
          <DashboardHeader />
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
