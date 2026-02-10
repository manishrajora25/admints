import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { CheckCircle, XCircle, Clock, Plus } from "lucide-react";
import instance from "../axiosConfig";


<div className="flex justify-between items-center bg-[#131313] border border-[#1F1F1F] rounded-xl p-4 mb-8">

  {/* Search */}
  <div className="relative w-[700px]">
    <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
    <input
      type="text"
      placeholder="Search by name, email or user ID"
      className="w-full h-[42px] bg-transparent border border-[#1F1F1F] rounded-lg pl-10 text-sm outline-none text-white"
    />
  </div>

  {/* Filters + Export */}
  <div className="flex items-center gap-3">

    <select
      className="bg-[#131313] border border-[#1F1F1F] rounded-lg px-4 h-[42px] text-sm text-white outline-none"
    >
      <option>All Status</option>
      <option>ACTIVE</option>
      <option>INACTIVE</option>
      <option>SUSPENDED</option>
    </select>

    <select
      className="bg-[#131313] border border-[#1F1F1F] rounded-lg px-4 h-[42px] text-sm text-white outline-none"
    >
      <option>All Plans</option>
      <option>Starter</option>
      <option>Professional</option>
      <option>Enterprise</option>
    </select>

    <button
      className="px-5 h-[42px] rounded-lg flex items-center gap-2 text-white text-sm"
      style={{
        background:
          "linear-gradient(90deg,#F88B65,#E85E8F,#D947AA,#A04BCA,#6C52E9)",
      }}
    >
      <FiDownload size={16} />
      Export
    </button>

  </div>
</div>


type Priority = "High" | "Medium" | "Urgent" | "Low";
type Status = "Sent" | "Scheduled" | "Failed";

interface NotificationItem {
  title: string;
  desc: string;
  type: string;
  user: string;
  priority: Priority;
  status: Status;
  date: string;
}

