import React from "react";
// import { CartesianGrid } from "recharts";

import MiniStatCard from "../components/MiniStatCard";
import { IoCalendarOutline, IoChevronDown } from "react-icons/io5";
import { FiRefreshCw } from "react-icons/fi";


import { LuUsers } from "react-icons/lu";
import { FiActivity } from "react-icons/fi";
import { MdCheckCircleOutline } from "react-icons/md";
import { CiCircleAlert } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { IoVideocamOutline } from "react-icons/io5";

import grow from "../img/grow.svg";
import Target from "../img/Target.svg";
import creditIcon from "../img/credits.svg";
import analyticsIcon from "../img/Vector.svg";


import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
} from "recharts";




const chartData = [
    { name: "Jul", active: 12000, total: 13000 },
    { name: "Aug", active: 13500, total: 15000 },
    { name: "Sep", active: 15500, total: 17500 },
    { name: "Oct", active: 17500, total: 19500 },
    { name: "Nov", active: 19500, total: 22000 },
    { name: "Dec", active: 21000, total: 24000 },
    { name: "Jan", active: 23000, total: 25500 },
];



const contentData = [
    { week: "Week 1", images: 5600, videos: 3400 },
    { week: "Week 2", images: 6200, videos: 4000 },
    { week: "Week 3", images: 5900, videos: 3800 },
    { week: "Week 4", images: 7000, videos: 4500 },
];

const pieData = [
    { name: "Social Media", value: 44, color: "#3B82F6" },
    { name: "Marketing", value: 28, color: "#8B5CF6" },
    { name: "Education", value: 15, color: "#10B981" },
    { name: "Entertainment", value: 12, color: "#F59E0B" },
];




