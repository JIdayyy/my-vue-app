import { RouteObject, useRoutes } from "react-router";
import Home from "../../pages/Home";
import Layout from "../Layout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

const AppRoutes = () => useRoutes(routes);

export default AppRoutes;
