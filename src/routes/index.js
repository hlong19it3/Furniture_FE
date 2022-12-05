import React from 'react';
import configFile from '~/config';
import { DashBoard } from '~/Pages/Admin/DashBoardPage';
import { SignInPage } from '~/Pages/Admin/SignInPage';

export const adminRoutes = [
  { path: configFile.routes.admin, component: DashBoard },
  {
    path: configFile.routes.signInAdmin,
    component: SignInPage,
    layout: React.Fragment,
  },
  {
    path: configFile.routes.adminRoute,
    component: DashBoard,
  },
];