const Analytics: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white p-2 space-y-10 mt-[5%]">

            {/* Top Controls */}
            <div className="flex items-center gap-4">

                <button
                    className="flex items-center gap-3 
          bg-[#111111] border border-[#1F1F1F] 
          px-5 py-2.5 rounded-xl text-sm
          hover:border-[#2A2A2A] transition"
                >
                    <IoCalendarOutline size={18} className="text-gray-400" />
                    <span>Last 30 days</span>
                    <IoChevronDown size={16} className="text-gray-400" />
                </button>

                <button
                    className="group flex items-center gap-3 
          bg-[#111111] border border-[#1F1F1F] 
          px-5 py-2.5 rounded-xl text-sm
          hover:border-[#2A2A2A] transition"
                >
                    <FiRefreshCw
                        size={18}
                        className="text-gray-400 group-hover:rotate-180 transition-transform duration-500"
                    />
                    <span>Refresh</span>
                </button>
            </div>

            {/* Main Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                <StatCard
                    icon={<img src={grow} alt="analytics" className="w-6 h-6" />}
                    title="Total Sessions"
                    value="245.6K"
                    change="+18.2%"
                    changeSub="vs last period"
                    changeColor="text-emerald-400"
                />

                <StatCard
                    icon={<img src={creditIcon} alt="users" className="w-6 h-6" />}
                    title="Avg. Session Time"
                    value="12m 34s"
                    change="+5.4%"
                    changeSub="vs last period"
                    changeColor="text-emerald-400"
                />

                <StatCard
                    icon={<img src={analyticsIcon} alt="wallet" className="w-6 h-6" />}
                    title="Conversion Rate"
                    value="3.2%"
                    change="+0.8%"
                    changeSub="vs last period"
                    changeColor="text-emerald-400"
                />

                <StatCard
                    icon={<img src={Target} alt="target" className="w-6 h-6" />}
                    title="Active Users"
                    value="8.9K"
                    change="+12.8%"
                    changeSub="vs last period"
                    changeColor="text-emerald-400"
                />

            </div>



            {/* Small Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

                <MiniStatCard
                    title="New Users (7 days)"
                    value="1,234"
                    icon={<LuUsers size={18} />}
                    iconColor="text-blue-500"
                />

                <MiniStatCard
                    title="API Usage Today"
                    value="45,678 requests"
                    icon={<FiActivity size={18} />}
                    iconColor="text-emerald-500"
                />

                <MiniStatCard
                    title="System Health"
                    value="All Systems Operational"
                    icon={<MdCheckCircleOutline size={18} />}
                    iconColor="text-emerald-500"
                />

                <MiniStatCard
                    title="Failed Generations"
                    value="23 (0.05%)"
                    icon={<CiCircleAlert size={18} />}
                    iconColor="text-orange-500"
                />

                <MiniStatCard
                    title="Unused Subscription Credits"
                    value="₹3.80Cr credits"
                    icon={<IoMdTime size={18} />}
                    iconColor="text-purple-500"
                />

                <MiniStatCard
                    title="Content Generated Today"
                    value="8,942 items"
                    icon={<IoVideocamOutline size={18} />}
                    iconColor="text-orange-500"
                />

            </div>



            {/* Chart Section */}
            <div className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-2xl p-4">

                <h2 className="text-lg font-semibold mb-8">
                    User Growth & Activity
                </h2>

                <div className="h-[380px]">

                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>

                            {/* Grid Lines */}
                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="#1F1F1F"
                            />

                            {/* X Axis */}
                            <XAxis
                                dataKey="name"
                                stroke="#6B7280"
                                tick={{ fill: "#6B7280", fontSize: 12 }}
                            />

                            {/* Y Axis */}
                            <YAxis
                                stroke="#6B7280"
                                tick={{ fill: "#6B7280", fontSize: 12 }}
                            />

                            {/* Tooltip */}
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#111111",
                                    border: "1px solid #1F1F1F",
                                    borderRadius: "12px",
                                    color: "#fff"
                                }}
                                labelStyle={{ color: "#9CA3AF" }}
                            />

                            {/* Active Users Line */}
                            <Line
                                type="monotone"
                                dataKey="active"
                                stroke="#10B981"
                                strokeWidth={3}
                                dot={{ r: 5 }}
                                activeDot={{ r: 7 }}
                            />

                            {/* Total Users Line */}
                            <Line
                                type="monotone"
                                dataKey="total"
                                stroke="#8B5CF6"
                                strokeWidth={3}
                                dot={{ r: 5 }}
                                activeDot={{ r: 7 }}
                            />

                        </LineChart>
                    </ResponsiveContainer>

                </div>

                {/* Custom Legend */}
                <div className="flex items-center justify-center gap-6 mt-6 text-sm">

                    <div className="flex items-center gap-2 text-emerald-400">
                        <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                        Active Users
                    </div>

                    <div className="flex items-center gap-2 text-purple-400">
                        <span className="w-3 h-3 rounded-full bg-purple-400"></span>
                        Total Users
                    </div>

                </div>

            </div>



            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">

                {/* Content Generation */}
                <div className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-2xl p-4">
                    <h3 className="text-lg font-semibold mb-6">
                        Content Generation
                    </h3>

                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={contentData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1F1F1F" />
                                <XAxis dataKey="week" stroke="#6B7280" />
                                <YAxis stroke="#6B7280" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: "#111111",
                                        border: "1px solid #1F1F1F",
                                        borderRadius: "10px"
                                    }}
                                />
                                <Bar dataKey="images" fill="#3B82F6" radius={[6, 6, 0, 0]} />
                                <Bar dataKey="videos" fill="#8B5CF6" radius={[6, 6, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Legend */}
                    <div className="flex justify-center gap-6 mt-4 text-sm">
                        <div className="flex items-center gap-2 text-blue-400">
                            <span className="w-3 h-3 bg-blue-500 rounded-sm"></span>
                            Images
                        </div>
                        <div className="flex items-center gap-2 text-purple-400">
                            <span className="w-3 h-3 bg-purple-500 rounded-sm"></span>
                            Videos
                        </div>
                    </div>
                </div>


                {/* Template Usage */}
                <div className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-8">
                        Template Usage by Category
                    </h3>

                    <div className="h-[320px] flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>

                                <Pie
                                    data={pieData}
                                    dataKey="value"
                                    nameKey="name"
                                    outerRadius={110}
                                    innerRadius={0}
                                    paddingAngle={2}
                                    label={({ name, percent, x, y, fill }) => (
                                        <text
                                            x={x}
                                            y={y}
                                            fill={fill}
                                            textAnchor={x > 200 ? "start" : "end"}
                                            dominantBaseline="central"
                                            fontSize={13}
                                            fontWeight={500}
                                        >
                                            {`${name} ${(percent * 100).toFixed(0)}%`}
                                        </text>
                                    )}
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={entry.color}
                                            stroke="#ffffff"
                                            strokeWidth={1}
                                        />
                                    ))}
                                </Pie>

                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: "#111111",
                                        border: "1px solid #1F1F1F",
                                        borderRadius: "10px",
                                        color: "#fff",
                                    }}
                                    labelStyle={{ color: "#9CA3AF" }}
                                />

                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>



            <div className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-2xl p-6 mt-8">

                <h3 className="text-lg font-semibold mb-6">
                    Revenue Metrics
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    <RevenueCard
                        title="MRR"
                        value="₹89.4L"
                        subtitle="+15.2% growth"
                        bg="bg-[#E9D5FF]"
                        valueColor="text-purple-700"
                        subColor="text-purple-600"
                    />

                    <RevenueCard
                        title="ARPU"
                        value="₹1,247"
                        subtitle="+8.3% vs last month"
                        bg="bg-[#D1FAE5]"
                        valueColor="text-green-700"
                        subColor="text-green-600"
                    />

                    <RevenueCard
                        title="LTV"
                        value="₹18,450"
                        subtitle="Avg customer lifetime"
                        bg="bg-[#DBEAFE]"
                        valueColor="text-blue-700"
                        subColor="text-blue-600"
                    />

                    <RevenueCard
                        title="Churn Rate"
                        value="4.2%"
                        subtitle="-1.1% improvement"
                        bg="bg-[#FED7AA]"
                        valueColor="text-orange-700"
                        subColor="text-orange-600"
                    />

                </div>
            </div>



        </div>
    );
};

