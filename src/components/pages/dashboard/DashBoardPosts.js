import React from "react";
import classes from "./DashBoardPosts.module.css";
import DashBoardPost from "./DashBoardPost";
import filter from "../../../assets/logos/filter_list_black_24dp.svg";

const DashBoardPosts = () => {
  return (
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
  );
};

export default DashBoardPosts;
