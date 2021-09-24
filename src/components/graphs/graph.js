import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import varCss from "../UI/constant/vars.css";
const data = {
  labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
  datasets: [
    {
      label: "Placement percentage",
      data: [85, 87, 89, 90, 92, 95],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
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

const LineChart = () => (
  <>
    <div className="header">
      <h1 className="title">Placement %</h1>
      <div className="links">
        <a
          className="btn btn-gh"
          href="https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js"
        >
          {/* Github Source */}
        </a>
      </div>
    </div>
    <Line data={data} options={options} />
  </>
);

export default LineChart;
