import React from 'react';
import Signup from '~/components/Signup/Signup';
import Signin from '~/components/Signin/Signin';
import configFile from '~/config';
import { DashBoard } from '~/Pages/Admin/DashBoardPage';
import { SignInPage } from '~/Pages/Admin/SignInPage';
import AdminPages from '~/Pages/Admin';
import UserPages from '~/Pages/User';

export const adminRoutes = [
  { path: configFile.routes.admin, component: DashBoard },
  {
    path: configFile.routes.signInAdmin,
    component: SignInPage,
    layout: React.Fragment,
  },
  {
    path: configFile.routes.adminRoute,
    component: AdminPages,
  },
];
export const userRoutes = [
  {
    path: configFile.routes.signInUser,
    component: Signin,
  },
  {
    path: configFile.routes.signUpUser,
    component: Signup,
  },
  {
    path: configFile.routes.homePage,
    component: UserPages,
  },
];
