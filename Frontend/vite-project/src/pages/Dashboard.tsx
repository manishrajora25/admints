import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";

// import {
//   Users,
//   Activity,
//   CheckCircle,
//   XCircle,
//   Timer,
//   ,
// } from "lucide-react";

import { LuUsers } from "react-icons/lu";
import { FiActivity } from "react-icons/fi";
import { MdCheckCircleOutline } from "react-icons/md";
import { CiCircleAlert } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { IoVideocamOutline } from "react-icons/io5";

import MiniStatCard from "../components/MiniStatCard";
import UserGrowthChart from "../components/UserGrowthChart";
import RevenueTrendChart from "../components/RevenueTrendChart";
import RecentTransactions from "../components/RecentTransactions";
import PopularTemplates from "../components/PopularTemplates";
// import { FaUsers, FaWallet, FaCoins, FaChartLine } from "react-icons/fa";

import userIcon from "../img/user.svg";
import walletIcon from "../img/wallet.svg";
import creditIcon from "../img/credits.svg";
import analyticsIcon from "../img/Vector.svg";




export default function Dashboard() {
  return (
    <div className="flex bg-[black] min-h-screen text-white space-y-6 overflow-y-auto ml-64 mt-[5%]">
      <Sidebar />

      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        {/* Header */}
        <Header />

        {/* Top Big Stats */}
        <div className="w-full pt-[4px] pb-[4px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">

          <StatsCard
            title="Total Users"
            value="12,543"
            percentage="+12.5%"
            positive
            icon={creditIcon}
            iconColor="text-[#3B82F6]"
          />

          <StatsCard
            title="Monthly Revenue"
            value="$89.5K"
            percentage="+8.2%"
            positive
            icon={userIcon}
            iconColor="text-[#22C55E]"
          />

          <StatsCard
            title="Credit Used"
            value="8.54M"
            percentage="+15.3%"
            positive
            icon={walletIcon}
            iconColor="text-[#F97316]"
          />

          <StatsCard
            title="API Calls"
            value="2,45,678"
            percentage="-3.1%"
            positive={false}
            icon={analyticsIcon}
            iconColor="text-[#A855F7]"
          />


        </div>



        {/* Mini Stats Section (Image jaisa) */}
        <div className="grid grid-cols-3 gap-4">

          <MiniStatCard
            title="New Users (7 days)"
            value="1,234"
            icon={<LuUsers size={22} />}
            iconColor="text-blue-500"
          />

          <MiniStatCard
            title="API Usage Today"
            value="45,678 requests"
            icon={<FiActivity size={22} />}
            iconColor="text-green-600"
          />

          <MiniStatCard
            title="System Health"
            value="All Systems Operational"
            icon={<MdCheckCircleOutline size={22} />}
            iconColor="text-emerald-600"
          />

          <MiniStatCard
            title="Failed Generations"
            value="23 (0.05%)"
            icon={<CiCircleAlert size={22} />}
            iconColor="text-orange-500"
          />

          <MiniStatCard
            title="Avg Response Time"
            value="234ms"
            icon={<IoMdTime size={22} />}
            iconColor="text-purple-600"
          />

          <MiniStatCard
            title="Content Generated Today"
            value="8,942 items"
            icon={<IoVideocamOutline size={22} />}
            iconColor="text-pink-600"
          />

        </div>


        {/* Charts Section */}
        <div className="grid grid-cols-2 gap-6">
          <UserGrowthChart />
          <RevenueTrendChart />
        </div>

        {/* Recent Transactions */}
        <RecentTransactions />


        {/* PopularTemplates */}
        <PopularTemplates />


      </div>
    </div>
  );
}
