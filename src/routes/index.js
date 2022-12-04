import React from "react";
import Login from "~/Components/Admin/Signin/Signin";
import configFile from "~/config";
import { DashBoard } from "~/Pages/Admin/DashBoardPage";

export const adminRoutes = [
  { path: configFile.routes.admin, component: DashBoard },
  {
    path: configFile.routes.signInAdmin,
    component: Login,
    layout: React.Fragment,
  },
];
