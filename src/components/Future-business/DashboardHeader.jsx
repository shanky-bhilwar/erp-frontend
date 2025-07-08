import React from 'react';
import { FaChartLine, FaSyncAlt, FaDownload } from 'react-icons/fa';

const DashboardHeader = () => {
  return (
    <header className="bg-gradient-to-r from-[#1a2980] to-[#26d0ce] text-white py-6 shadow-[0_4px_12px_rgba(0,0,0,0.1)] mb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-2xl font-semibold flex items-center">
              <FaChartLine className="mr-3" />
              Business Opportunity Dashboard
            </h1>
            <p className="mt-1">Data-driven insights for future growth opportunities</p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col md:flex-row md:items-center md:justify-end space-y-2 md:space-y-0">
            <div className="inline-block mr-4">
              <span className="bg-white text-gray-800 px-3 py-2 rounded-md inline-flex items-center text-sm">
                <FaSyncAlt className="mr-2" />
                Last updated: Today, 10:30 AM
              </span>
            </div>
            <button className="bg-white text-gray-800 px-4 py-2 rounded-md inline-flex items-center hover:bg-gray-100 transition-colors">
              <FaDownload className="mr-2" />
              Export Report
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;