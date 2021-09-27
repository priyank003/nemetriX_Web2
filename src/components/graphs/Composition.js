const Composition = {
  data: {
    labels: ["Above 30 CTC", "20-30 CTC", "10-20 CTC", "5-10 CTC"],
    datasets: [
      {
        label: "Package Composition",
        data: ["5", "15", "20", "25", "30"],
        backgroundColor: ["red", "orange", "yellow", "green", "blue"],
      },
    ],
  },
  config: {
    options: {
      animation: {
        animateRotate: true,
      },
    },
  },
  options: {
    plugins: {
      legend: {
        position: "top",

        display: true,
        labels: {
          color: "black",
          font: {
            size: 15,
          },
          padding: 20,
        },
      },
    },
  },
};

export default Composition;
