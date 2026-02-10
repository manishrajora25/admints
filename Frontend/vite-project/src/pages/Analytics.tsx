import React from "react";
import {
  ArrowUpRight,
  Users,
  Activity,
  Target,
  RefreshCcw,
  Calendar,
  CheckCircle,
  AlertCircle,
  Zap,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jul", active: 12000, total: 13000 },
  { name: "Aug", active: 13500, total: 15000 },
  { name: "Sep", active: 15500, total: 17500 },
  { name: "Oct", active: 17500, total: 19500 },
  { name: "Nov", active: 19500, total: 22000 },
  { name: "Dec", active: 21000, total: 24000 },
  { name: "Jan", active: 23000, total: 25500 },
];

const Analytics: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white p-2 space-y-8 mt-[5%]">

      {/* Top Controls */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-[#111111] border border-[#1F1F1F] px-4 py-2 rounded-lg text-sm">
          <Calendar size={16} />
          Last 30 days
        </button>

        <button className="flex items-center gap-2 bg-[#111111] border border-[#1F1F1F] px-4 py-2 rounded-lg text-sm">
          <RefreshCcw size={16} />
          Refresh
        </button>
      </div>

      {/* Main Stat Cards */}
      <div className="grid grid-cols-4 gap-6">

        <StatCard
          icon={<ArrowUpRight className="text-green-400" />}
          title="Total Sessions"
          value="245.6K"
          change="+18.2% last period"
        />

        <StatCard
          icon={<Users className="text-blue-400" />}
          title="Avg. Session Time"
          value="12m 34s"
          change="+5.4% last period"
        />

        <StatCard
          icon={<Activity className="text-purple-400" />} 
          title="Conversion Rate"
          value="3.2%"
          change="+0.85% last period"
        />

        <StatCard
          icon={<Target className="text-orange-400" />}
          title="Active Users"
          value="8.9K"
          change="+12.6% last period"
        />
      </div>

      {/* Small Info Cards */}
      <div className="grid grid-cols-3 gap-6">

        <SmallCard icon={<Users size={16} />} label="New Users (7 days)" value="1,234" />
        <SmallCard icon={<Zap size={16} />} label="API Usage Today" value="45,678 requests" />
        <SmallCard icon={<CheckCircle size={16} />} label="System Health" value="All Systems Operational" />

      </div>

      <div className="grid grid-cols-3 gap-6">

        <SmallCard icon={<AlertCircle size={16} />} label="Failed Generations" value="23 (0.05%)" />
        <SmallCard icon={<Target size={16} />} label="Unused Subscription Credits" value="₹3.80Cr credits" />
        <SmallCard icon={<Activity size={16} />} label="Content Generated Today" value="8,942 items" />

      </div>

      {/* Chart Section */}
      <div className="bg-[#111111] border border-[#1F1F1F] rounded-2xl p-8">
        <h2 className="text-lg font-semibold mb-6">
          User Growth & Activity
        </h2>

        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#555" />
              <YAxis stroke="#555" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="active"
                stroke="#10B981"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="total"
                stroke="#8B5CF6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

export default Analytics;


// ================= Reusable Components =================

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  title,
  value,
  change,
}) => {
  return (
    <div className="bg-[#111111] border border-[#1F1F1F] rounded-2xl p-6">
      <div className="mb-4">{icon}</div>
      <p className="text-gray-400 text-sm">{title}</p>
      <h3 className="text-2xl font-semibold mt-1">{value}</h3>
      <p className="text-green-400 text-sm mt-1">{change}</p>
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
    <div className="bg-[#111111] border border-[#1F1F1F] rounded-xl p-5 flex items-center justify-between">
      <div>
        <p className="text-gray-400 text-sm">{label}</p>
        <p className="text-white font-medium mt-1">{value}</p>
      </div>
      <div className="text-gray-400">{icon}</div>
    </div>
  );
};
