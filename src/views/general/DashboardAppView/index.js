import React from 'react';
import Welcome from './Welcome';
import Widgets1 from './Widgets1';
import Widgets2 from './Widgets2';
import NewInvoice from './NewInvoice';
import TopAuthors from './TopAuthors';
import Page from 'src/components/Page';
import useAuth from 'src/hooks/useAuth';
import YearlySales from './../DashboardEcommerceView/YearlySales';
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
import DasboardItems from '../../../components/DashboardItems';
import DashboardButton from 'src/components/DashboardButton';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {},
  campaignsCard: {
    margin: theme.spacing(3, 0, 0, 0)
  },
  viewAllButton: {
    borderRadius: '5px',
    height: '22px',
    width: '88px',
    fontSize: '12px',
    fontWeight: '500'
  }
}));

const payouts = [
  {
    amount: '$200',
    account: 'CHASE***********789',
    date: '4/5/2021'
  },
  {
    amount: '$200',
    account: 'CHASE***********789',
    date: '4/5/2021'
  },
  {
    amount: '$200',
    account: 'CHASE***********789',
    date: '4/5/2021'
  },
  {
    amount: '$200',
    account: 'CHASE***********789',
    date: '4/5/2021'
  },
  {
    amount: '$200',
    account: 'CHASE***********789',
    date: '4/5/2021'
  }
];

// ----------------------------------------------------------------------

function DashboardAppView() {
  const classes = useStyles();
  const { user } = useAuth();

  return (
    <Page title="Dashboard App | Minimal-UI" className={classes.root}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <Grid container spacing={4}>
              <Grid item>
                <Typography variant="cardHeading" sx={{ color: 'text.primary' }}>
                  Active Campaigns
                </Typography>
              </Grid>
              <Grid item>
                <DashboardButton>
                  VIEW ALL
                </DashboardButton>
              </Grid>
            </Grid>
            <Card className={classes.campaignsCard}>
              <TableContainer sx={{ minWidth: 550, maxHeight: '300px', minHeight: '300px', mt: 3 }}>
                <DasboardItems />
                <DasboardItems />
                <DasboardItems />
              </TableContainer>
            </Card>
          </Grid>
          <Grid item sm={6}>
            <Grid container spacing={4}>
              <Grid item>
                <Typography variant="cardHeading" sx={{ color: 'text.primary' }}>
                  Payouts
                </Typography>
              </Grid>
              <Grid item>
                <DashboardButton>
                  VIEW ALL
                </DashboardButton>
              </Grid>
            </Grid>
            <Card className={classes.campaignsCard}>
              <div className={classes.root}>
                <TableContainer sx={{ minWidth: 550, maxHeight: '300px', minHeight: '300px', mt: 3 }}>
                  <Table>
                    <TableBody>
                      {payouts.map((payout) => (
                        <TableRow
                          key={payout.amount}
                          className={classes.hideLastBorder}
                        >
                          <TableCell>{payout.amount}</TableCell>
                          <TableCell>{payout.account}</TableCell>
                          <TableCell>{payout.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Grid container spacing={4}>
              <Grid item>
                <Typography variant="cardHeading" sx={{ color: 'text.primary', mt: 3 }}>
                  Sales Overview
                </Typography>
              </Grid>
              <Grid item>
                <DashboardButton>
                  VIEW ALL
                </DashboardButton>
              </Grid>
            </Grid>
            <YearlySales className={classes.campaignsCard} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default DashboardAppView;
