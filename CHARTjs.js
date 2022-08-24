var compCanvas = document.getElementById("compchart");

Chart.defaults.font.family = "Lato";
Chart.defaults.font.size = 20;
Chart.defaults.color = "black";

var compData = {
  labels: ["Engine","Gearsystem","Injectionsystem","Cost","Electric suction door","Cameras","Navigation"],
  datasets: [
    {
        label: "AUDI",
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)',
        data: [2, 3, 4, 5, 1, 2,3]
    },
    {
        label: "BMW",
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
        data: [5, 3, 2, 5, 5, 3,4]
    }
  ]
};

var chartOptions = {
  plugins: {
    title: {
      display: true,
      align: "start",
    },
    legend: {
      align: "start"
    }
  },
  scales: {
    r: {
      pointLabels: {
        font: {
          size:20
        }
      }
    }
  }
};

var radarChart = new Chart(compCanvas, {
  type: "radar",
  data: compData,
  options: chartOptions
});