export default Analytics;


/* ================= Reusable Components ================= */

interface StatCardProps {
    icon: React.ReactNode;
    title: string;
    value: string;
    change: string;
    changeSub?: string;
    changeColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({
    icon,
    title,
    value,
    change,
    changeSub = "",
    changeColor = "text-emerald-400",
}) => {
    return (
        <div className="bg-[#0F0F0F] border border-[#1F1F1F] 
      rounded-2xl p-4 
      hover:border-[#2A2A2A] transition">

            {/* Icon */}
            <div className="mb-6">
                {icon}
            </div>

            {/* Title */}
            <p className="text-gray-400 text-sm mb-2">
                {title}
            </p>

            {/* Value */}
            <h3 className="text-2xl font-semibold text-white">
                {value}
            </h3>

            {/* Change */}
            <div className="mt-2 text-sm flex items-center gap-1">
                <span className={`${changeColor}`}>
                    {change}
                </span>
                <span className="text-gray-500">
                    {changeSub}
                </span>
            </div>

        </div>
    );
};


interface SmallCardProps {
    icon: React.ReactNode;
    label: string;
    value: string;
}

const SmallCard: React.FC<SmallCardProps> = ({
    icon,
    label,
    value,
}) => {
    return (
        <div className="bg-[#111111] border border-[#1F1F1F] 
    rounded-xl p-5 flex items-center justify-between
    hover:border-[#2A2A2A] transition">

            <div>
                <p className="text-gray-400 text-sm">
                    {label}
                </p>
                <p className="text-white font-medium mt-2">
                    {value}
                </p>
            </div>

            <div className="text-gray-400">
                {icon}
            </div>

        </div>
    );
};





interface RevenueCardProps {
    title: string;
    value: string;
    subtitle: string;
    bg: string;
    valueColor: string;
    subColor: string;
  }
  
  const RevenueCard: React.FC<RevenueCardProps> = ({
    title,
    value,
    subtitle,
    bg,
    valueColor,
    subColor,
  }) => {
    return (
      <div className={`${bg} rounded-xl p-5`}>
  
        <p className="text-sm font-medium mb-2 text-gray-700">
          {title}
        </p>
  
        <h4 className={`text-2xl font-bold ${valueColor}`}>
          {value}
        </h4>
  
        <p className={`text-sm mt-2 ${subColor}`}>
          {subtitle}
        </p>
  
      </div>
    );
  };
  