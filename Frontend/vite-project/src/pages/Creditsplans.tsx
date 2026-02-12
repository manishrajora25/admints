// import React, { useState } from "react";
// import { FiRefreshCcw, FiPlus } from "react-icons/fi";
// import { FiCalendar, FiChevronDown } from "react-icons/fi";
// import { FiSettings } from "react-icons/fi";
// import { FiEdit } from "react-icons/fi";


// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";


// import { useEffect } from "react";
// import instance from "../axiosConfig";




// interface StatCard {
//   title: string;
//   value: string;
// }

// interface Plan {
//   name: string;
//   credits: number;
//   price: number;
//   perCredit: string;
//   monthlyCredits: number;
//   activeUsers: number;
//   validity: string;
//   gradient: string;
// }

// const Creditsplans: React.FC = () => {

//   // 🔥 Added Missing States
//   const [showCalendar, setShowCalendar] = useState<boolean>(false);
//   const [selectedDate, setSelectedDate] = useState<Date | undefined>();
//   const [refreshing, setRefreshing] = useState<boolean>(false);
//   const [showModal, setShowModal] = useState<boolean>(false);
//   const [plans, setPlans] = useState<Plan[]>([]);




//   const fetchUsers = async (manual = false) => {
//     setRefreshing(true);
//     setTimeout(() => {
//       setRefreshing(false);
//     }, 1000);
//   };


//   const stats: StatCard[] = [
//     { title: "Active Tier", value: "3" },
//     { title: "Credits Issued", value: "11.4L" },
//     { title: "Operations", value: "2" },
//     { title: "Avg Validity", value: "60 days" },
//   ];

//   // const plans: Plan[] = [
//   //   {
//   //     name: "Starter",
//   //     credits: 100,
//   //     price: 299,
//   //     perCredit: "₹ 2.99/credit",
//   //     monthlyCredits: 100,
//   //     activeUsers: 3245,
//   //     validity: "30 days from purchase",
//   //     gradient: "from-gray-500 to-gray-700",
//   //   },
//   //   {
//   //     name: "Professional Pack",
//   //     credits: 500,
//   //     price: 999,
//   //     perCredit: "₹ 1.99/credit",
//   //     monthlyCredits: 500,
//   //     activeUsers: 4567,
//   //     validity: "60 days from purchase",
//   //     gradient: "from-blue-600 to-blue-800",
//   //   },
//   //   {
//   //     name: "Enterprise Pack",
//   //     credits: 2000,
//   //     price: 2499,
//   //     perCredit: "₹ 1.99/credit",
//   //     monthlyCredits: 2000,
//   //     activeUsers: 1133,
//   //     validity: "90 days from purchase",
//   //     gradient: "from-purple-600 to-pink-600",
//   //   },
//   // ];

//   const fetchPlans = async () => {
//     try {
//       const res = await instance.get("/plans");
//       setPlans(res.data);
//     } catch (error) {
//       console.log("Fetch Plans Error:", error);
//     }
//   };

//   useEffect(() => {
//     fetchPlans();
//   }, []);





//   return (
//     <div className="min-h-screen bg-black text-white p-2 mt-[6%]">

//       {/* Top Bar */}
//       <div className="flex justify-between items-center mb-6">
//         <div className="flex gap-3">

//           {/* Calendar */}
//           <div className="relative">
//             <button
//               onClick={() => setShowCalendar(!showCalendar)}
//               className="flex items-center gap-3 
//                bg-[#131313] border border-[#1F1F1F] 
//                rounded-xl px-5 py-3 text-sm 
//                hover:border-[#2A2A2A] transition"
//             >
//               <FiCalendar className="text-white text-lg" />

//               <span className="text-white font-medium">
//                 {selectedDate
//                   ? selectedDate.toLocaleDateString()
//                   : "Last 30 days"}
//               </span>

//               <FiChevronDown className="text-white text-lg ml-2" />
//             </button>

//             {showCalendar && (
//               <div className="absolute z-50 mt-3 bg-[#131313] border border-[#1F1F1F] rounded-xl p-3 shadow-xl">
//                 <DayPicker
//                   mode="single"
//                   selected={selectedDate}
//                   onSelect={(date) => {
//                     setSelectedDate(date);
//                     setShowCalendar(false);
//                   }}
//                 />
//               </div>
//             )}
//           </div>


//           {/* Refresh Button */}
//           <button
//             onClick={() => fetchUsers(true)}
//             className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1F1F1F]"
//           >
//             <FiRefreshCcw className={refreshing ? "animate-spin" : ""} />
//             Refresh
//           </button>

//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
//         {stats.map((stat, index) => (
//           <div
//             key={index}
//             className="bg-[#111] border border-[#222] rounded-xl p-6"
//           >
//             <p className="text-gray-400 text-sm">{stat.title}</p>
//             <h2 className="text-2xl font-semibold mt-2">{stat.value}</h2>
//           </div>
//         ))}
//       </div>

//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-semibold">Subscription Plans</h2>
//         <div className="inline-block p-[1.5px] rounded-[13px] 
//                 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">

//           <button
//             onClick={() => setShowModal(true)}
//             className="flex items-center gap-3 px-6 py-3
//                rounded-xl
//                bg-black text-white
//                text-lg font-medium
//                border border-[#1F1F1F]
//                hover:bg-[#111] transition"
//           >
//             <FiPlus className="text-xl" />
//             Add New Plan
//           </button>




//           {showModal && (
//             <div className="fixed inset-0 z-50 flex items-center justify-center 
//   bg-black/70 backdrop-blur-sm px-4">

//               <div className="bg-[#0F0F0F] border border-[#1F1F1F] 
//     w-[800px] max-w-[95%] 
//     max-h-[90vh] overflow-y-auto
//     rounded-2xl p-8 relative
//     scrollbar-thin scrollbar-thumb-[#2A2A2A] scrollbar-track-transparent">



//                 {/* Header */}
//                 <div className="flex justify-between items-center mb-6">
//                   <h2 className="text-lg font-semibold">
//                     Create New Plan
//                   </h2>

//                   <button
//                     onClick={() => setShowModal(false)}
//                     className="text-gray-400 hover:text-white"
//                   >
//                     ✕
//                   </button>
//                 </div>

//                 {/* Divider */}
//                 <div className="border-t border-[#1F1F1F] mb-6"></div>

//                 {/* Basic Info */}
//                 <h3 className="text-sm font-medium mb-4">
//                   Basic Information
//                 </h3>

//                 <div className="space-y-5 mb-6">

//                   <div>
//                     <label className="text-sm">
//                       Plan Name <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="e.g., Professional"
//                       className="mt-2 w-full bg-[#111] border border-[#2A2A2A]
//             rounded-lg px-4 py-3 text-sm
//             focus:outline-none focus:border-purple-500"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-sm">
//                       Description
//                     </label>
//                     <textarea
//                       placeholder="Brief description of this plan..."
//                       className="mt-2 w-full bg-[#111] border border-[#2A2A2A]
//             rounded-lg px-4 py-3 text-sm h-24
//             focus:outline-none focus:border-purple-500"
//                     />
//                   </div>

//                 </div>

//                 <div className="border-t border-[#1F1F1F] mb-6"></div>

//                 {/* Pricing */}
//                 <h3 className="text-sm font-medium mb-4">
//                   Pricing
//                 </h3>

//                 <div className="mb-6">
//                   <label className="text-sm">
//                     Credits <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="number"
//                     placeholder="0"
//                     className="mt-2 w-full bg-[#111] border border-[#2A2A2A]
//           rounded-lg px-4 py-3 text-sm
//           focus:outline-none focus:border-purple-500"
//                   />
//                 </div>


//                 <div className="mb-6">
//                   <label className="text-sm">
//                     Price <span className="text-red-500"></span>
//                   </label>
//                   <input
//                     type="number"
//                     placeholder="0"
//                     className="mt-2 w-full bg-[#111] border border-[#2A2A2A]
//           rounded-lg px-4 py-3 text-sm
//           focus:outline-none focus:border-purple-500"
//                   />
//                 </div>

//                 <div className="border-t border-[#1F1F1F] mb-6"></div>

//                 {/* Credit Validity */}
//                 <h3 className="text-sm font-medium mb-4">
//                   Credit Validity
//                 </h3>

//                 <div className="mb-6">
//                   <input
//                     type="text"
//                     placeholder="Enter feature..."
//                     className="w-full bg-[#111] border border-[#2A2A2A]
//           rounded-lg px-4 py-3 text-sm
//           focus:outline-none focus:border-purple-500"
//                   />
//                 </div>

//                 {/* Divider */}
//                 <div className="border-t border-[#1F1F1F] my-6"></div>

//                 {/* Display Settings */}
//                 <h3 className="text-sm font-medium mb-4">
//                   Display Settings
//                 </h3>

//                 {/* Color Theme */}
//                 <div className="mb-6">
//                   <label className="text-sm mb-3 block">
//                     Color Theme
//                   </label>

//                   <div className="flex gap-4">

//                     {[
//                       "from-gray-500 to-gray-700",
//                       "from-blue-500 to-blue-700",
//                       "from-purple-500 to-purple-700",
//                       "from-green-500 to-green-700",
//                       "from-orange-500 to-orange-700",
//                       "from-red-500 to-red-700",
//                     ].map((gradient, index) => (
//                       <div
//                         key={index}
//                         className={`w-28 h-16 rounded-xl cursor-pointer 
//         bg-gradient-to-r ${gradient}
//         border-2 border-transparent hover:border-white transition`}
//                       />
//                     ))}

//                   </div>
//                 </div>

//                 {/* Mark Popular + Status */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

//                   {/* Mark as Popular */}
//                   <div className="border border-[#1F1F1F] rounded-xl p-4 flex items-center gap-3">
//                     <input
//                       type="checkbox"
//                       className="w-5 h-5 accent-purple-600"
//                     />
//                     <div>
//                       <p className="text-sm font-medium">
//                         Mark as Popular
//                       </p>
//                       <p className="text-xs text-gray-400">
//                         Show "POPULAR" badge
//                       </p>
//                     </div>
//                   </div>

//                   {/* Status */}
//                   <div>
//                     <label className="text-sm block mb-2">
//                       Status
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Active / Inactive"
//                       className="w-full bg-[#111] border border-[#2A2A2A]
//       rounded-lg px-4 py-3 text-sm
//       focus:outline-none focus:border-purple-500"
//                     />
//                   </div>

//                 </div>

//                 {/* Bottom Buttons */}
//                 <div className="flex gap-4 mt-6">

//                   <button
//                     onClick={() => setShowModal(false)}
//                     className="flex-1 border border-[#1F1F1F] 
//     py-3 rounded-xl text-sm hover:bg-[#111] transition"
//                   >
//                     Cancel
//                   </button>

//                   <button
//                     className="flex-1 bg-gradient-to-r 
//     from-purple-500 to-pink-600
//     py-3 rounded-xl text-sm font-medium
//     hover:opacity-90 transition"
//                   >
//                     Create Plan
//                   </button>

//                 </div>


//               </div>
//             </div>
//           )}


//         </div>


//       </div>

//       {/* Plans */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {plans.map((plan, index) => (
//           <div
//             key={index}
//             className="bg-[#0F0F0F] border border-[#1F1F1F] 
//                  rounded-xl overflow-hidden"
//           >
//             {/* Gradient Header */}
//             <div className={`bg-gradient-to-r ${plan.gradient} p-6`}>
//               <h3 className="text-sm font-medium opacity-90">
//                 {plan.name}
//               </h3>

