import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  TableContainer,
  Card,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Button
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {},
  viewAllButton: {
    borderRadius: '5px',
    height: '22px',
    width: '88px',
    fontSize: '12px',
    fontWeight: '500'
  }
}));

const DashboardButton = (props) => {

  const classes = useStyles();

  return (
    <Button variant="contained" className={classes.viewAllButton} color="primary">
      {props.children}
    </Button>
  )
}

export default DashboardButton;