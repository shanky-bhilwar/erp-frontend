import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faChevronDown,
  faChevronUp,
  faCalendarAlt,
  faBuilding,
  faLightbulb,
  faExclamationTriangle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const FilterButtonSection = ({ filters, setFilters }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);

  const filterOptions = {
    timePeriod: {
      icon: faCalendarAlt,
      label: "Time Period",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      options: ["Last 7 days", "Last 30 days", "Last 90 days", "Last Year"]
    },
    businessSegment: {
      icon: faBuilding,
      label: "Business Segment",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
      options: ["All Segments", "Technology", "Healthcare", "Finance", "Retail", "Manufacturing"]
    },
    opportunityType: {
      icon: faLightbulb,
      label: "Opportunity Type",
      color: "bg-gradient-to-br from-green-500 to-teal-500",
      options: ["All Types", "Market Expansion", "Product Innovation", "Strategic Partnerships", "Operational Efficiency", "Customer Acquisition"]
    },
    priorityLevel: {
      icon: faExclamationTriangle,
      label: "Priority Level",
      color: "bg-gradient-to-br from-orange-500 to-red-500",
      options: ["All Levels", "High", "Medium", "Low"]
    }
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
    setActiveFilter(null);
  };

  const toggleFilter = (filterType) => {
    setActiveFilter(activeFilter === filterType ? null : filterType);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Main Filter Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
            showFilters 
              ? 'bg-gradient-to-br from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700' 
              : 'bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
          }`}
        >
          <FontAwesomeIcon 
            icon={showFilters ? faTimes : faFilter} 
            className={`text-white text-lg transition-all duration-300 ${showFilters ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Filter Options - Vertical Stack Animation */}
        {showFilters && (
          <div className="absolute bottom-16 right-0 flex flex-col-reverse gap-3">
            {Object.entries(filterOptions).map(([key, option], index) => (
              <div
                key={key}
                className={`relative transition-all duration-500 ease-out ${
                  showFilters 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-4'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <button
                  onClick={() => toggleFilter(key)}
                  className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${option.color} relative`}
                >
                  <FontAwesomeIcon 
                    icon={option.icon} 
                    className="text-white text-sm"
                  />
                </button>

                {/* Suboptions */}
                {activeFilter === key && (
                  <div className="absolute right-16 bottom-0 w-48 bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden animate-[slideIn_0.3s_ease-out] z-10 max-h-[60vh]">
                    <div className={`p-3 text-white text-sm font-semibold ${option.color}`}>
                      <FontAwesomeIcon icon={option.icon} className="mr-2" />
                      {option.label}
                    </div>
                    <div className="max-h-48 overflow-y-auto">
                      {option.options.map((optionValue, optionIndex) => (
                        <button
                          key={optionValue}
                          onClick={() => handleFilterChange(key, optionValue)}
                          className={`w-full text-left px-4 py-2 text-sm transition-all duration-200 hover:bg-gray-50 ${
                            filters[key] === optionValue 
                              ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-500' 
                              : 'text-gray-700'
                          }`}
                          style={{
                            animationDelay: `${optionIndex * 50}ms`
                          }}
                        >
                          {optionValue}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Active Filters Indicator */}
        {(filters.timePeriod !== "Last 30 days" || 
          filters.businessSegment !== "All Segments" || 
          filters.opportunityType !== "All Types" || 
          filters.priorityLevel !== "All Levels") && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">
              {Object.values(filters).filter(value => 
                !value.includes("All") && !value.includes("Last 30 days")
              ).length}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterButtonSection;