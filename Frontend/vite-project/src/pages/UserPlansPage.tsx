// import React from "react";


// const UserPlansPage: React.FC = () => {
//   const plans = [
//     {
//       name: "Starter",
//       price: 299,
//       yearly: 3229,
//       credits: 100,
//       annualCredits: 1400,
//       discount: 10,
//       gradient: "from-gray-500 to-gray-700",
//     },
//     {
//       name: "Professional",
//       price: 299,
//       yearly: 3229,
//       credits: 100,
//       annualCredits: 1400,
//       discount: 10,
//       gradient: "from-blue-500 to-blue-700",
//       popular: true,
//     },
//     {
//       name: "Enterprise",
//       price: 299,
//       yearly: 3229,
//       credits: 100,
//       annualCredits: 1400,
//       discount: 10,
//       gradient: "from-purple-500 to-pink-600",
//     },
//   ];

//   return (
//     <div className="min-h-screen text-white py-16 px-6 ">
//       <h1 className="text-3xl font-bold text-center mb-12">
//         Choose Your Plan
//       </h1>

//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-black">
//         {plans.map((plan, index) => (
//           <div
//             key={index}
//             className={`relative bg-white rounded-2xl shadow-lg p-8 border ${
//               plan.popular ? "border-blue-500" : "border-gray-200"
//             }`}
//           >
//             {plan.popular && (
//               <span className="absolute -top-3 right-6 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
//                 Most Popular
//               </span>
//             )}

//             <h2 className="text-xl font-semibold mb-4">
//               {plan.name}
//             </h2>

//             <p className="text-4xl font-bold mb-2">
//               ₹{plan.price}
//               <span className="text-sm font-normal text-gray-500">
//                 {" "}
//                 /month
//               </span>
//             </p>

//             <p className="text-sm text-gray-500 mb-6">
//               ₹{plan.yearly}/year (Save {plan.discount}%)
//             </p>

//             <ul className="space-y-3 text-sm mb-8">
//               <li>✔ {plan.credits} Monthly Credits</li>
//               <li>✔ {plan.annualCredits} Annual Credits</li>
//               <li>✔ Priority Support</li>
//               <li>✔ Secure Payments</li>
//             </ul>

//             <button
//               className={`w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r ${plan.gradient} hover:opacity-90 transition`}
//             >
//               Subscribe Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserPlansPage;









import React, { useState } from "react";
// import axios from "axios";

const UserPlansPage: React.FC = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Starter",
      price: 299,
      yearly: 3229,
      credits: 100,
      annualCredits: 1400,
      discount: 10,
      gradient: "from-gray-500 to-gray-700",
    },
    {
      name: "Professional",
      price: 299,
      yearly: 3229,
      credits: 100,
      annualCredits: 1400,
      discount: 10,
      gradient: "from-blue-500 to-blue-700",
      popular: true,
    },
    {
      name: "Enterprise",
      price: 299,
      yearly: 3229,
      credits: 100,
      annualCredits: 1400,
      discount: 10,
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  const handleSubscribe = (plan: any) => {
    const options = {
      key: "rzp_test_S9B7QWgyGMR5Rd",
      amount:
        (billing === "monthly" ? plan.price : plan.yearly) * 100,
      currency: "INR",
      name: "Demo Company",
      description: `${plan.name} Plan`,
      handler: function (response: any) {
        alert("Payment Successful (Test Mode)");
        console.log(response);
      },
      theme: {
        color: "#2563eb",
      },
    };
  
    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };
  



  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Choose Your Plan
      </h1>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-12">
        <button
          onClick={() => setBilling("monthly")}
          className={`px-6 py-2 rounded-l-lg ${billing === "monthly"
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-black"
            }`}
        >
          Monthly
        </button>

        <button
          onClick={() => setBilling("yearly")}
          className={`px-6 py-2 rounded-r-lg ${billing === "yearly"
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-black"
            }`}
        >
          Yearly
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-2xl shadow-lg p-8 border ${plan.popular ? "border-blue-500" : "border-gray-200"
              }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 right-6 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            <h2 className="text-xl font-semibold mb-4 text-black">
              {plan.name}
            </h2>

            <p className="text-4xl font-bold mb-2 text-black">
              ₹{billing === "monthly" ? plan.price : plan.yearly}
              <span className="text-sm font-normal text-gray-500">
                {billing === "monthly" ? " /month" : " /year"}
              </span>
            </p>

            {billing === "yearly" && (
              <p className="text-sm text-green-600 mb-4">
                Save {plan.discount}% with yearly plan
              </p>
            )}

            <ul className="space-y-3 text-sm mb-8 text-black">
              <li>✔ {plan.credits} Monthly Credits</li>
              <li>✔ {plan.annualCredits} Annual Credits</li>
              <li>✔ Priority Support</li>
              <li>✔ Secure Payments</li>
            </ul>

            <button
              onClick={() => handleSubscribe(plan)}
              className={`w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r ${plan.gradient} hover:opacity-90 transition`}
            >
              Subscribe Now
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPlansPage;
