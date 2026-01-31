import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const First = () => {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Header */}
      <Header />

      {/* Body Section */}
      <div className="flex">

        {/* Sidebar */}
        <div className="w-64 fixed top-0 left-0 h-screen z-40">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64 p-6">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default First;