//               <div className="mt-3 flex items-end gap-1">
//                 <span className="text-3xl font-bold">
//                   {plan.credits}
//                 </span>
//                 <span className="text-sm opacity-80 mb-1">
//                   Credits
//                 </span>
//               </div>

//               <div className="flex justify-between mt-4 text-sm">
//                 <span className="font-semibold">₹{plan.price}</span>
//                 <span className="opacity-80">{plan.perCredit}</span>
//               </div>
//             </div>

//             {/* Body */}
//             <div className="p-6 text-sm">

//               <div className="flex justify-between py-2">
//                 <span className="text-gray-400">Monthly Credits</span>
//                 <span>{plan.monthlyCredits}</span>
//               </div>

//               <div className="flex justify-between py-2">
//                 <span className="text-gray-400">Active Users</span>
//                 <span>{plan.activeUsers.toLocaleString()}</span>
//               </div>

//               <div className="flex justify-between py-2">
//                 <span className="text-gray-400">Valid Till</span>
//                 <span>{plan.validity}</span>
//               </div>

//               {/* Divider */}
//               <div className="border-t border-[#1F1F1F] my-4"></div>

//               {/* Button */}
//               <button
//                 className="w-full flex items-center justify-center gap-3 
//   bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600
//   py-3 rounded-xl text-base font-medium
//   hover:opacity-90 transition"
//               >
//                 <FiEdit className="text-lg" />
//                 Edit Plan
//               </button>


//             </div>
//           </div>
//         ))}
//       </div>


//       <div className="bg-[#0F0F0F] border border-[#1F1F1F] 
//                       rounded-2xl p-8  mt-[3%]">

//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-lg font-semibold">
//             Credit Configuration
//           </h2>

//           <button className="flex items-center gap-2 
//                              px-4 py-2 text-sm 
//                              border border-[#2A2A2A] 
//                              rounded-lg hover:bg-[#111] transition">
//             <FiSettings className="text-base" />
//             Configure
//           </button>
//         </div>

//         {/* Video Generation */}
//         <div className="mb-8">
//           <h3 className="text-sm font-medium mb-4">
//             Video Generation
//           </h3>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="text-sm text-white">
//                 720×720 Standard
//               </label>
//               <input
//                 type="text"
//                 placeholder="10 credits"
//                 className="mt-2 w-full bg-[#111] 
//                            border border-[#2A2A2A] 
//                            rounded-lg px-4 py-2.5 text-sm
//                            focus:outline-none focus:border-purple-500"
//               />
//             </div>

//             <div>
//               <label className="text-sm text-white">
//                 1920×1080 HD
//               </label>
//               <input
//                 type="text"
//                 placeholder="15 credits"
//                 className="mt-2 w-full bg-[#111] 
//                            border border-[#2A2A2A] 
//                            rounded-lg px-4 py-2.5 text-sm
//                            focus:outline-none focus:border-purple-500"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Banner Generation */}
//         <div className="mb-8">
//           <h3 className="text-sm font-medium mb-4">
//             Banner Generation
//           </h3>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="text-sm text-white">
//                 720×720 Standard
//               </label>
//               <input
//                 type="text"
//                 placeholder="10 credits"
//                 className="mt-2 w-full bg-[#111] 
//                            border border-[#2A2A2A] 
//                            rounded-lg px-4 py-2.5 text-sm
//                            focus:outline-none focus:border-purple-500"
//               />
//             </div>

//             <div>
//               <label className="text-sm text-white">
//                 1920×1080 HD
//               </label>
//               <input
//                 type="text"
//                 placeholder="15 credits"
//                 className="mt-2 w-full bg-[#111] 
//                            border border-[#2A2A2A] 
//                            rounded-lg px-4 py-2.5 text-sm
//                            focus:outline-none focus:border-purple-500"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Avatar Generation */}
//         <div className="mb-8">
//           <h3 className="text-sm font-medium mb-4">
//             Avatar Generation
//           </h3>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="text-sm text-white">
//                 1080×1080 Standard
//               </label>
//               <input
//                 type="text"
//                 placeholder="10 credits"
//                 className="mt-2 w-full bg-[#111] 
//                            border border-[#2A2A2A] 
//                            rounded-lg px-4 py-2.5 text-sm
//                            focus:outline-none focus:border-purple-500"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Save Button */}
//         <button
//           className="w-full bg-gradient-to-r 
//                      from-orange-400 via-pink-500 to-purple-600
//                      py-3 rounded-xl text-sm font-medium
//                      hover:opacity-90 transition"
//         >
//           Save Configuration
//         </button>

//       </div>



//     </div>
//   );
// };

// export default Creditsplans;








// import React, { useState, useEffect } from "react";
// import {
//   FiRefreshCcw,
//   FiPlus,
//   FiCalendar,
//   FiChevronDown,
//   FiSettings,
//   FiEdit,
// } from "react-icons/fi";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";
// import instance from "../axiosConfig";

// interface StatCard {
//   title: string;
//   value: string;
// }

// interface Plan {
//   _id: string;
//   name: string;
//   credits: number;
//   price: number;
//   perCredit: string;
//   monthlyCredits: number;
//   perCreditPrice: number;
//   validityDays: number;
//   activeUsers: number;
//   validity: string;
//   colorTheme: string; // New field for color theme
//   gradient: string;
// }

// const CreditsPlans: React.FC = () => {
//   const [showCalendar, setShowCalendar] = useState<boolean>(false);
//   const [selectedDate, setSelectedDate] = useState<Date | undefined>();
//   const [refreshing, setRefreshing] = useState<boolean>(false);
//   const [showModal, setShowModal] = useState<boolean>(false);

//   const [stats, setStats] = useState<StatCard[]>([]);
//   const [plans, setPlans] = useState<Plan[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     credits: 0,
//     price: 0,
//     validity: "",
//     gradient: "from-blue-500 to-blue-700",
//     popular: false,
//     status: "Active",
//   });

