import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faChartPie,
  faPercentage,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const DashboardStats = ({ filters }) => {
  return (
    <div className="font-['Segoe_UI',_Tahoma,_Geneva,_Verdana,_sans-serif] text-[#333] text-sm relative">
      {/* Stats Row */}
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/4 px-2">
          <div className="rounded-lg overflow-hidden transition-all duration-200 shadow-[0_2px_6px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]">
            <div className="font-semibold text-sm bg-white border-b border-gray-100 p-3 flex items-center">
              <FontAwesomeIcon icon={faBullseye} className="mr-2 text-[#4361ee] text-sm" />
              Identified Opportunities
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-0">42</h2>
              <p className="text-gray-500 text-xs mb-0">+12% from last month</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4 px-2">
          <div className="rounded-lg overflow-hidden transition-all duration-200 shadow-[0_2px_6px_rgba(0,0,0,0.08)] mb-4 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]">
            <div className="font-semibold text-sm bg-white border-b border-gray-100 p-3 flex items-center">
              <FontAwesomeIcon icon={faChartPie} className="mr-2 text-[#4895ef] text-sm" />
              Estimated Value
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-0">$3.2M</h2>
              <p className="text-gray-500 text-xs mb-0">Potential annual revenue</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4 px-2">
          <div className="rounded-lg overflow-hidden transition-all duration-200 shadow-[0_2px_6px_rgba(0,0,0,0.08)] mb-4 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]">
            <div className="font-semibold text-sm bg-white border-b border-gray-100 p-3 flex items-center">
              <FontAwesomeIcon icon={faPercentage} className="mr-2 text-[#4cc9f0] text-sm" />
              Success Probability
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-0">68%</h2>
              <p className="text-gray-500 text-xs mb-0">Average across opportunities</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4 px-2">
          <div className="rounded-lg overflow-hidden transition-all duration-200 shadow-[0_2px_6px_rgba(0,0,0,0.08)] mb-4 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]">
            <div className="font-semibold text-sm bg-white border-b border-gray-100 p-3 flex items-center">
              <FontAwesomeIcon icon={faClock} className="mr-2 text-[#f72585] text-sm" />
              Avg. Time to ROI
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold ">9.2</h2>
              <p className="text-gray-500 text-xs ">Months to return on investment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;