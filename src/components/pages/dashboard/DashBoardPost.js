import classes from "./DashBoardPost.module.css";
import postIcon from "../../../assets/logos/noticeIcon.svg";
import Card from "../../UI/Card";
const DashBoardPost = () => {
  return (
    <div className={classes.dashboardPost}>
      <div className={classes["post-icon"]}>
        <img src={postIcon} alt="" />
      </div>

      <div className={classes["post-header"]}>
        <h3>Google Placement Drive</h3>
      </div>
      <div className={classes["post-expand"]}>
        <a href="">Learn more</a>
      </div>
      <div className={classes["post-date"]}>
        <p>23 Sept</p> <span>9:00 Am</span>
      </div>
    </div>
  );
};

export default DashBoardPost;
