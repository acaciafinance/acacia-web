'use client'
import { useState } from "react";
import Layout from "../template/Layout";
import UserProfile from "./UserProfile";
import Payment from "./Payment";
import Security from "./Security";

const Account = () => {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState("profile");
  
    // Function to render the active tab content
    const renderTabContent = () => {
      switch (activeTab) {
        case "profile":
          return <UserProfile />;
        case "payments":
          return <Payment />;
        case "security":
          return <Security />;
        default:
          return <UserProfile />;
      }
    };
  
    return (
        <Layout>
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-semibold mb-6 text-blue-900">Account Settings</h1>
                <div className="flex border-b border-gray-200">
                <button
                    className={`py-2 px-4 ${
                    activeTab === "profile" ? "text-blue-900 border-b-2 border-blue-900" : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab("profile")}
                >
                    User Profile
                </button>
                <button
                    className={`py-2 px-4 ${
                    activeTab === "payments" ? "text-blue-900 border-b-2 border-blue-900" : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab("payments")}
                >
                    Payments
                </button>
                <button
                    className={`py-2 px-4 ${
                    activeTab === "security" ? "text-blue-900 border-b-2 border-blue-900" : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab("security")}
                >
                    Security
                </button>
                </div>
        
                <div className="mt-6">
                {renderTabContent()}
                </div>
            </div>
        </Layout>
    );
  };
  
  // Placeholder components for the individual tabs
//   const UserProfile = () => <div>User Profile Content</div>;
//   const Payments = () => <div>Payments Content</div>;
//   const Security = () => <div>Security Content</div>;
  
  export default Account;