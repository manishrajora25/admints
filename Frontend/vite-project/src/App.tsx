import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import First from "./First";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/UserChart";
import UserPlansPage from "./pages/UserPlansPage";
import Notifications from "./pages/Notifications";
import Analytics from "./pages/Analytics";
import Setting from "./pages/SystemSettings"
import Creditsplans from  "./pages/Creditsplans"



const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,  // Layout with Header
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/pricing",
        element: <UserPlansPage />,
      },
      {
        path: "/notification",
        element: <Notifications />,
      },
      {
        path: "/settings",
        element: <Setting />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/creditsplans",
        element: <Creditsplans />,
      }
      
      
      
      
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
