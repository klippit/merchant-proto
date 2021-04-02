import { merge } from 'lodash';
import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
import { ApexChartsOption } from 'src/components/Charts/Apexcharts';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Box } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => ({
  root: {}
}));

// ----------------------------------------------------------------------

YearlySales.propTypes = {
  className: PropTypes.string
};

function YearlySales({ className, ...other }) {
  const classes = useStyles();

  const chartData = [
    { name: 'Total Income', data: [150, 145, 140, 150, 160, 125, 120, 115] }
  ];
  const chartOptions = merge(ApexChartsOption(), {
    legend: { position: 'top', horizontalAlign: 'right' },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep'
      ]
    }
  });

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      <Box sx={{ mt: 3, mx: 3 }} dir="ltr">
        <ReactApexChart
          type="area"
          series={chartData}
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
}

export default YearlySales;
