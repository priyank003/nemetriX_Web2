import React from "react";
import classes from "./Companies.module.css";
import filter from "../../../assets/logos/filter_list_black_24dp.svg";
import CompanyPost from "./CompanyPost";
const Companies = () => {
  return (
    <div className={classes.companies}>
      <div className={classes["companies-container"]}>
        <div className={classes["companies-header"]}>
          <h3>Companies Visited in placement drive</h3>
          <div className={classes["dashboard-posts-filter"]}>
            <img src={filter} alt="" />
          </div>
        </div>
        <div className={classes["companies-categories"]}>
          <div className={classes["company-name"]}>
            <h4>Name</h4>
          </div>
          <div className={classes["company-type"]}>
            <h4>Type</h4>
          </div>

          <div className={classes["company-vacancy"]}>
            <h4>Vacancy</h4>
          </div>
        </div>
        <div className={classes["companies-list"]}>
          <CompanyPost />
          <CompanyPost />
          <CompanyPost />
          <CompanyPost />
          <CompanyPost />
        </div>
      </div>
    </div>
  );
};

export default Companies;
