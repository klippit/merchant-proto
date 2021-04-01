import React from 'react';
import Scrollbars from 'src/components/Scrollbars';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  Checkbox
} from '@material-ui/core';

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
    status: 'Needs Approval'
  }
];

const useStyles = makeStyles({
  root: {}
});

// ----------------------------------------------------------------------

export default function BasicTable() {
  const classes = useStyles();

  return (
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
                <TableRow key={sale.sale_id} className={classes.hideLastBorder}>
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
  );
}
