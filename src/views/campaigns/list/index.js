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
  Checkbox,
  Link,
  Typography,
  ButtonBase,
  Paper
} from '@material-ui/core';
import DasboardItems from '../../../components/DashboardItems';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {},
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
  },
  card: {
    backgroundColor: '#F4F6F7',
    padding: theme.spacing(5)
  },
  img: {
    width: 50,
    height: 50,
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '50%'
  },
  headingStyle: {
    marginBottom: '10px'
  },
  draftHeadingStyle:{
   marginTop: '50px',
   marginBottom: '10px'
  },
  containerStyle: {
    padding: '15px'
  },
  innerContainerStyle: {
    marginLeft: '20px'
  }
}));

// ----------------------------------------------------------------------

const activeCampaigns = [
  {
    name: 'Two free Burgers/w juice',
    date: '4/5/2021',
    sales: 63
  },
  {
    name: 'Double burger with Cheese - Free',
    date: '4/5/2021',
    sales: 63
  },
  {
    name: 'Two free Burgers/w juice',
    date: '4/5/2021',
    sales: 63
  },
  {
    name: 'Double burger with Cheese - Free',
    date: '4/5/2021',
    sales: 63
  },
  {
    name: 'Two free Burgers/w juice',
    date: '4/5/2021',
    sales: 63
  },
  {
    name: 'Double burger with Cheese - Free',
    date: '4/5/2021',
    sales: 63
  }
];

const draftCampaigns = [
  {
    name: 'XYZ Campaign',
    date: '4/5/2021'
  },
  {
    name: 'XYZ Campaign',
    date: '4/5/2021'
  },
  {
    name: 'XYZ Campaign',
    date: '4/5/2021'
  },
  {
    name: 'XYZ Campaign',
    date: '4/5/2021'
  },
  {
    name: 'XYZ Campaign',
    date: '4/5/2021'
  },
  {
    name: 'XYZ Campaign',
    date: '4/5/2021'
  },
  {
    name: 'XYZ Campaign',
    date: '4/5/2021'
  },
];

function ListSales() {
  const classes = useStyles();

  return (
    <Page title="Campaigns">
      <Container maxWidth="lg">
        <HeaderDashboard heading="Campaigns" />

        <Grid container spacing={5}>
          <Grid item xs={12}>
          <Typography variant="h4" className={classes.headingStyle}>Active</Typography>
            <Card className={classes.card}>
              {activeCampaigns.map((campaign)=> (
              <Grid container className={classes.containerStyle}>
                  <Grid item>
                      <img
                        className={classes.img}
                        alt="complex"
                        src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                      />
                  </Grid>
                  <Grid item xs={12} sm container className={classes.innerContainerStyle}>
                      <Grid item>
                        <Typography gutterBottom>
                          {campaign.name}
                        </Typography>
                      </Grid>
                      <Grid container spacing={3}>
                        <Grid item>
                          <Typography variant="body2" gutterBottom>
                            {campaign.date}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2">
                            <Link underline="always" href="www.facebook.com">
                              {campaign.sales} Total Sales
                            </Link>
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2">
                            <Link underline="always" href="www.instagram.com">
                              Voucher
                            </Link>
                          </Typography>
                        </Grid>
                   </Grid>
                </Grid>
                <Grid item>
                  <MoreVertIcon />
                </Grid>
              </Grid>
              ))}
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={5}>
          <Grid item xs={12}>
          <Typography variant="h4" className={classes.draftHeadingStyle}>Drafts</Typography>
            <Card className={classes.card}>
              {draftCampaigns.map((campaign)=> (
              <Grid container className={classes.containerStyle}>
                  <Grid item>
                      <img
                        className={classes.img}
                        alt="complex"
                        src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                      />
                  </Grid>
                  <Grid item xs={12} sm container className={classes.innerContainerStyle}>
                      <Grid item>
                        <Typography gutterBottom>
                          {campaign.name}
                        </Typography>
                      </Grid>
                      <Grid container>
                        <Grid xs={3} item>
                          <Typography variant="body2" gutterBottom>
                            {campaign.date}
                          </Typography>
                        </Grid>
                   </Grid>
                </Grid>
                <Grid item>
                  <MoreVertIcon />
                </Grid>
              </Grid>
              ))}
            </Card>
          </Grid>
        </Grid>
      
      </Container>
    </Page>
  );
}

export default ListSales;
