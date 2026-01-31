import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
  } from "recharts";
  
  const data = [
    { month: "Jul", revenue: 5000 },
    { month: "Aug", revenue: 12000 },
    { month: "Sep", revenue: 40000 },
    { month: "Oct", revenue: 80000 },
    { month: "Nov", revenue: 95000 },
    { month: "Dec", revenue: 70000 },
    { month: "Jan", revenue: 35000 },
  ];
  
  export default function RevenueTrendChart() {
    return (
      <div className="bg-gradient-to-b from-[#131313] to-[#0f0f14] p-5 rounded-xl">
        <h2 className="text-sm font-semibold mb-4">Revenue Trend</h2>
        <div className="w-full h-60">
        <ResponsiveContainer>
  <BarChart data={data}>
    <CartesianGrid stroke="#222" strokeDasharray="3 3" />
    <XAxis dataKey="month" stroke="#888" />
    <YAxis stroke="#888" />
    <Tooltip />
    <Bar dataKey="revenue" fill="url(#colorRevenue)" radius={[6, 6, 0, 0]} />

    <defs>
      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F88B65" />
        <stop offset="36.54%" stopColor="#E85E8F" />
        <stop offset="57.21%" stopColor="#D947AA" />
        <stop offset="77.4%" stopColor="#A04BCA" />
        <stop offset="100%" stopColor="#6C52E9" />
      </linearGradient>
    </defs>
  </BarChart>
</ResponsiveContainer>

        </div>
      </div>
    );
  }
  