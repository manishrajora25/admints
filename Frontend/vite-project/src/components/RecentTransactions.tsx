type Transaction = {
    user: string;
    type: string;
    amount: string;
    credits: string;
    status: "Completed" | "Pending" | "Failed";
    date: string;
  };
  
  const transactions: Transaction[] = [
    {
      user: "John Doe",
      type: "Purchase",
      amount: "$400",
      credits: "$500",
      status: "Completed",
      date: "2026-01-08 10:30 AM",
    },
    {
      user: "John Doe",
      type: "Purchase",
      amount: "$400",
      credits: "$500",
      status: "Completed",
      date: "2026-01-08 10:30 AM",
    },
    {
      user: "John Doe",
      type: "Purchase",
      amount: "$400",
      credits: "$500",
      status: "Completed",
      date: "2026-01-08 10:30 AM",
    },
    {
      user: "John Doe",
      type: "Purchase",
      amount: "$400",
      credits: "$500",
      status: "Completed",
      date: "2026-01-08 10:30 AM",
    },
    {
      user: "John Doe",
      type: "Purchase",
      amount: "$400",
      credits: "$500",
      status: "Completed",
      date: "2026-01-08 10:30 AM",
    },
  ];
  
  export default function RecentTransactions() {
    return (
      <div className="bg-gradient-to-b from-[#131313] to-[#0f0f14] p-6 rounded-xl shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <button className="text-sm text-purple-400 hover:text-purple-500">
            View All
          </button>
        </div>
  
        {/* Table */}
        <div className="overflow-x-auto">
        <table className="w-full table-fixed text-sm">

        <thead>
  <tr className="text-gray-500 border-b border-[#1f1f2b]">
  <th className="text-left py-4 px-4 w-[17%]">User</th>
<th className="text-left py-4 px-4 w-[17%]">Type</th>
<th className="text-left py-4 px-4 w-[17%]">Amount</th>
<th className="text-left py-4 px-4 w-[16%]">Credits</th>
<th className="text-left py-4 px-4 w-[17%]">Status</th>
<th className="text-left py-4 px-4 w-[17%]">Date</th>

  </tr>
</thead>

<tbody>
  {transactions.map((t, i) => (
    <tr
      key={i}
      className="border-b border-gray-800 hover:bg-[#1a1a25] transition"
    >
      <td className="py-3 px-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-xs font-bold">
            A
          </div>
          <span>{t.user}</span>
        </div>
      </td>

      <td className="px-4">{t.type}</td>

      <td className="px-4 text-green-400 font-medium">
        {t.amount}
      </td>

      <td className="px-4 text-green-400 font-medium">
        {t.credits}
      </td>

      <td className="px-4">
        <span className="px-3 py-1 rounded-full text-xs bg-green-500/10 text-green-400">
          {t.status}
        </span>
      </td>

      <td className="px-4 text-gray-400">
        {t.date}
      </td>
    </tr>
  ))}
</tbody>

          </table>
        </div>
      </div>
    );
  }
  