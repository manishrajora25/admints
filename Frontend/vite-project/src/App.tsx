// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// import Dashboard from "./pages/Dashboard";
// import Users from "./components/BarChart";
// // import Settings from "./components/StatsCard";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Dashboard />,
//   },
//   {
//     path: "/users",
//     element: <Users />,
//   },
//   // {
//   //   path: "/settings",
//   //   element: <Settings />,
//   // },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;



import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import First from "./First";
import Dashboard from "./pages/Dashboard";
import Users from "./components/BarChart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,   // Layout with Header
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
