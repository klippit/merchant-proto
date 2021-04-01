import React from 'react';
import Welcome from './Welcome';
import Widgets1 from './Widgets1';
import Widgets2 from './Widgets2';
import NewInvoice from './NewInvoice';
import TopAuthors from './TopAuthors';
import Page from 'src/components/Page';
import useAuth from 'src/hooks/useAuth';
import FeaturedApp from './FeaturedApp';
import AreaInstalled from './AreaInstalled';
import TotalDownloads from './TotalDownloads';
import TotalInstalled from './TotalInstalled';
import CurrentDownload from './CurrentDownload';
import TotalActiveUsers from './TotalActiveUsers';
import TopInstalledCountries from './TopInstalledCountries';
import TopRelatedApplications from './TopRelatedApplications';
import YearlySales from './../DashboardEcommerceView/YearlySales';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  TableContainer,
  Card,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableBody
} from '@material-ui/core';
import DasboardItems from '../../../components/DashboardItems';
import Scrollbars from 'src/components/Scrollbars';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {},
  campaignsCard: {
    margin: theme.spacing(3, 0, 0, 0)
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
        <Grid container>
          <Grid item sm={6}>
            <Typography variant="heading" sx={{ color: 'text.primary' }}>
              <h1>Active Campaigns</h1>
            </Typography>
            <Card className={classes.campaignsCard}>
              <TableContainer sx={{ minWidth: 550, mt: 3 }}>
                <DasboardItems />
                <DasboardItems />
                <DasboardItems />
                <DasboardItems />
                <DasboardItems />
              </TableContainer>
            </Card>
          </Grid>
          <Grid item sm={6}>
            <Typography variant="heading" sx={{ color: 'text.primary' }}>
              <h1>Payouts</h1>
            </Typography>
            <Card className={classes.campaignsCard}>
              <div className={classes.root}>
                <TableContainer sx={{ minWidth: 550, mt: 3 }}>
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
            <YearlySales />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default DashboardAppView;
