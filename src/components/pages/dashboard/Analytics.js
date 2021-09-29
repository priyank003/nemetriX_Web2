import React from "react";
import classes from "./Analytics.module.css";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import Salary from "../../graphs/Salary";
import Percentage from "../../graphs/Percentage";
import Companies from "../../graphs/Companies";
import Composition from "../../graphs/Composition";
const Analytics = () => {
  return (
    <div className={classes.analytics}>
      <div className={classes["analytics-container"]}>
        <div className={classes["analytics-packages"]}>
          <h1>Placement packages</h1>
          <Bar data={Salary.data} options={Salary.options} />
        </div>
        <div className={classes["analytics-percentage"]}>
          <h1>Placement percentage</h1>
          <Line data={Percentage.data} options={Percentage.options} />
        </div>
        <div className={classes["analytics-companies"]}>
          <h1>No of companies visited</h1>
          <Line data={Companies.data} options={Companies.options} />
        </div>
        <div className={classes["analytics-composition"]}>
          <h1>Package Compostion</h1>
          <Doughnut
            data={Composition.data}
            options={Composition.options}
            config={Composition.config}
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
