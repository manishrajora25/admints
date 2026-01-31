import { FaSearch } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function UsersPage() {
  const users = [
    {
      name: "John Doe",
      email: "john@example.com",
      subscription: "Professional",
      credits: "385",
      spent: "$500",
      status: "Active",
      lastActive: "2 hours ago",
    },
    {
      name: "John Doe",
      email: "john@example.com",
      subscription: "Enterprise",
      credits: "385",
      spent: "$500",
      status: "Active",
      lastActive: "5 minutes ago",
    },
    {
      name: "John Doe",
      email: "john@example.com",
      subscription: "Starter",
      credits: "385",
      spent: "$500",
      status: "Active",
      lastActive: "1 day ago",
    },
    {
      name: "John Doe",
      email: "john@example.com",
      subscription: "Professional",
      credits: "385",
      spent: "$500",
      status: "Suspended",
      lastActive: "2 weeks ago",
    },
  ];

  return (
    <div className="flex bg-black min-h-screen text-white w-[100%]">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">

        {/* Header */}
        <Header />

        {/* Page Content */}
        <div className="p-6 space-y-6">

          {/* Top Stats */}
          <div className="grid grid-cols-4 gap-6 mt-[7%]">
            {["Total Users", "Active Users", "New Users", "Suspended"].map(
              (item, i) => (
                <div
                  key={i}
                  className="bg-[#131313] border border-[#1F1F1F] rounded-xl p-5"
                >
                  <p className="text-gray-400 text-sm">{item}</p>
                  <h2 className="text-2xl font-semibold mt-2">
                    {i === 0 && "12,543"}
                    {i === 1 && "$89.5K"}
                    {i === 2 && "8.54M"}
                    {i === 3 && "40"}
                  </h2>
                </div>
              )
            )}
          </div>

          {/* Search + Filters */}
          <div className="flex items-center justify-between bg-[#131313] border border-[#1F1F1F] rounded-xl p-4">

            {/* Search Input */}
            <div
              className="
    flex items-center
    w-[694px]
    h-[42px]
    bg-[#131313]
    rounded-[10px]
    border border-[#1F1F1F]
    relative
  "
            >
              <FaSearch className="absolute left-4 text-gray-400 text-sm" />

              <input
                type="text"
                placeholder="Search by name, email, or user ID..."
                className="
      w-full
      h-full
      bg-transparent
      outline-none
      text-sm
      text-gray-300
      pl-10
      pr-4
    "
              />
            </div>

            {/* Right Side Filters */}
            <div className="flex items-center gap-3">

              {/* All Status */}
              <select
                className="
      w-[136px]
      h-[42px]
      bg-[#131313]
      rounded-[8px]
      border border-[#1F1F1F]
      px-4
      text-sm
      text-gray-300
      outline-none
    "
              >
                <option>All status</option>
              </select>

              {/* All Plans */}
              <select
                className="
      w-[136px]
      h-[42px]
      bg-[#131313]
      rounded-[8px]
      border border-[#1F1F1F]
      px-4
      text-sm
      text-gray-300
      outline-none
    "
              >
                <option>All Plans</option>
              </select>

              {/* Export Button */}
              <button
                className="
      h-[42px]
      px-5
      rounded-[8px]
      text-sm
      font-medium
    "
                style={{
                  background:
                    "linear-gradient(90deg, #F88B65 0%, #E85E8F 36%, #D947AA 57%, #A04BCA 77%, #6C52E9 100%)",
                }}
              >
                Export
              </button>

            </div>
          </div>


          {/* Table */}
          <div className="bg-[#131313] border border-[#1F1F1F] rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-[#1a1a25] text-gray-400">
                <tr>
                  <th className="text-left p-4">User</th>
                  <th className="text-left p-4">Subscription</th>
                  <th className="text-left p-4">Credits</th>
                  <th className="text-left p-4">Total Spent</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Last Active</th>
                  <th className="text-left p-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#1F1F1F] hover:bg-[#1a1a25]"
                  >
                    <td className="p-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-xs font-bold">
                        A
                      </div>
                      <div>
                        <p>{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </td>

                    <td className="p-4">{user.subscription}</td>

                    <td className="p-4">
                      <p>{user.credits}</p>
                      <p className="text-xs text-gray-500">1250 used</p>
                    </td>

                    <td className="p-4 text-emerald-400 font-medium">
                      {user.spent}
                    </td>

                    <td className="p-4">
                      <span
                        className={`text-xs px-3 py-1 rounded-full ${user.status === "Active"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "bg-red-500/10 text-red-400"
                          }`}
                      >
                        {user.status}
                      </span>
                    </td>

                    <td className="p-4 text-gray-500">
                      {user.lastActive}
                    </td>

                    <td className="p-4 text-gray-400">
                      <FiMoreVertical />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex items-center justify-between p-4 text-sm text-gray-400">
              <p>Showing 6 of 8 users</p>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 bg-[#1a1a25] rounded">Previous</button>
                <button className="px-3 py-1 bg-purple-600 rounded">1</button>
                <button className="px-3 py-1 bg-[#1a1a25] rounded">2</button>
                <button className="px-3 py-1 bg-[#1a1a25] rounded">Next</button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