const Notifications: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [sendTime, setSendTime] = useState("Send Now");
  const [scheduleDate, setScheduleDate] = useState("");

  const [data, setData] = useState<NotificationItem[]>([]);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const [stats, setStats] = useState({
    totalSent: 0,
    scheduled: 0,
    avgOpenRate: 0,
    avgClickRate: 0,
  });

  const [formData, setFormData] = useState({
    title: "",
    message: "",
    type: "all",
    audience: "all",
    priority: "Medium",
  });

  

  /* PAGINATION */
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  const priorityColor = (priority: Priority) => {
    switch (priority) {
      case "High":
        return "bg-purple-600";
      case "Medium":
        return "bg-green-600";
      case "Urgent":
        return "bg-red-600";
      case "Low":
        return "bg-blue-600";
      default:
        return "bg-gray-600";
    }
  };


 
  useEffect(() => {
    fetchNotifications();
  }, [currentPage]);
  
  const fetchNotifications = async () => {
    try {
      const res = await instance.get(
        `/api/admin/notifications/get-notifications?page=${currentPage}&limit=${itemsPerPage}`
      );
  
      const result = res.data;
  
      const formatted = result.data.map((item: any) => ({
        title: item.title,
        desc: item.message,
        type: item.type,
        user: item.audience,
        priority: item.notificationType || "Medium",
        status:
          item.status === "sent"
            ? "Sent"
            : item.status === "scheduled"
            ? "Scheduled"
            : "Failed",
        date: new Date(item.date)
          .toISOString()
          .replace("T", " ")
          .substring(0, 16),
      }));
  
      setData(formatted);
  
      setStats({
        totalSent: result.stats?.totalSent || 0,
        scheduled: result.stats?.scheduled || 0,
        avgOpenRate: result.stats?.avgOpenRate || 0,
        avgClickRate: result.stats?.avgClickRate || 0,
      });
  
    } catch (error) {
      console.error("Error fetching notifications:", error);
      setData([]);
      setStats({
        totalSent: 0,
        scheduled: 0,
        avgOpenRate: 0,
        avgClickRate: 0,
      });
    }
  };
  

  const handleSubmit = async () => {
    if (!formData.title || !formData.message) {
      alert("Title and Message required");
      return;
    }
  
    try {
      await instance.post(
        "/api/admin/notifications/create",
        {
          title: formData.title,
          message: formData.message,
          channel: formData.type,
          audience: formData.audience,
          sendTime: sendTime === "Send Now" ? "now" : "later",
          scheduleDate,
          notificationType: formData.priority,
        }
      );
  
      alert("Notification Sent Successfully");
      fetchNotifications();
  
    } catch (error) {
      console.error("Error creating notification:", error);
      alert("Failed to create notification");
    }
  
    setOpenModal(false);
  };
  


  return (
    <div className="min-h-screen bg-black text-white px-2 py-2 mt-[5%]">

      {/* Header */}
      <div className="flex justify-between items-start mb-10">
        <div>
          <h1 className="text-3xl font-semibold">Notifications</h1>
          <p className="text-gray-400 text-sm mt-2">
            Configure subscription plans and credit pricing
          </p>
        </div>

        <button
          className="relative inline-flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-medium text-white bg-black transition cursor-pointer "
          onClick={() => setOpenModal(true)}
          style={{
            background:
              "linear-gradient(black, black) padding-box, linear-gradient(90deg,#F88B65,#E85E8F,#D947AA,#A04BCA,#6C52E9) border-box",
            border: "2px solid transparent",
          }}
        >
          <Plus size={18} />
          Create Notification
        </button>


        {openModal && (
          <div className="fixed inset-0 bg-[#131313]/70 backdrop-blur-sm flex items-center justify-center z-50">

            <div className="bg-[#131313] w-[750px] rounded-2xl border border-[#1F1F1F] relative">

              {/* Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-[#1F1F1F]">
                <h2 className="text-lg font-semibold text-white">
                  Create Notification
                </h2>
                <button
                  onClick={() => setOpenModal(false)}
                  className="text-gray-400 hover:text-white text-xl"
                >
                  ×
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-6 space-y-6">

                <h3 className="text-sm font-medium text-white">
                  Notification Details
                </h3>

                {/* Title */}
                <div>
                  <label className="text-sm text-white  ">
                    Notification Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    placeholder="e.g., New Feature: AI Avatar Generator"
                    className="w-full mt-2 h-[44px] bg-[#131313] border border-[#1F1F1F] rounded-lg px-4 text-sm outline-none focus:border-purple-500"
                  />

                </div>

                {/* Message */}
                <div>
                  <label className="text-sm text-white">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Enter your notification message..."
                    className="w-full mt-2 h-[100px] bg-[#131313] border border-[#1F1F1F] rounded-lg px-4 py-3 text-sm outline-none resize-none focus:border-purple-500"
                  />

                </div>

                {/* Row 1 */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-white">
                      Notification Type
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) =>
                        setFormData({ ...formData, type: e.target.value })
                      }
                      className="w-full mt-2 h-[44px] bg-[#1F1F1F] border border-[#1F1F1F] rounded-lg px-4 text-sm outline-none"
                    >
                      <option value="all">All Channels</option>
                      <option value="email">Email Only</option>
                      <option value="push">Push Notification</option>
                      <option value="inapp">In-App Only</option>
                    </select>

                  </div>

                  <div>
                    <label className="text-sm text-white">
                      Target Audience
                    </label>
                    <select
                      value={formData.audience}
                      onChange={(e) =>
                        setFormData({ ...formData, audience: e.target.value })
                      }
                      className="w-full mt-2 h-[44px] bg-[#1F1F1F] border border-[#1F1F1F] rounded-lg px-4 text-sm outline-none"
                    >
                      <option value="all">All Users</option>
                      <option value="active">Active Users</option>
                      <option value="premium">Premium Subscribers</option>
                      <option value="inactive">Inactive Users</option>
                    </select>

                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-white">
                      Priority Level
                    </label>
                    <select
                      value={formData.priority}
                      onChange={(e) =>
                        setFormData({ ...formData, priority: e.target.value })
                      }
                      className="w-full mt-2 h-[44px] bg-[#1F1F1F] border border-[#1F1F1F] rounded-lg px-4 text-sm outline-none"
                    >
                      <option>Medium</option>
                      <option>Low</option>
                      <option>High</option>
                      <option>Urgent</option>
                    </select>

                  </div>

                  <div>
                    <label className="text-sm text-white">
                      Send Time
                    </label>
                    <select
                      value={sendTime}
                      onChange={(e) => setSendTime(e.target.value)}
                      className="w-full mt-2 h-[44px] bg-[#1F1F1F] border border-[#1F1F1F] rounded-lg px-4 text-sm outline-none"
                    >
                      <option>Send Now</option>
                      <option>Schedule For Later</option>
                    </select>


                    {sendTime === "Schedule For Later" && (
                      <div className="mt-4">
                        <label className="text-sm text-white">
                          Select Date & Time
                        </label>
                        <input
                          type="datetime-local"
                          value={scheduleDate}
                          min={new Date().toISOString().slice(0, 16)}

                          onChange={(e) => setScheduleDate(e.target.value)}
                          className="w-full mt-2 h-[44px] bg-white border border-[#1F1F1F] rounded-lg px-4 text-sm outline-none text-black"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center px-6 py-4 border-t border-[#1F1F1F] bg-[#111111] rounded-b-2xl">
                <button
                  onClick={() => setOpenModal(false)}
                  className="px-5 py-2 rounded-lg border border-[#1F1F1F] text-sm text-white hover:bg-[#1A1A1A]"
                >
                  Cancel
                </button>

                <div className="flex gap-3">
                  <button className="px-5 py-2 rounded-lg border border-[#1F1F1F] text-sm text-white hover:bg-[#1A1A1A]">
                    Save as Draft
                  </button>

                  <button
                    onClick={handleSubmit}
                    className="px-6 py-2 rounded-lg text-sm text-white"
                    style={{
                      background:
                        "linear-gradient(90deg,#F88B65,#E85E8F,#D947AA,#A04BCA,#6C52E9)",
                    }}
                  >
                    Send Notification
                  </button>

                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Total Sent", value: stats.totalSent },
          { label: "Scheduled", value: stats.scheduled },
          { label: "Avg Open Rate", value: `${stats.avgOpenRate}%` },
          { label: "Avg Click Rate", value: `${stats.avgClickRate}%` },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#131313] border border-[#1C1C24] rounded-2xl p-6"
          >
            <p className="text-gray-400 text-sm">{item.label}</p>
            <h2 className="text-2xl font-semibold mt-3">
              {item.value}
            </h2>
          </div>
        ))}
      </div>


      {/* Search + Filters */}
      <div className="flex justify-between items-center bg-[#131313] border border-[#1F1F1F] rounded-xl p-4 mb-8">

        {/* Search */}
        <div className="relative w-[840px]">
          <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search by name, email, or type..."
            className="w-full h-[42px] bg-transparent border border-[#1F1F1F] rounded-lg pl-10 text-sm outline-none text-white"
          />
        </div>

        {/* Filters + Export */}
        <div className="flex items-center gap-3">

          {/* Status Filter */}
          <div className="flex items-center gap-3">

            {/* Status Filter */}


            {/* Type Filter */}
            <select
              className="bg-[#131313] border border-[#1F1F1F] rounded-lg px-4 h-[42px] text-sm text-white outline-none"
            >
              <option>All Type</option>
              <option>Email Only</option>
              <option>Push Notification</option>
              <option>In-App Only</option>
            </select>

          </div>


          {/* Type Filter */}
          <select
            className="bg-[#131313] border border-[#1F1F1F] rounded-lg px-4 h-[42px] text-sm text-white outline-none"
          >
            <option>All Status</option>
            <option>Sent</option>
            <option>Scheduled</option>
            <option>Failed</option>
          </select>

        </div>

      </div>

      {/* TABLE */}
      <div className="bg-[#131313] border border-[#1F1F1F] rounded-2xl overflow-hidden shadow-lg h-[580px]">

        <table className="w-full text-sm">
          <thead className="bg-[#161616] text-gray-400">
            <tr>
              <th className="px-6 py-4 text-left font-medium">Notification</th>
              <th className="px-6 py-4 text-left font-medium">Type</th>
              <th className="px-6 py-4 text-left font-medium">User</th>
              <th className="px-6 py-4 text-left font-medium">Priority</th>
              <th className="px-6 py-4 text-left font-medium">Status</th>
              <th className="px-6 py-4 text-left font-medium">Engagement</th>
              <th className="px-6 py-4 text-left font-medium">Date</th>
            </tr>
          </thead>

          <tbody>
            {currentData.map((item, index) => (
              <tr
                key={index}
                className="border-t border-[#1F1F1F] hover:bg-[#1A1A1A] transition duration-200"
              >
                <td className="px-6 py-4">
                  <p className="font-medium text-white">{item.title}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                </td>

                <td className="px-6 py-4 text-gray-300">{item.type}</td>
                <td className="px-6 py-4 text-gray-300">{item.user}</td>

                <td className="px-6 py-4">
                  <span className={`px-3 py-1 text-xs rounded-full ${priorityColor(item.priority)}`}>
                    {item.priority}
                  </span>
                </td>

                <td className="px-6 py-4">
                  {item.status === "Sent" && (
                    <span className="inline-flex items-center gap-2 px-1 py-1.5 text-xs font-medium rounded-full bg-[#DCFCE7] text-[#016630]">
                      <CheckCircle size={14} className="text-[#016630]" />
                      Sent
                    </span>
                  )}

                  {item.status === "Scheduled" && (
                    <span className="inline-flex items-center gap-2 px-1 py-1.5 text-xs font-medium rounded-full bg-[#FFEDD4] text-[#9F2D00]">
                      <Clock size={14} className="text-[#9F2D00]" />
                      Scheduled
                    </span>
                  )}

                  {item.status === "Failed" && (
                    <span className="inline-flex items-center gap-2 px-1 py-1.5 text-xs font-medium rounded-full bg-[#FFEDD4] text-[#9F2D00]">
                      <XCircle size={14} className="text-[#9F2D00]" />
                      Failed
                    </span>
                  )}
                </td>



                <td className="px-6 py-4">
                  <p className="text-white font-medium">65.6%</p>
                  <p className="text-xs text-gray-500 mt-1">41.5%</p>
                </td>

                <td className="px-6 py-4 text-gray-400">
                  <p>{item.date.split(" ")[0]}</p>
                  <p className="text-xs text-gray-500">{item.date.split(" ")[1]}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center px-6 py-4 border-t border-[#1F1F1F] bg-[#121212] relative">
          <p className="text-xs text-gray-500">
            Showing {(currentPage - 1) * itemsPerPage + 1}–
            {Math.min(currentPage * itemsPerPage, data.length)} of {data.length} users
          </p>

          <div className="flex items-center gap-2 ">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
              className="px-3 py-1 text-sm rounded-lg bg-[#1A1A1A] border border-[#1F1F1F] disabled:opacity-40 hover:bg-[#222] transition"
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-8 h-8 text-sm rounded-lg transition ${currentPage === i + 1
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                  : "bg-[#1A1A1A] border border-[#1F1F1F] hover:bg-[#222]"
                  }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
              className="px-3 py-1 text-sm rounded-lg bg-[#1A1A1A] border border-[#1F1F1F] disabled:opacity-40 hover:bg-[#222] transition"
            >
              Next
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Notifications;
