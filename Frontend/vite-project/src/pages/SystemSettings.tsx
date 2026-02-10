import React, { useState } from "react";
import Save from "../img/Save.svg";
import Bell from "../img/NotificationSettings.svg";
import DollarSign from "../img/Payment Gateway.svg";
import Globe from "../img/GeneralSettings.svg";

interface GeneralSettings {
    platformName: string;
    supportEmail: string;
    supportPhone: string;
}

interface NotificationSettings {
    pushService: string;
    fcmKey: string;
}

interface PaymentSettings {
    gateway: string;
    apiKey: string;
    apiSecret: string;
    webhookUrl: string;
    sandbox: boolean;
}

const SystemSettings: React.FC = () => {
    const [general, setGeneral] = useState<GeneralSettings>({
        platformName: "",
        supportEmail: "",
        supportPhone: "",
    });

    const [notification, setNotification] = useState<NotificationSettings>({
        pushService: "",
        fcmKey: "",
    });

    const [payment, setPayment] = useState<PaymentSettings>({
        gateway: "",
        apiKey: "",
        apiSecret: "",
        webhookUrl: "",
        sandbox: false,
    });

    // Handlers
    const handleGeneralChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setGeneral({ ...general, [e.target.name]: e.target.value });
    };

    const handleNotificationChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setNotification({ ...notification, [e.target.name]: e.target.value });
    };

    const handlePaymentChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value, type, checked } = e.target;
        setPayment({
            ...payment,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    return (
        <div className="min-h-screen bg-black text-white p-2 mt-[5%]">
            <h1 className="text-3xl font-semibold mb-2">System Settings</h1>
            <p className="text-gray-400 mb-8">
                Configure system-wide settings and preferences
            </p>

            {/* ================= General Settings ================= */}
            <div className="bg-[#111111] border border-[#1F1F1F] rounded-2xl p-8 mb-8">

                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                    <img src={Globe} alt="General" className="w-5 h-5" />
                    <h2 className="text-xl font-semibold text-white">
                        General Settings
                    </h2>
                </div>


                {/* Form Grid */}
                <div className="grid grid-cols-2 gap-8">

                    {/* Platform Name */}
                    <div>
                        <label className="block text-sm text-white mb-2">
                            Platform Name
                        </label>
                        <input
                            type="text"
                            name="platformName"
                            value={general.platformName}
                            onChange={handleGeneralChange}
                            placeholder="AI Video Gen"
                            className="w-full bg-[#111111] border border-[#343434] 
        rounded-xl px-4 py-3 text-sm 
        focus:outline-none focus:border-purple-500 
        transition"
                        />
                    </div>

                    {/* Support Email */}
                    <div>
                        <label className="block text-sm text-white mb-2">
                            Support Email
                        </label>
                        <input
                            type="email"
                            name="supportEmail"
                            value={general.supportEmail}
                            onChange={handleGeneralChange}
                            placeholder="support@aivideogen.com"
                            className="w-full bg-[#111111] border border-[#343434] 
        rounded-xl px-4 py-3 text-sm 
        focus:outline-none focus:border-purple-500 
        transition"
                        />
                    </div>

                    {/* Support Phone (Left aligned like image) */}
                    <div className="col-span-1">
                        <label className="block text-sm text-white mb-2">
                            Support Phone
                        </label>
                        <input
                            type="text"
                            name="supportPhone"
                            value={general.supportPhone}
                            onChange={handleGeneralChange}
                            placeholder="+91 98765 43210"
                            className="w-full bg-[#111111] border border-[#343434] 
        rounded-xl px-4 py-3 text-sm 
        focus:outline-none focus:border-purple-500 
        transition"
                        />
                    </div>

                </div>

                {/* Save Button */}
                <button
                    className="mt-8 w-full flex items-center justify-center gap-3
  bg-gradient-to-r from-[#F88B65] via-[#D947AA] to-[#6C52E9]
  py-3.5 rounded-xl text-base font-medium
  hover:opacity-90 transition"
                >
                    <img src={Save} alt="Save" className="w-5 h-5" />

                    <span>Save General Settings</span>
                </button>

            </div>


            {/* ================= Notification Settings ================= */}
            <div className="bg-[#111111] border border-[#1F1F1F] rounded-2xl p-8 mb-8">

                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                    <img src={Bell} alt="Notification" className="w-5 h-5" />

                    <h2 className="text-xl font-semibold text-white">
                        Notification Settings
                    </h2>
                </div>

                {/* Fields */}
                <div className="space-y-8">

                    <div>
                        <label className="block text-sm text-white mb-3">
                            Push Notification Service
                        </label>
                        <input
                            type="text"
                            name="pushService"
                            value={notification.pushService}
                            onChange={handleNotificationChange}
                            className="w-full bg-[#111111] border border-[#343434] 
        rounded-xl px-4 py-3 text-sm
        focus:outline-none focus:border-purple-500 transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-white mb-3">
                            FCM Server Key
                        </label>
                        <input
                            type="password"
                            name="fcmKey"
                            value={notification.fcmKey}
                            onChange={handleNotificationChange}
                            className="w-full bg-[#111111] border border-[#343434] 
        rounded-xl px-4 py-3 text-sm
        focus:outline-none focus:border-purple-500 transition"
                        />
                    </div>

                </div>

                {/* Save Button */}
                <button
                    className="mt-8 w-full flex items-center justify-center gap-3
    bg-gradient-to-r from-[#F88B65] via-[#D947AA] to-[#6C52E9]
    py-3.5 rounded-xl text-sm font-medium
    hover:opacity-90 transition"
                >
                    <img src={Save} alt="Save" className="w-5 h-5" />

                    Save Notification Settings
                </button>

            </div>


            {/* ================= Payment Settings ================= */}

            <div className="bg-[#111111] border border-[#1F1F1F] rounded-2xl p-8">

                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                    <img src={DollarSign} alt="Payment" className="w-5 h-5" />

                    <h2 className="text-xl font-semibold text-white">
                        Payment Gateway Configuration
                    </h2>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-2 gap-8">

                    {/* Payment Gateway */}
                    <div className="col-span-2">
                        <label className="block text-sm text-white mb-3">
                            Payment Gateway
                        </label>
                        <input
                            type="text"
                            name="gateway"
                            value={payment.gateway}
                            onChange={handlePaymentChange}
                            className="w-full bg-[#111111] border border-[#343434]
      rounded-xl px-4 py-3 text-sm
      focus:outline-none focus:border-purple-500 transition"
                        />
                    </div>

                    {/* API Key ID */}
                    <div>
                        <label className="block text-sm text-white mb-3">
                            API Key ID
                        </label>
                        <input
                            type="password"
                            name="apiKey"
                            placeholder="..............."
                            value={payment.apiKey}
                            onChange={handlePaymentChange}
                            className="w-full bg-[#111111] border border-[#343434]
      rounded-xl px-4 py-3 text-sm
      focus:outline-none focus:border-purple-500 transition"
                        />
                    </div>

                    {/* API Secret Key */}
                    <div>
                        <label className="block text-sm text-white mb-3">
                            API Secret Key
                        </label>
                        <input
                            type="password"
                            name="apiSecret"
                            placeholder="..................."
                            value={payment.apiSecret}
                            onChange={handlePaymentChange}
                            className="w-full bg-[#111111] border border-[#343434]
      rounded-xl px-4 py-3 text-sm
      focus:outline-none focus:border-purple-500 transition"
                        />
                    </div>

                    {/* Webhook URL */}
                    <div className="col-span-2">
                        <label className="block text-sm text-white mb-3">
                            Webhook URL
                        </label>
                        <input
                            type="text"
                            name="webhookUrl"
                            placeholder="https://aivideogen.com/api/webhook/payment"
                            value={payment.webhookUrl}
                            onChange={handlePaymentChange}
                            className="w-full bg-[#111111] border border-[#343434]
      rounded-xl px-4 py-3 text-sm
      focus:outline-none focus:border-purple-500 transition"
                        />
                    </div>

                    {/* Sandbox Checkbox */}
                    <div className="col-span-2 flex items-center gap-3 mt-2">
                        <input
                            type="checkbox"
                            name="sandbox"
                            checked={payment.sandbox}
                            onChange={handlePaymentChange}
                            className="w-4 h-4 bg-[#111111] border border-[#343434]
      rounded accent-purple-600"
                        />
                        <label className="text-sm text-white">
                            Enable Test/Sandbox Mode
                        </label>
                    </div>

                </div>

                {/* Save Button */}
                <button
                    className="mt-8 w-full flex items-center justify-center gap-3
  bg-gradient-to-r from-[#F88B65] via-[#D947AA] to-[#6C52E9]
  py-3.5 rounded-xl text-sm font-medium
  hover:opacity-90 transition"
                >
                    <img src={Save} alt="Save" className="w-5 h-5" />

                    Save Payment Settings
                </button>

            </div>
        </div>
    );
};

export default SystemSettings;
