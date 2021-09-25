import classes from "./Analytics.module.css";
import { Line } from "react-chartjs-2";

const Analytics = () => {
  const data = {
    datasets: [
      {
        type: "bar",
        label: "Bar Dataset",
        data: [10, 20, 30, 40],
      },
      {
        type: "line",
        label: "Line Dataset",
        data: [89, 92, 95, 99],
      },
    ],
    labels: ["2018", "2019", "2020", "2021"],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div className={classes.analytics}>
      <div className={classes["analytics-container"]}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Analytics;
