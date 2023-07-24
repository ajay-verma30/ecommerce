import React from 'react';
import Plot from 'react-plotly.js';

const Barchart = ({ categoryCount }) => {
  const labels = Object.keys(categoryCount);
  const values = Object.values(categoryCount);
  const colors = values.map((count) => count > 2 ? 'green' : 'rgb(255,217,47)');

  return (
    <>
      <Plot
        data={[
          {
            x: labels, 
            y: values, 
            type: 'bar',
            marker: { color: colors }
          },
        ]}
        layout={{ width: 800, height: 550, title: 'Number of inventories available against each Category' }}
      />
    </>
  );
};

export default Barchart;
