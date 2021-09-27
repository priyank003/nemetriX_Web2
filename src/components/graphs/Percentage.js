const Percentage = {
  data: {
    datasets: [
      {
        type: "line",
        label: "Placement percentage",
        data: [89, 90, 93, 95, 98],
        borderColor: "rgb(228, 56, 56)",
        borderWidth: 1,
        backgroundColor: "rgb(224, 95, 95)",
      },
    ],
    labels: ["2017", "2018", "2019", "2020", "2021"],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
};

export default Percentage;
