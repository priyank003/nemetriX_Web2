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
        <div className={classes["analytics-chart-wrapper"]}>
          <h1>Placement packages</h1>
          <Bar  responsive={true} data={Salary.data} options={Salary.options} className={classes["analytics-chart"]} />
        </div>
        <div className={classes["analytics-chart-wrapper"]}>
          <h1>Placement percentage</h1>
          <Line  responsive={true} data={Percentage.data} options={Percentage.options} className={classes["analytics-chart"]}/>
        </div>
        <div className={classes["analytics-chart-wrapper"]}>
          <h1>No of companies visited</h1>
          <Line  responsive={true} data={Companies.data} options={Companies.options} className={classes["analytics-chart"]} />
        </div>
        <div className={classes["analytics-chart-wrapper"]}>
          <h1>Package Compostion</h1>
          <Doughnut
            responsive={true}
            data={Composition.data}
            options={Composition.options}
            config={Composition.config}
            className={classes["analytics-chart"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
