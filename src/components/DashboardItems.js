import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Link,
  Container,
  Typography,
  Button,
  Input,
  TextField,
  Grid,
  ButtonBase,
  Paper
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500
  },
  image: {
    width: 50,
    height: 50
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '50%'
  }
}));

// ----------------------------------------------------------------------

const DashboardItem = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0lKRDfRzkefUJVpoOaA28fcgBcn9SHR_07g&usqp=CAU"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item>
              <Typography variant="cardIcon">
                XYZ Campaign
              </Typography>
            </Grid>
            <Grid container>
              <Grid xs={3} item>
                <Typography variant="body2" >
                  1/4/2021
                </Typography>
              </Grid>
              <Grid xs={3} item>
                <Typography variant="body2">
                  <Link underline="always" href="www.facebook.com">
                    63 Sales
                  </Link>
                </Typography>
              </Grid>
              <Grid xs={3} item>
                <Typography variant="body2">
                  <Link underline="always" href="www.instagram.com">
                    Voucher
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default DashboardItem;
