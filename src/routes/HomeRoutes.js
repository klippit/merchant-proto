import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import HomeLayout from 'src/layouts/HomeLayout';

// ----------------------------------------------------------------------

const HomeRoutes = {
  path: '*',
  layout: HomeLayout,
  routes: [
    {
      exact: true,
      path: '/',
      component: lazy(() => import('src/views/auth/LoginView'))
    },
    {
      exact: true,
      path: '/test',
      component: lazy(() => import('src/components/BarItems'))
    },
    {
      exact: true,
      path: '/components',
      component: lazy(() => import('src/views/home/ComponentsView'))
    },
    {
      component: () => <Redirect to="/404" />
    }
  ]
};

export default HomeRoutes;
