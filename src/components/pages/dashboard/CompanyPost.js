import React from "react";
import classes from "./CompanyPost.module.css";
import google from "../../../assets/logos/Google__G__Logo.svg.png";
const CompanyPost = () => {
  return (
    <div className={classes.companypost}>
      <div className={classes["company-post-container"]}>
        <div className={classes["company-post-header"]}>
          <div className={classes["company-logo"]}>
            <img src={google} alt="company logo" />
          </div>
          <div className={classes["company-name"]}>
            <h3>Google</h3>
          </div>
        </div>

        <div className={classes["company-category"]}>Software</div>
        {/* <div className={classes["company-job-profile"]}>SWE</div> */}
        <div className={classes["company-job-vacancy"]}>25</div>
      </div>
    </div>
  );
};

export default CompanyPost;
