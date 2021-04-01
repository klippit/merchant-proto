import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'src/components/Logo';
import { Link as ScrollLink } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import {
  Link,
  Container,
  Typography,
  Button,
  Input,
  TextField
} from '@material-ui/core';
import SocialButtonsContainer from 'react-social-media-buttons';
import RoomIcon from '@material-ui/icons/Room';
import Search from 'src/layouts/DashboardLayout/TopBar/Search';
import IconButton from 'src/theme/core/overrides/Buttons/IconButton';
import ThemeMode from '../Settings/ThemeMode';
import { LoadingButton } from '@material-ui/lab';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(15, 0, 0, 0),
    padding: theme.spacing(0, 0),
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%'
  },
  bottomPanel: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(3, 10),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    maxWidth: '100%',
    textAlign: 'center'
  },
  topPanel: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    maxWidth: '100%',
    padding: theme.spacing(3, 0),
    backgroundColor: theme.palette.primary.footerGrey
  },
  heading: {
    color: theme.palette.primary.main,
    fontSize: '2em',
    fontWeight: 'bold'
  },
  buttonSearch: {
    height: '4em'
  },
  searchInput: {
    backgroundColor: theme.palette.common.white
  },
  socialContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
}));

// ----------------------------------------------------------------------

Footer.propTypes = {
  className: PropTypes.string
};

function Footer({ className }) {
  const classes = useStyles();

  return (
    <Container className={clsx(classes.root, className)}>
      <Container maxWidth="lg" className={clsx(classes.topPanel, className)}>
        <div className={clsx(classes.heading, className)}>
          <Typography variant="heading">Klippit</Typography>
        </div>
        <div>
          <Typography variant="heading">Subscribe Our Newsletter</Typography>
        </div>
        <div>
          <TextField
            className={clsx(classes.searchInput, className)}
            id="outlined-search"
            label="Search field"
            type="search"
            variant="outlined"
            color="primary"
          />
          <Button
            className={clsx(classes.buttonSearch, className)}
            underline="none"
            variant="contained"
          >
            New Campaign
          </Button>
        </div>
      </Container>
      <Container maxWidth="lg" className={clsx(classes.bottomPanel, className)}>
        <div>
          <Typography variant="heading">
            Why Use Klippit?
            <Link href="https://minimals.cc/">minimals.cc</Link>
          </Typography>
          <Typography variant="heading">
            The App
            <Link href="https://minimals.cc/">minimals.cc</Link>
          </Typography>
          <Typography variant="heading">
            Blog
            <Link href="https://minimals.cc/">minimals.cc</Link>
          </Typography>
        </div>
        <div className={clsx(classes.socialContainer, className)}>
          <Typography variant="heading">
            2021 &copy; Copyright
            <Link href="https://minimals.cc/">minimals.cc</Link>
          </Typography>
          <SocialButtonsContainer
            links={[
              'https://www.facebook.com/facebook',
              'https://twitter.com/Twitter',
              'https://www.instagram.com/instagram/',
              'https://www.linkedin.com/company/linkedin/'
            ]}
            buttonStyle={{
              width: '33px',
              height: '33px',
              margin: '0px 7px',
              backgroundColor: '#ffffff',
              borderRadius: '50%'
            }}
            iconStyle={{ color: '#108daa' }}
            openNewTab={true}
          />
        </div>
      </Container>
    </Container>
  );
}

export default Footer;
