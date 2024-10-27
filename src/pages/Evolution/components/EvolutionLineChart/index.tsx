import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

const EvolutionLineChart = () => {
  const series = [
    {
      name: 'Apostas',
      data: [
        3500, 3000, 2000, 2500, 2000, 1000, 500, 2000, 3000, 3000, 2000, 2500,
        2000, 1000, 500, 2000, 2000, 1000, 500, 2000, 2000, 1000, 500, 2000
      ]
    }
  ];
  const options: ApexOptions = {
    chart: {
      height: 200,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Apostas por hora',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    xaxis: {
      categories: [
        '0h',
        '1h',
        '2h',
        '3h',
        '4h',
        '5h',
        '6h',
        '7h',
        '8h',
        '9h',
        '10h',
        '11h',
        '12h',
        '13h',
        '14h',
        '15h',
        '16h',
        '17h',
        '18h',
        '19h',
        '20h',
        '21h',
        '22h',
        '23h'
      ]
    }
  };
  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={200}
    />
  );
};

export default EvolutionLineChart;