//   const fetchDashboard = async () => {
//     try {
//       setLoading(true);
//       const res = await instance.get("/api/admin/plans/dashboard-data");
//       console.log(res.data);
//       setStats(res.data?.stats || []);
//       setPlans(res.data?.data || []);
//     } catch (error) {
//       console.error("API Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchUsers = async () => {
//     setRefreshing(true);
//     await fetchDashboard();
//     setRefreshing(false);
//   };

//   useEffect(() => {
//     fetchDashboard();
//   }, []);

//   const handleCreatePlan = async () => {
//     try {
//       const res = await instance.post("/api/admin/plans/create", formData);

//       // ✅ Full backend response
//       console.log("Full Response:", res);

//       // ✅ Sirf backend ka actual data
//       console.log("Response Data:", res.data);

//       // ✅ Agar backend plan return kar raha hai
//       console.log("Created Plan:", res.data?.plan);

//       // 🔥 Agar tum chaho to bina refresh ke direct add bhi kar sakte ho
//       if (res.data?.plan) {
//         setPlans((prev) => [res.data.plan, ...prev]);
//       }

//       setShowModal(false);

//       // Agar tum refresh se hi karna chahte ho to ye rehne do
//       fetchDashboard();

//       // reset form
//       setFormData({
//         name: "",
//         description: "",
//         credits: 0,
//         price: 0,
//         validity: "",
//         gradient: "from-blue-500 to-blue-700",
//         popular: false,
//         status: "Active",
//       });
//     } catch (error: any) {
//       console.error("Create Plan Error:", error.response?.data || error);
//     }
//   };

//   return (
//     <div className="flex bg-[black] min-h-screen text-white space-y-6 overflow-y-auto ml-20 mt-[5%]">
//       <div className="flex-1 p-6 space-y-6 overflow-y-auto">
//         {/* Top Bar */}
//         <div className="flex justify-between items-center mb-6">
//           <div className="flex gap-3">
//             <div className="relative">
//               <button
//                 onClick={() => setShowCalendar(!showCalendar)}
//                 className="flex items-center gap-3 
//               bg-[#131313] border border-[#1F1F1F] 
//               rounded-xl px-5 py-3 text-sm"
//               >
//                 <FiCalendar className="text-white text-lg" />
//                 <span className="text-white font-medium">
//                   {selectedDate
//                     ? selectedDate.toLocaleDateString()
//                     : "Last 30 days"}
//                 </span>
//                 <FiChevronDown className="text-white text-lg ml-2" />
//               </button>

//               {showCalendar && (
//                 <div className="absolute z-50 mt-3 bg-[#131313] border border-[#1F1F1F] rounded-xl p-3 shadow-xl">
//                   <DayPicker
//                     mode="single"
//                     selected={selectedDate}
//                     onSelect={(date) => {
//                       setSelectedDate(date);
//                       setShowCalendar(false);
//                     }}
//                   />
//                 </div>
//               )}
//             </div>

//             <button
//               onClick={() => fetchUsers()}
//               className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1F1F1F]"
//             >
//               <FiRefreshCcw className={refreshing ? "animate-spin" : ""} />
//               Refresh
//             </button>
//           </div>
//         </div>

//         {/* Stats Section */}
//         {loading ? (
//           <div className="text-center py-10">Loading...</div>
//         ) : (
//           <>
//             {/* Stats Section */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

//               {/* Active Tier */}
//               <div className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-2xl p-6">
//                 <p className="text-gray-400 text-sm">Active Tier</p>
//                 <h2 className="text-3xl font-semibold mt-2">
//                   {stats[0]?.value || 0}
//                 </h2>
//               </div>

//               {/* Credits Issued */}
//               <div className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-2xl p-6">
//                 <p className="text-gray-400 text-sm">Credits Issued</p>
//                 <h2 className="text-3xl font-semibold mt-2">
//                   {stats[1]?.value || 0}
//                 </h2>
//               </div>

//               {/* Operations */}
//               <div className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-2xl p-6">
//                 <p className="text-gray-400 text-sm">Operations</p>
//                 <h2 className="text-3xl font-semibold mt-2">
//                   {stats[2]?.value || 0}
//                 </h2>
//               </div>

//             </div>


//             {/* Header */}
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-xl font-semibold">Subscription Plans</h2>

//               <div
//                 className="inline-block p-[1.5px] rounded-[13px] 
//              bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600"
//               >
//                 <button
//                   onClick={() => setShowModal(true)}
//                   className="flex items-center gap-3 px-4 py-2
//                 rounded-xl bg-black text-white
//                 text-lg font-medium border border-[#1F1F1F] cursor-pointer"
//                 >
//                   <FiPlus className="text-xl" />
//                   Add New Plan
//                 </button>
//               </div>
//             </div>


//             {/* Plans */}
//             <div className="overflow-x-auto scrollbar-hide">
//               <div className="flex gap-6 min-w-max">
//                 {plans.map((plan) => (
//                   <div
//                     key={plan._id}
//                     className="w-[350px] flex-shrink-0 bg-[#0F0F0F] border border-[#1F1F1F] rounded-xl overflow-hidden"
//                   >

//                     {/* TOP COLORED HEADER */}
//                     <div
//                       className="p-6 text-white"
//                       style={{
//                         background: `linear-gradient(135deg, ${plan.colorTheme})`,
//                       }}
//                     >
//                       <h3 className="text-2xl font-medium opacity-90">
//                         {plan.name}
//                       </h3>

//                       <div className="mt-3 flex items-end gap-1">
//                         <span className="text-3xl font-bold">{plan.credits}</span>
//                         <span className="text-m opacity-80 mt-1 ml-1 font-bold">
//                           Credits
//                         </span>
//                       </div>

