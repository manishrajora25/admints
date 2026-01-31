import { NavLink } from "react-router-dom";
import logoimg from "../img/logo-icon.svg";

import dashboardIcon from "../img/dashboard.svg";
import userIcon from "../img/users.svg";
import templateIcon from "../img/template.svg";
import creditIcon from "../img/creditss.svg";
import paymentIcon from "../img/payment.svg";
import analyticsIcon from "../img/analytics.svg";
import notificationIcon from "../img/notification.svg";
import settingsIcon from "../img/settings.svg";

export default function Sidebar() {
  const menu = [
    { name: "Dashboard", icon: dashboardIcon, path: "/" },
    { name: "User", icon: userIcon, path: "/users" },
    { name: "Templates", icon: templateIcon, path: "/templates" },
    { name: "Credits & Plans", icon: creditIcon, path: "/credits" },
    { name: "Payments", icon: paymentIcon, path: "/payments" },
    { name: "Analytics", icon: analyticsIcon, path: "/analytics" },
    { name: "Notifications", icon: notificationIcon, path: "/notifications" },
    { name: "Settings", icon: settingsIcon, path: "/settings" },
  ];

  return (
    <div className="fixed top-0 left-0 w-64 h-screen bg-[#131313] text-white flex flex-col justify-between p-4 z-50 border-r border-[#1F1F1F] shadow-[0px_1px_3px_0px_#0000001A]">

      {/* Top Section */}
      <div>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-10 cursor-pointer">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center p-2"
            style={{
              background:
                "linear-gradient(90deg, #F88B65 0%, #E85E8F 36.54%, #D947AA 57.21%, #A04BCA 77.4%, #6C52E9 100%)",
            }}
          >
            <img
              src={logoimg}
              alt="logo"
              className="w-5 h-5 object-contain"
            />
          </div>

          <span className="font-semibold text-[20px] bg-gradient-to-r from-[#F88B65] via-[#D947AA] to-[#6C52E9] bg-clip-text text-transparent">
            Logo
          </span>
        </div>

        {/* Menu */}
        <ul className="space-y-2">
          {menu.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 h-[44px] w-[223px] rounded-[10px] transition shadow-[0px_1px_3px_0px_#0000001A] ${
                    isActive
                      ? "text-white"
                      : "text-white hover:text-white hover:bg-[#1a1a25] "
                  }`
                }
                style={({ isActive }) =>
                  isActive
                    ? {
                        background:
                          "linear-gradient(90deg, #F88B65 0%, #E85E8F 36.54%, #D947AA 57.21%, #A04BCA 77.4%, #6C52E9 100%)",
                      }
                    : undefined
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={item.icon}
                      alt={item.name}
                      className={`w-[16px] h-[16px] object-contain ${
                        isActive
                          ? "filter brightness-0 invert"
                          : ""
                      }`}
                    />
                    <span className="text-base">{item.name}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Profile */}
      <div className="flex items-center gap-3 bg-[#15151f] p-3 rounded-xl cursor-pointer">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
          style={{
            background:
              "linear-gradient(90deg, #F88B65 0%, #E85E8F 36.54%, #D947AA 57.21%, #A04BCA 77.4%, #6C52E9 100%)",
            boxShadow:
              "0px 2px 4px -2px #0000001A, 0px 4px 6px -1px #0000001A",
          }}
        >
          SA
        </div>
        <div className="text-sm">
          <p className="font-semibold">Super Admin</p>
          <p className="text-gray-400 text-xs">admin@aividgen.com</p>
        </div>
      </div>
    </div>
  );
} 