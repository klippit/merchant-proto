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

const sales = [
  {
    sale_id: 1,
    customer: 'John Doe',
    product: 'ABC Product',
    purchased_on: '4/5/2021',
    qty: 5,
    unit_price: '$6',
    total: '$36',
    status: 'Needs Approval'
  },
  {
    sale_id: 1,
    customer: 'John Doe',
    product: 'ABC Product',
    purchased_on: '4/5/2021',
    qty: 5,
    unit_price: '$6',
    total: '$36',
    status: 'Approved'
  },
  {
    sale_id: 1,
    customer: 'John Doe',
    product: 'ABC Product',
    purchased_on: '4/5/2021',
    qty: 5,
    unit_price: '$6',
    total: '$36',
    status: 'Needs Approval'
  },
  {
    sale_id: 1,
    customer: 'John Doe',
    product: 'ABC Product',
    purchased_on: '4/5/2021',
    qty: 5,
    unit_price: '$6',
    total: '$36',
    status: 'Needs Approval'
  },
  {
    sale_id: 1,
    customer: 'John Doe',
    product: 'ABC Product',
    purchased_on: '4/5/2021',
    qty: 5,
    unit_price: '$6',
    total: '$36',
    status: 'Approved'
  }
];

function ListSales() {
  const classes = useStyles();

  return (
    <Page title="Table-Components | Minimal-UI">
      <Container maxWidth="lg">
        <HeaderDashboard heading="Sales" />
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
                          <TableCell>SALES ID</TableCell>
                          <TableCell>CUSTOMER</TableCell>
                          <TableCell>PRODUCT</TableCell>
                          <TableCell>PURCHASED ON</TableCell>
                          <TableCell>QTY</TableCell>
                          <TableCell>UNIT PRICE</TableCell>
                          <TableCell>TOTAL</TableCell>
                          <TableCell>STATUS</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {sales.map((sale) => (
                          <TableRow
                            key={sale.sale_id}
                            className={classes.hideLastBorder}
                          >
                            <TableCell padding="checkbox">
                              <Checkbox />
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {sale.sale_id}
                            </TableCell>
                            <TableCell>{sale.customer}</TableCell>
                            <TableCell>{sale.product}</TableCell>
                            <TableCell>{sale.purchased_on}</TableCell>
                            <TableCell>{sale.qty}</TableCell>
                            <TableCell>{sale.unit_price}</TableCell>
                            <TableCell>{sale.total}</TableCell>
                            <TableCell>{sale.status}</TableCell>
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
