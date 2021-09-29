import React, { useState } from "react";
import classes from "./DashBoardPost.module.css";
import postIcon from "../../../assets/logos/noticeIcon.svg";
import close from "../../../assets/logos/close_black_24dp.svg";
const DashBoardPost = (props) => {
  const [expand, setExpand] = useState(false);

  const openHandler = (e) => {
    e.preventDefault();
    setExpand(true);
  };

  const hideModal = () => {
    setExpand(false);
  };

  return (
    <div className={classes.dashboardPost}>
      <div className={classes["post-header"]}>
        <div className={classes["post-icon"]}>
          <img src={postIcon} alt="" />
        </div>
        <h3>{props.title}</h3>
      </div>
      <div className={classes["post-end"]}>
        <div className={classes["post-expand-link"]}>
          <a href="/dashboard" onClick={openHandler}>
            open
          </a>
        </div>
        <div className={classes["post-date"]}>
          <p>23 Sept</p> <span>9:00 Am</span>
        </div>
      </div>

      {expand && (
        <div className={classes["post-expand"]}>
          <div className={classes["post-content"]}>
            <div className={classes["post-header"]}>
              <h2>{props.title}</h2>

              <button>
                <img src={close} alt="close" onClick={hideModal} />
              </button>
            </div>
            <div className={classes["post-content-area"]}>{props.notice}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashBoardPost;
