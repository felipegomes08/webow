import { grey } from '@mui/material/colors';
import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import { EvolutionChartProps } from './EvolutionChart.type';

const EvolutionChart = ({ title }: EvolutionChartProps) => {
  const series = [
    {
      name: 'Receita',
      data: [15478, 1457, 8960, 3657, 42756, 4578, 21564]
    }
  ];
  const options: ApexOptions = {
    chart: {
      height: 300,
      type: 'bar'
    },
    plotOptions: {
      bar: {
        columnWidth: '95%',
        borderRadius: 5,
        dataLabels: {
          position: 'top'
        },
        colors: {
          ranges: [
            { from: 0, to: 5000, color: grey[300] },
            { from: 5000, to: 10000, color: grey[400] },
            { from: 10000, to: Infinity, color: grey[500] }
          ]
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: any) {
        return val;
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ['#304758']
      }
    },

    xaxis: {
      categories: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      position: 'bottom',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      tooltip: {
        enabled: true
      }
    },
    grid: { show: false },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false,
        formatter: function (val: any) {
          return val;
        }
      },
      floating: true
    },
    title: {
      text: title
    }
  };

  return (
    <ReactApexChart options={options} series={series} type="bar" height={300} />
  );
};

export default EvolutionChart;
