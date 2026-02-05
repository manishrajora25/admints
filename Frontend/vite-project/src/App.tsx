import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import First from "./First";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/UserChart";
import UserPlansPage from "./pages/UserPlansPage";

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
      }
      
      
      
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