//                       <div className="flex justify-between mt-4 text-sm ">
//                         <span className="font-bold text-xl">₹{plan.price}</span>
//                         <span className="opacity-80">
//                           ₹{plan.perCreditPrice}/credit
//                         </span>
//                       </div>
//                     </div>

//                     {/* BODY */}
//                     <div className="p-6 text-m text-white">
//                       <div className="flex justify-between py-2">
//                         <span>Credits</span>
//                         <span>{plan.credits}</span>
//                       </div>

//                       <div className="flex justify-between py-2">
//                         <span>Active Users</span>
//                         <span>{plan.activeUsers?.toLocaleString() || 0}</span>
//                       </div>

//                       <div className="flex justify-between py-2">
//                         <span>Valid Till</span>
//                         <span>{plan.validityDays} days from purchase</span>
//                       </div>

//                       <div className="border-t border-[#1F1F1F] my-4"></div>

//                       {/* BUTTON */}
//                       <button
//                         className="w-full py-3 rounded-xl text-base font-medium text-white"
//                         style={{
//                           background:
//                             "linear-gradient(90deg, #fb923c, #ec4899, #9333ea)",
//                         }}
//                       >
//                         Edit Plan
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </>
//         )}



//         <div className="bg-[#0F0F0F] border border-[#1F1F1F] 
//                       rounded-2xl p-8  mt-[3%]">

//           {/* Header */}
//           <div className="flex justify-between items-center mb-8">
//             <h2 className="text-lg font-semibold">
//               Credit Configuration
//             </h2>

//             <button className="flex items-center gap-2 
//                              px-4 py-2 text-sm 
//                              border border-[#2A2A2A] 
//                              rounded-lg hover:bg-[#111] transition">
//               <FiSettings className="text-base" />
//               Configure
//             </button>
//           </div>

//           {/* Video Generation */}
//           <div className="mb-8">
//             <h3 className="text-sm font-medium mb-4">
//               Video Generation
//             </h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="text-sm text-white">
//                   720×720 Standard
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="10 credits"
//                   className="mt-2 w-full bg-[#111] 
//                            border border-[#2A2A2A] 
//                            rounded-lg px-4 py-2.5 text-sm
//                            focus:outline-none focus:border-purple-500"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm text-white">
//                   1920×1080 HD
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="15 credits"
//                   className="mt-2 w-full bg-[#111] 
//                            border border-[#2A2A2A] 
//                            rounded-lg px-4 py-2.5 text-sm
//                            focus:outline-none focus:border-purple-500"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Banner Generation */}
//           <div className="mb-8">
//             <h3 className="text-sm font-medium mb-4">
//               Banner Generation
//             </h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="text-sm text-white">
//                   720×720 Standard
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="10 credits"
//                   className="mt-2 w-full bg-[#111] 
//                            border border-[#2A2A2A] 
//                            rounded-lg px-4 py-2.5 text-sm
//                            focus:outline-none focus:border-purple-500"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm text-white">
//                   1920×1080 HD
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="15 credits"
//                   className="mt-2 w-full bg-[#111] 
//                            border border-[#2A2A2A] 
//                            rounded-lg px-4 py-2.5 text-sm
//                            focus:outline-none focus:border-purple-500"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Avatar Generation */}
//           <div className="mb-8">
//             <h3 className="text-sm font-medium mb-4">
//               Avatar Generation
//             </h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="text-sm text-white">
//                   1080×1080 Standard
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="10 credits"
//                   className="mt-2 w-full bg-[#111] 
//                            border border-[#2A2A2A] 
//                            rounded-lg px-4 py-2.5 text-sm
//                            focus:outline-none focus:border-purple-500"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Save Button */}
//           <button
//             className="w-full bg-gradient-to-r 
//                      from-orange-400 via-pink-500 to-purple-600
//                      py-3 rounded-xl text-sm font-medium
//                      hover:opacity-90 transition"
//           >
//             Save Configuration
//           </button>

//         </div>

//       </div>





//       {showModal && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center 
//   bg-black/70 backdrop-blur-sm px-4"
//         >
//           <div
//             className="bg-[#0F0F0F] border border-[#1F1F1F] 
//     w-[800px] max-w-[95%] 
//     max-h-[90vh] overflow-y-auto
//     rounded-2xl p-8 relative
//     scrollbar-thin scrollbar-thumb-[#2A2A2A] scrollbar-track-transparent"
//           >
//             {/* Header */}
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-lg font-semibold">Create New Plan</h2>

//               <button
//                 onClick={() => setShowModal(false)}
//                 className="text-gray-400 hover:text-white"
//               >
//                 ✕
//               </button>
//             </div>

//             {/* Divider */}
//             <div className="border-t border-[#1F1F1F] mb-6"></div>

//             {/* Basic Info */}
//             <h3 className="text-sm font-medium mb-4">Basic Information</h3>

//             <div className="space-y-5 mb-6">
//               <div>
//                 <label className="text-sm">
//                   Plan Name <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="e.g., Professional"
//                   value={formData.name}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name: e.target.value })
//                   }
//                   className="mt-2 w-full bg-[#111] border border-[#2A2A2A]
//   rounded-lg px-4 py-3 text-sm
//   focus:outline-none focus:border-purple-500"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm">Description</label>
//                 <textarea
//                   placeholder="Brief description of this plan..."
//                   value={formData.description}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       description: e.target.value,
//                     })
//                   }
//                   className="mt-2 w-full bg-[#111] border border-[#2A2A2A]
//   rounded-lg px-4 py-3 text-sm h-24
//   focus:outline-none focus:border-purple-500"
//                 />
//               </div>
//             </div>

//             <div className="border-t border-[#1F1F1F] mb-6"></div>

//             {/* Pricing */}
//             <h3 className="text-sm font-medium mb-4">Pricing</h3>

