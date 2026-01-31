import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
  } from "recharts";
  
  const data = [
    { month: "Jul", users: 6000 },
    { month: "Aug", users: 7000 },
    { month: "Sep", users: 4500 },
    { month: "Oct", users: 9000 },
    { month: "Nov", users: 8000 },
    { month: "Dec", users: 6500 },
    { month: "Jan", users: 4500 },
  ];
  
  export default function UserGrowthChart() {
    return (
      <div className="bg-gradient-to-b from-[#131313] to-[#0f0f14] p-5 rounded-xl">
        <h2 className="text-sm font-semibold mb-4">User Growth</h2>
        <div className="w-full h-60">
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid stroke="#222" strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#a855f7"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
  