import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import useIdleLogout from "./hooks/useIdleLogout";

const First = () => {

  useIdleLogout(30 * 60 * 1000);

  return (
    <div className="min-h-screen bg-black text-white">

      <Header />

      <div className="flex">

        <div className="w-64 fixed top-0 left-0 h-screen z-40">
          <Sidebar />
        </div>

        {/* IMPORTANT FIX HERE */}
        <div className="flex-1 ml-64 min-w-0 p-6">
          <Outlet />
        </div>

      </div>
    </div>
  );
};


export default First;
