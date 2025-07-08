// DashboardLayout.js
import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { TrendingUp, Receipt, Building2 } from "lucide-react";
import FutureBusiness from "../Future-business/FutureBusiness";
import TaxSection from "../Tax-Section/TaxSection";
import FinancialDashboard from "../Cash-banks/FinancialDashboard"
import DashboardHeader from "./DashboardHeader";

const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  const tabs = [
    {
      path: "future-business", // changed from absolute to relative path
      name: "Future Business",
      icon: TrendingUp,
      component: <FutureBusiness />,
      headerTitle: "Future Business",
      headerSubtitle: "Plan and track your upcoming business initiatives"
    },
    {
      path: "tax", // changed from absolute to relative path
      name: "Tax",
      icon: Receipt,
      component: <TaxSection />,
      headerTitle: "Tax Management",
      headerSubtitle: "Monitor tax compliance and financial obligations"
    },
    {
      path: "cash-banks", // changed from absolute to relative path
      name: "Cash & Banks",
      icon: Building2,
      component: <FinancialDashboard />,
      headerTitle: "Cash & Banks",
      headerSubtitle: "Track cash flow and banking transactions"
    },
  ];

  const handleTabChange = (path) => {
    setIsLoading(true);
    navigate(path);
    setTimeout(() => setIsLoading(false), 300);
  };

  const getActiveComponent = () => {
    const activeTabData = tabs.find(tab => tab.path === activeTab);
    return activeTabData ? activeTabData.component : <FutureBusiness />;
  };

  const getActiveTabData = () => {
    const activeTabData = tabs.find(tab => tab.path === activeTab);
    return activeTabData || tabs[0]; // Default to first tab if no match
  };

  return (
    <div className="dashboard-container bg-[#f0f2f5] lg:p-5">
       <DashboardHeader activeTabData={getActiveTabData()} />
      <ul
        className="flex items-center mb-6 bg-white rounded-xl p-2 shadow-[0_4px_12px_rgba(0,0,0,0.05)] overflow-x-auto whitespace-nowrap"
        id="dashboardTabs"
        role="tablist"
      >
       
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <li key={tab.path} className="flex-shrink-0" role="presentation">
              <button
                className={`flex items-center px-5 py-3 font-semibold rounded-lg transition-all duration-300 ease-in-out whitespace-nowrap ${
                  activeTab === tab.path
                    ? 'bg-gradient-to-br from-[#4361ee] to-[#3f37c9] text-white shadow-[0_4px_10px_rgba(0,0,0,0.2)]'
                    : 'text-[#2b2d42] hover:bg-[rgba(67,97,238,0.1)] hover:text-[#4361ee]'
                }`}
                onClick={() => handleTabChange(tab.path)}
                type="button"
              >
                <IconComponent className="mr-2" size={18} />
                {tab.name}
              </button>
            </li>
          );
        })}
      </ul>

       <div className="tab-content">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;