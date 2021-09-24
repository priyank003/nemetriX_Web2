import classes from "./Stats.module.css";
import LineChart from "../../graphs/graph";

const Stats = () => {
  return (
    <div className={classes.stats}>
      <h1 className={classes["stats-heading"]}>
        Placements Highlights for past 5 years
      </h1>
      <div className={classes["stats-container"]}>
        <div className={classes["stats-left"]}>
          {/* <h2>One of the best Institute in Pune for a reason</h2> */}
          <div className={classes["stats-nav"]}>
            <div className={classes["stats-nav-link"]}>
              <span>placements</span>
            </div>

            <div className={classes["stats-nav-link"]}>
              <span>Average salary</span>{" "}
            </div>
            <div className={classes["stats-nav-link"]}>
              {" "}
              <span>Highest Salary</span>{" "}
            </div>
            <div className={classes["stats-nav-link"]}>
              <span>industries vsisiting</span>
            </div>
            <div className={classes["stats-nav-link"]}>
              <span>new industries visiting</span>
            </div>
          </div>
        </div>
        <div className={classes["stats-right"]}>
          <div className={classes["stat-graph"]}>
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stats;
