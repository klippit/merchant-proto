import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import useBreakpoints from 'src/hooks/useBreakpoints';
import { varFadeInDown, MotionInView } from 'src/components/Animate';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Box } from '@material-ui/core';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import LoginForm from './../../auth/LoginView/LoginForm';

const useStyles = makeStyles((theme) => {
  const isLight = theme.palette.mode === 'light';

  const shadowCard = (opacity) =>
    isLight
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  const shadowIcon = (color) => {
    return {
      filter: `drop-shadow(2px 2px 2px ${alpha(
        theme.palette[color].main,
        0.48
      )})`
    };
  };

  return {
    root: {
      paddingTop: theme.spacing(15),
      [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(15)
      }
    },
    heading: {
      marginBottom: theme.spacing(10),
      [theme.breakpoints.up('md')]: {
        marginBottom: theme.spacing(25)
      }
    },
    card: {
      maxWidth: 380,
      minHeight: 440,
      margin: 'auto',
      textAlign: 'center',
      padding: theme.spacing(10, 5, 0),
      boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
      [theme.breakpoints.up('md')]: {
        boxShadow: 'none',
        backgroundColor: theme.palette.grey[isLight ? 200 : 800]
      }
    },
    cardLeft: {
      [theme.breakpoints.up('md')]: {
        marginTop: -40
      }
    },
    cardCenter: {
      [theme.breakpoints.up('md')]: {
        marginTop: -80,
        backgroundColor: theme.palette.background.paper,
        boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
        '&:before': {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          content: "''",
          margin: 'auto',
          position: 'absolute',
          width: 'calc(100% - 40px)',
          height: 'calc(100% - 40px)',
          borderRadius: theme.shape.borderRadiusMd,
          backgroundColor: theme.palette.background.paper,
          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`
        }
      }
    },
    cardIcon: {
      width: 40,
      height: 40,
      margin: 'auto',
      marginBottom: theme.spacing(10)
    },
    cardIconLeft: shadowIcon('info'),
    cardIconCenter: shadowIcon('error'),
    cardIconRight: shadowIcon('primary')
  };
});

MinimalHelps.propTypes = {
  className: PropTypes.string
};

function MinimalHelps({ className }) {
  const classes = useStyles();
  const isDesktop = useBreakpoints('up', 'lg');
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema
  });

  return (
    <div className={clsx(classes.root, className)}>
      <Container maxWidth="lg">
        <Container maxWidth="sm">
          <div className={classes.content}>
            <Box sx={{ mb: 5, mt: 5, display: 'flex', alignItems: 'center' }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h2" style={{ color: '#108daa' }}>
                  Merchant Login?
                </Typography>
              </Box>
            </Box>
            <LoginForm formik={formik} />
          </div>
        </Container>
      </Container>
    </div>
  );
}
export default MinimalHelps;