//             <div className="mb-6">
//               <label className="text-sm">
//                 Credits <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="number"
//                 placeholder="0"
//                 value={formData.credits}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     credits: Number(e.target.value),
//                   })
//                 }
//                 className="mt-2 w-full bg-[#111] border border-[#2A2A2A]
//   rounded-lg px-4 py-3 text-sm
//   focus:outline-none focus:border-purple-500"
//               />
//             </div>

//             <div className="mb-6">
//               <label className="text-sm">
//                 Price <span className="text-red-500"></span>
//               </label>
//               <input
//                 type="number"
//                 placeholder="0"
//                 value={formData.price}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     price: Number(e.target.value),
//                   })
//                 }
//                 className="mt-2 w-full bg-[#111] border border-[#2A2A2A]
//   rounded-lg px-4 py-3 text-sm
//   focus:outline-none focus:border-purple-500"
//               />
//             </div>

//             <div className="border-t border-[#1F1F1F] mb-6"></div>

//             {/* Credit Validity */}
//             <h3 className="text-sm font-medium mb-4">Credit Validity</h3>

//             <div className="mb-6">
//               <input
//                 type="text"
//                 placeholder="Enter feature..."
//                 value={formData.validity}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     validity: e.target.value,
//                   })
//                 }
//                 className="w-full bg-[#111] border border-[#2A2A2A]
//   rounded-lg px-4 py-3 text-sm
//   focus:outline-none focus:border-purple-500"
//               />
//             </div>

//             {/* Divider */}
//             <div className="border-t border-[#1F1F1F] my-6"></div>

//             {/* Display Settings */}
//             <h3 className="text-sm font-medium mb-4">Display Settings</h3>

//             {/* Color Theme */}
//             <div className="mb-6">
//               <label className="text-sm mb-3 block">Color Theme</label>

//               <div className="flex gap-4">
//                 {[
//                   "from-gray-500 to-gray-700",
//                   "from-blue-500 to-blue-700",
//                   "from-purple-500 to-purple-700",
//                   "from-green-500 to-green-700",
//                   "from-orange-500 to-orange-700",
//                   "from-red-500 to-red-700",
//                 ].map((gradient, index) => (
//                   <div
//                     key={index}
//                     className={`w-28 h-16 rounded-xl cursor-pointer 
//         bg-gradient-to-r ${gradient}
//         border-2 border-transparent hover:border-white transition`}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Mark Popular + Status */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//               {/* Mark as Popular */}
//               <div className="border border-[#1F1F1F] rounded-xl p-4 flex items-center gap-3">
//                 <input
//                   type="checkbox"
//                   checked={formData.popular}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       popular: e.target.checked,
//                     })
//                   }
//                   className="w-5 h-5 accent-purple-600"
//                 />

//                 <div>
//                   <p className="text-sm font-medium">Mark as Popular</p>
//                   <p className="text-xs text-gray-400">Show "POPULAR" badge</p>
//                 </div>
//               </div>

//               {/* Status */}
//               <div>
//                 <label className="text-sm block mb-2">Status</label>
//                 <input
//                   type="text"
//                   value={formData.status}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       status: e.target.value,
//                     })
//                   }
//                   className="w-full bg-[#111] border border-[#2A2A2A]
//   rounded-lg px-4 py-3 text-sm
//   focus:outline-none focus:border-purple-500"
//                 />
//               </div>
//             </div>

//             {/* Bottom Buttons */}
//             <div className="flex gap-4 mt-6">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="flex-1 border border-[#1F1F1F] 
//     py-3 rounded-xl text-sm hover:bg-[#111] transition"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={handleCreatePlan}
//                 className="flex-1 bg-gradient-to-r 
//   from-purple-500 to-pink-600
//   py-3 rounded-xl text-sm font-medium
//   hover:opacity-90 transition"
//               >
//                 Create Plan
//               </button>
//             </div>
//           </div>
//         </div>
//       )}



//     </div>
//   );
// };

// export default CreditsPlans;




























import React, { useState, useEffect } from "react";
import {
  FiRefreshCcw,
  FiPlus,
  FiCalendar,
  FiChevronDown,
  FiSettings,
  FiEdit,
} from "react-icons/fi";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import instance from "../axiosConfig";

interface StatCard {
  title: string;
  value: string;
}

interface Plan {
  _id: string;
  name: string;
  credits: number;
  price: number;
  perCredit: string;
  monthlyCredits: number;
  perCreditPrice: number;
  validityDays: number;
  activeUsers: number;
  validity: string;
  colorTheme: string; // New field for color theme
  gradient: string;
}

