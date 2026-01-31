import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./components/BarChart";
// import Settings from "./components/StatsCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  // {
  //   path: "/settings",
  //   element: <Settings />,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
