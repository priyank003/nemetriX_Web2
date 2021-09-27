const Companies = {
  data: {
    datasets: [
      {
        type: "line",
        label: "No of companies",
        data: [50, 60, 73, 85, 95],
        borderColor: "rgb(94, 85, 219)",
        borderWidth: 1,
        backgroundColor: "rgb(129, 120, 245)",
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

export default Companies;