const CreditsPlans: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const [stats, setStats] = useState<StatCard[]>([]);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    credits: 0,
    price: 0,
    validity: "",
    gradient: "from-blue-500 to-blue-700",
    popular: false,
    status: "Active",
  });

  const fetchDashboard = async () => {
    try {
      setLoading(true);
      const res = await instance.get("/api/admin/plans/dashboard-data");
      console.log(res.data);
      setStats(res.data?.stats || []);
      setPlans(res.data?.data || []);
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    setRefreshing(true);
    await fetchDashboard();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  const handleCreatePlan = async () => {
    try {
      const res = await instance.post("/api/admin/plans/create", formData);

      // ✅ Full backend response
      console.log("Full Response:", res);

      // ✅ Sirf backend ka actual data
      console.log("Response Data:", res.data);

      // ✅ Agar backend plan return kar raha hai
      console.log("Created Plan:", res.data?.plan);

      // 🔥 Agar tum chaho to bina refresh ke direct add bhi kar sakte ho
      if (res.data?.plan) {
        setPlans((prev) => [res.data.plan, ...prev]);
      }

      setShowModal(false);

      // Agar tum refresh se hi karna chahte ho to ye rehne do
      fetchDashboard();

      // reset form
      setFormData({
        name: "",
        description: "",
        credits: 0,
        price: 0,
        validity: "",
        gradient: "from-blue-500 to-blue-700",
        popular: false,
        status: "Active",
      });
    } catch (error: any) {
      console.error("Create Plan Error:", error.response?.data || error);
    }
  };

  return (
    <div className="flex bg-[black] min-h-screen text-white space-y-6 overflow-y-auto ml-20 mt-[5%]">
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-3">
            <div className="relative">
              <button
                onClick={() => setShowCalendar(!showCalendar)}
                className="flex items-center gap-3 
              bg-[#131313] border border-[#1F1F1F] 
              rounded-xl px-5 py-3 text-sm"
              >
                <FiCalendar className="text-white text-lg" />
                <span className="text-white font-medium">
                  {selectedDate
                    ? selectedDate.toLocaleDateString()
                    : "Last 30 days"}
                </span>
                <FiChevronDown className="text-white text-lg ml-2" />
              </button>

              {showCalendar && (
                <div className="absolute z-50 mt-3 bg-[#131313] border border-[#1F1F1F] rounded-xl p-3 shadow-xl">
                  <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => {
                      setSelectedDate(date);
                      setShowCalendar(false);
                    }}
                  />
                </div>
              )}
            </div>

            <button
              onClick={() => fetchUsers()}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1F1F1F]"
            >
              <FiRefreshCcw className={refreshing ? "animate-spin" : ""} />
              Refresh
            </button>
          </div>
        </div>

        {/* Stats Section */}
        {loading ? (
          <div className="text-center py-10">Loading...</div>
        ) : (
          <>
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {/* Active Tier */}
              <div className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-2xl p-6">
                <p className="text-gray-400 text-sm">Active Plans</p>
                <h2 className="text-3xl font-semibold mt-2">
                  {stats[0]?.value || 0}
                </h2>
              </div>

              {/* Credits Issued */}
              <div className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-2xl p-6">
                <p className="text-gray-400 text-sm">Credits Issued</p>
                <h2 className="text-3xl font-semibold mt-2">
                  {stats[1]?.value || 0}
                </h2>
              </div>

              {/* Operations */}
              <div className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-2xl p-6">
                <p className="text-gray-400 text-sm">Total Plans</p>
                <h2 className="text-3xl font-semibold mt-2">
                  {stats[2]?.value || 0}
                </h2>
              </div>
            </div>

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Subscription Plans</h2>

              <div
                className="inline-block p-[1.5px] rounded-[13px] 
             bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600"
              >
                <button
                  onClick={() => setShowModal(true)}
                  className="flex items-center gap-3 px-4 py-2
                rounded-xl bg-black text-white
                text-lg font-medium border border-[#1F1F1F] cursor-pointer"
                >
                  <FiPlus className="text-xl" />
                  Add New Plan
                </button>
              </div>
            </div>

            {/* Plans */}
    {/* Plans */}
<div className="w-full overflow-hidden">
  <div className="overflow-x-auto scrollbar-hide">
    <div className="flex gap-6 w-max">
      {plans.map((plan) => (
        <div
          key={plan._id}
          className="w-[400px] flex-shrink-0 
                     bg-[#0F0F0F] border border-[#1F1F1F] 
                     rounded-xl overflow-hidden"
        >


                    {/* TOP COLORED HEADER */}
                    <div
                      className="p-6 text-white"
                      style={{
                        background: `linear-gradient(135deg, ${plan.colorTheme})`,
                      }}
                    >
                      <h3 className="text-2xl font-medium opacity-90">
                        {plan.name}
                      </h3>

                      <div className="mt-3 flex items-end gap-1">
                        <span className="text-3xl font-bold">
                          {plan.credits}
                        </span>
                        <span className="text-m opacity-80 mt-1 ml-1 font-bold">
                          Credits
                        </span>
                      </div>

                      <div className="flex justify-between mt-4 text-sm ">
                        <span className="font-bold text-xl">₹{plan.price}</span>
                        <span className="opacity-80">
                          ₹{plan.perCreditPrice}/credit
                        </span>
                      </div>
                    </div>

                    {/* BODY */}
                    <div className="p-6 text-m text-white">
                      <div className="flex justify-between py-2">
                        <span>Credits</span>
                        <span>{plan.credits}</span>
                      </div>

                      <div className="flex justify-between py-2">
                        <span>Active Users</span>
                        <span>{plan.activeUsers?.toLocaleString() || 0}</span>
                      </div>

                      <div className="flex justify-between py-2">
                        <span>Valid Till</span>
                        <span>{plan.validityDays} days from purchase</span>
                      </div>

                      <div className="border-t border-[#1F1F1F] my-4"></div>

                      {/* BUTTON */}
                      <button
                        className="w-full py-3 rounded-xl text-base font-medium text-white"
                        style={{
                          background:
                            "linear-gradient(90deg, #fb923c, #ec4899, #9333ea)",
                        }}
                      >
                        Edit Plan
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </div>
          </>
        )}

        <div
          className="bg-[#0F0F0F] border border-[#1F1F1F] 
                      rounded-2xl p-8  mt-[3%]"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-semibold">Credit Configuration</h2>

            <button
              className="flex items-center gap-2 
                             px-4 py-2 text-sm 
                             border border-[#2A2A2A] 
                             rounded-lg hover:bg-[#111] transition"
            >
              <FiSettings className="text-base" />
              Configure
            </button>
          </div>

          {/* Video Generation */}
          <div className="mb-8">
            <h3 className="text-sm font-medium mb-4">Video Generation</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-white">720×720 Standard</label>
                <input
                  type="text"
                  placeholder="10 credits"
                  className="mt-2 w-full bg-[#111] 
                           border border-[#2A2A2A] 
                           rounded-lg px-4 py-2.5 text-sm
                           focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-sm text-white">1920×1080 HD</label>
                <input
                  type="text"
                  placeholder="15 credits"
                  className="mt-2 w-full bg-[#111] 
                           border border-[#2A2A2A] 
                           rounded-lg px-4 py-2.5 text-sm
                           focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
          </div>

          {/* Banner Generation */}
          <div className="mb-8">
            <h3 className="text-sm font-medium mb-4">Banner Generation</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-white">720×720 Standard</label>
                <input
                  type="text"
                  placeholder="10 credits"
                  className="mt-2 w-full bg-[#111] 
                           border border-[#2A2A2A] 
                           rounded-lg px-4 py-2.5 text-sm
                           focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-sm text-white">1920×1080 HD</label>
                <input
                  type="text"
                  placeholder="15 credits"
                  className="mt-2 w-full bg-[#111] 
                           border border-[#2A2A2A] 
                           rounded-lg px-4 py-2.5 text-sm
                           focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
          </div>

          {/* Avatar Generation */}
          <div className="mb-8">
            <h3 className="text-sm font-medium mb-4">Avatar Generation</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-white">1080×1080 Standard</label>
                <input
                  type="text"
                  placeholder="10 credits"
                  className="mt-2 w-full bg-[#111] 
                           border border-[#2A2A2A] 
                           rounded-lg px-4 py-2.5 text-sm
                           focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <button
            className="w-full bg-gradient-to-r 
                     from-orange-400 via-pink-500 to-purple-600
                     py-3 rounded-xl text-sm font-medium
                     hover:opacity-90 transition"
          >
            Save Configuration
          </button>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center 
  bg-black/70 backdrop-blur-sm px-4"
        >
          <div
            className="bg-[#0F0F0F] border border-[#1F1F1F] 
    w-[800px] max-w-[95%] 
    max-h-[90vh] overflow-y-auto
    rounded-2xl p-8 relative
    scrollbar-thin scrollbar-thumb-[#2A2A2A] scrollbar-track-transparent"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Create New Plan</h2>

              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Divider */}
            <div className="border-t border-[#1F1F1F] mb-6"></div>

            {/* Basic Info */}
            <h3 className="text-sm font-medium mb-4">Basic Information</h3>

            <div className="space-y-5 mb-6">
              <div>
                <label className="text-sm">
                  Plan Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., Professional"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-2 w-full bg-[#111] border border-[#2A2A2A]
  rounded-lg px-4 py-3 text-sm
  focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-sm">Description</label>
                <textarea
                  placeholder="Brief description of this plan..."
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      description: e.target.value,
                    })
                  }
                  className="mt-2 w-full bg-[#111] border border-[#2A2A2A]
  rounded-lg px-4 py-3 text-sm h-24
  focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div className="border-t border-[#1F1F1F] mb-6"></div>

            {/* Pricing */}
            <h3 className="text-sm font-medium mb-4">Pricing</h3>

            <div className="mb-6">
              <label className="text-sm">
                Credits <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="0"
                value={formData.credits}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    credits: Number(e.target.value),
                  })
                }
                className="mt-2 w-full bg-[#111] border border-[#2A2A2A]
  rounded-lg px-4 py-3 text-sm
  focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="mb-6">
              <label className="text-sm">
                Price <span className="text-red-500"></span>
              </label>
              <input
                type="number"
                placeholder="0"
                value={formData.price}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    price: Number(e.target.value),
                  })
                }
                className="mt-2 w-full bg-[#111] border border-[#2A2A2A]
  rounded-lg px-4 py-3 text-sm
  focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="border-t border-[#1F1F1F] mb-6"></div>

            {/* Credit Validity */}
            <h3 className="text-sm font-medium mb-4">Credit Validity</h3>

            <div className="mb-6">
              <input
                type="text"
                placeholder="Enter feature..."
                value={formData.validity}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    validity: e.target.value,
                  })
                }
                className="w-full bg-[#111] border border-[#2A2A2A]
  rounded-lg px-4 py-3 text-sm
  focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Divider */}
            <div className="border-t border-[#1F1F1F] my-6"></div>

            {/* Display Settings */}
            <h3 className="text-sm font-medium mb-4">Display Settings</h3>

            {/* Color Theme */}
            <div className="mb-6">
              <label className="text-sm mb-3 block">Color Theme</label>

              <div className="flex gap-4">
                {[
                  "from-gray-500 to-gray-700",
                  "from-blue-500 to-blue-700",
                  "from-purple-500 to-purple-700",
                  "from-green-500 to-green-700",
                  "from-orange-500 to-orange-700",
                  "from-red-500 to-red-700",
                ].map((gradient, index) => (
                  <div
                    key={index}
                    className={`w-28 h-16 rounded-xl cursor-pointer 
        bg-gradient-to-r ${gradient}
        border-2 border-transparent hover:border-white transition`}
                  />
                ))}
              </div>
            </div>

            {/* Mark Popular + Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Mark as Popular */}
              <div className="border border-[#1F1F1F] rounded-xl p-4 flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={formData.popular}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      popular: e.target.checked,
                    })
                  }
                  className="w-5 h-5 accent-purple-600"
                />

                <div>
                  <p className="text-sm font-medium">Mark as Popular</p>
                  <p className="text-xs text-gray-400">Show "POPULAR" badge</p>
                </div>
              </div>

              {/* Status */}
              <div>
                <label className="text-sm block mb-2">Status</label>
                <input
                  type="text"
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status: e.target.value,
                    })
                  }
                  className="w-full bg-[#111] border border-[#2A2A2A]
  rounded-lg px-4 py-3 text-sm
  focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* Bottom Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 border border-[#1F1F1F] 
    py-3 rounded-xl text-sm hover:bg-[#111] transition"
              >
                Cancel
              </button>

              <button
                onClick={handleCreatePlan}
                className="flex-1 bg-gradient-to-r 
  from-purple-500 to-pink-600
  py-3 rounded-xl text-sm font-medium
  hover:opacity-90 transition"
              >
                Create Plan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreditsPlans;