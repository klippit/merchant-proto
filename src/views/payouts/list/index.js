import React from 'react';
import Page from 'src/components/Page';
import Scrollbars from 'src/components/Scrollbars';
import { HeaderDashboard } from 'src/layouts/Common';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  Container,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  Checkbox
} from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {}
}));

// ----------------------------------------------------------------------

const payouts = [
  {
    amount: '$200',
    status: 'Paid',
    account: 'CHASE***********789',
    date: '4/5/2021'
  },
  {
    amount: '$200',
    status: 'Paid',
    account: 'CHASE***********789',
    date: '4/5/2021'
  },
  {
    amount: '$200',
    status: 'Paid',
    account: 'CHASE***********789',
    date: '4/5/2021'
  },
  {
    amount: '$200',
    status: 'Paid',
    account: 'CHASE***********789',
    date: '4/5/2021'
  },
  {
    amount: '$200',
    status: 'Paid',
    account: 'CHASE***********789',
    date: '4/5/2021'
  },
  {
    amount: '$200',
    status: 'Paid',
    account: 'CHASE***********789',
    date: '4/5/2021'
  },
  {
    amount: '$200',
    status: 'Paid',
    account: 'CHASE***********789',
    date: '4/5/2021'
  }
];

function ListSales() {
  const classes = useStyles();

  return (
    <Page title="Table-Components | Minimal-UI">
      <Container maxWidth="lg">
        <HeaderDashboard heading="Payouts" />
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Card>
              <div className={classes.root}>
                <Scrollbars>
                  <TableContainer sx={{ minWidth: 800, mt: 3 }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell></TableCell>
                          <TableCell>AMOUNT</TableCell>
                          <TableCell>STATUS</TableCell>
                          <TableCell>ACCOUNT</TableCell>
                          <TableCell>DATE</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {payouts.map((payout) => (
                          <TableRow
                            key={payout.amount}
                            className={classes.hideLastBorder}
                          >
                            <TableCell padding="checkbox">
                              <Checkbox />
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {payout.amount}
                            </TableCell>
                            <TableCell>{payout.status}</TableCell>
                            <TableCell>{payout.account}</TableCell>
                            <TableCell>{payout.date}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Scrollbars>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default ListSales;
