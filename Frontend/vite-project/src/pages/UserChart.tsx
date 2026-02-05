import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";



export default function UsersPage() {

  const users = Array.from({ length: 36 }, (_, i) => ({
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    subscription: ["Starter", "Professional", "Enterprise"][i % 3],
    credits: "385",
    spent: "$500",
    status: ["Active", "Inactive", "Suspended"][i % 3],
    lastActive: "2 hours ago",
  }));
  
  

  const [statusFilter, setStatusFilter] = useState("All status");
  const [planFilter, setPlanFilter] = useState("All Plans");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageGroup, setPageGroup] = useState(0);
  
  const usersPerPage = 6;
  const pagesPerGroup = 3;
  
  

  const filteredUsers = users.filter((user) => {
    return (
      (statusFilter === "All status" || user.status === statusFilter) &&
      (planFilter === "All Plans" || user.subscription === planFilter)
    );
  });

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden ">

    <div className="w-full max-w-[1800px] mx-auto px-2 py-2 space-y-6">

          {/* Top Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[7%]">
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

            <div className="flex items-center w-full max-w-[694px] h-[42px] bg-[#131313] rounded-[10px] border border-[#1F1F1F] relative">
              <FaSearch className="absolute left-4 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search by name, email, or user ID..."
                className="w-full h-full bg-transparent outline-none text-sm text-gray-300 pl-10 pr-4"
              />
            </div>

            <div className="flex items-center gap-3">

              {/* Status Filter */}
              <select
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-[136px] h-[42px] bg-[#131313] rounded-[8px] border border-[#1F1F1F] px-4 text-sm text-gray-300 outline-none"
              >
                <option>All status</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Suspended</option>
              </select>

              {/* Plan Filter */}
              <select
                value={planFilter}
                onChange={(e) => {
                  setPlanFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-[136px] h-[42px] bg-[#131313] rounded-[8px] border border-[#1F1F1F] px-4 text-sm text-gray-300 outline-none"
              >
                <option>All Plans</option>
                <option>Starter</option>
                <option>Professional</option>
                <option>Enterprise</option>
              </select>

              <button
  className="h-[42px] px-5 rounded-[8px] text-sm font-medium flex items-center gap-2 text-white"
  style={{
    background:
      "linear-gradient(90deg, #F88B65 0%, #E85E8F 36%, #D947AA 57%, #A04BCA 77%, #6C52E9 100%)",
  }}
>
  <FiDownload size={16} />
  Export
</button>


            </div>
          </div>

          {/* Table */}
          <div className="bg-[#131313] border border-[#1F1F1F] rounded-xl overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#131310] text-white">
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
                {currentUsers.map((user, index) => (
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
                        className={`text-xs px-3 py-1 rounded-full ${
                          user.status === "Active"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : user.status === "Inactive"
                            ? "bg-yellow-500/10 text-yellow-400"
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
          {/* Pagination */}
{/* Pagination */}
<div className="flex items-center justify-end p-6">
  <div className="flex items-center gap-3 bg-[#0f0f0f] p-2 rounded-xl">

    {/* Previous Group */}
    <button
  onClick={() => {
    if (pageGroup > 0) {
      const newGroup = pageGroup - 1;
      setPageGroup(newGroup);
      setCurrentPage(newGroup * pagesPerGroup + 1);
    }
  }}
  disabled={pageGroup === 0}
  className="px-4 py-2 rounded-lg border border-[#1F1F1F] bg-[#131313] hover:bg-[#1a1a25] disabled:opacity-40"
>
  Previous
</button>


    {/* Page Numbers */}
    {Array.from({ length: pagesPerGroup }).map((_, i) => {
      const pageNumber = pageGroup * pagesPerGroup + i + 1;
      if (pageNumber > totalPages) return null;

      return (
        <button
          key={pageNumber}
          onClick={() => setCurrentPage(pageNumber)}
          className={`px-4 py-2 rounded-lg border border-[#1F1F1F] ${
            currentPage === pageNumber
              ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
              : "bg-[#131313] hover:bg-[#1a1a25]"
          }`}
        >
          {pageNumber}
        </button>
      );
    })}

    {/* Next Group */}
    <button
  onClick={() => {
    const maxGroup = Math.floor((totalPages - 1) / pagesPerGroup);

    if (pageGroup < maxGroup) {
      const newGroup = pageGroup + 1;
      setPageGroup(newGroup);
      setCurrentPage(newGroup * pagesPerGroup + 1);
    }
  }}
  disabled={pageGroup >= Math.floor((totalPages - 1) / pagesPerGroup)}
  className="px-4 py-2 rounded-lg border border-[#1F1F1F] bg-[#131313] hover:bg-[#1a1a25] disabled:opacity-40"
>
  Next
</button>
  </div>
</div>
  </div>
  </div>
</div>
    
  );
}