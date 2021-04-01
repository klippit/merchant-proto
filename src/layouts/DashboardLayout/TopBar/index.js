import clsx from 'clsx';
import React, { useState, useRef } from 'react';
import Search from './Search';
import Account from './Account';
import PropTypes from 'prop-types';
import Languages from './Languages';
import { Icon } from '@iconify/react';
import Notifications from './Notifications';
import Settings from 'src/layouts/Common/Settings';
import menu2Fill from '@iconify-icons/eva/menu-2-fill';
import { alpha, makeStyles } from '@material-ui/core/styles';
import {
  Box,
  AppBar,
  Hidden,
  Toolbar,
  List,
  Link,
  MenuItem,
  Container,
  Button,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import PopoverMenu from 'src/components/PopoverMenu';
import { MIconButton } from 'src/theme';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    backdropFilter: 'blur(8px)',
    backgroundColor: alpha(theme.palette.background.default, 0.72),
    [theme.breakpoints.up('lg')]: {
      paddingLeft: DRAWER_WIDTH
    }
  },
  campaignButton: {
    backgroundColor: '#C5D82E',
    color: '#fff',
    width: '20%',
    margin: theme.spacing(0, 2),
    height: '48px'
  },
  toolbar: {
    backgroundColor: '#108DAA',
    minHeight: APPBAR_MOBILE,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 5)
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: APPBAR_DESKTOP
    }
  },
  transparentButton: {
    backgroundColor: theme.palette.primary.main,
    border: '1px solid white',
    width: '20%'
  },
  plusIcon: {
    fontSize: '45px',
    padding: theme.spacing(0, 2, 0, 0)
  }
}));

// ----------------------------------------------------------------------

TopBar.propTypes = {
  onOpenNav: PropTypes.func,
  className: PropTypes.string
};

function TopBar({ onOpenNav, className }) {
  const classes = useStyles();
  const anchorRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <AppBar className={clsx(classes.root, className)}>
      <Toolbar disableGutters className={classes.toolbar}>
        <Container
          maxWidth="lg"
          sx={{
            lineHeight: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <h1 style={{ color: '#FFFFFF' }}>Klippit</h1>

          <Box sx={{ flexGrow: 1 }} />

          <Button
            underline="none"
            variant="contained"
            component={Link}
            target="_blank"
            className={clsx(classes.campaignButton, classes.transparentButton)}
          >
            Logout
          </Button>

          <Button
            underline="none"
            variant="contained"
            component={Link}
            target="_blank"
            className={clsx(classes.campaignButton)}
          >
            <AddIcon className={classes.plusIcon} />
            New Campaign
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
