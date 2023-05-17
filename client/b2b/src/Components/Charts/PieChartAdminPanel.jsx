import  { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';


// eslint-disable-next-line react/prop-types
const PieChartAdminPanel = ({ data, options }) => {

    Chart.register(...registerables);

  const chartRef = useRef();
  let chartInstance = null;

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    chartInstance = new Chart(myChartRef, {
      type: 'pie',
      data: data,
      options: options
    });

    return () => {
      // Cleanup the chart instance before unmounting the component
      chartInstance.destroy();
    };
  }, [data, options]);

  return (
    <canvas ref={chartRef} />
  );
};

export default PieChartAdminPanel;
