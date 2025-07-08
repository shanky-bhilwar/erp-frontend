import React from 'react';

const DashboardHeader = ({ activeTabData }) => {
  return (
    <div className="bg-gradient-to-br from-[#4361ee] to-[#3f37c9] text-white p-5 rounded-xl shadow-lg shadow-indigo-500/20 mb-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold mb-1">
            <i className="fas fa-chart-network "></i>
            {activeTabData?.headerTitle || "Departmental KPI Dashboard"}
          </h1>
          <p className="m-0">
            {activeTabData?.headerSubtitle || "Track performance metrics across all departments"}
          </p>
        </div>
        <div className="flex">
          <div className="dropdown relative mr-3">
            <button
              className="btn bg-white bg-opacity-20 hover:bg-opacity-30 text-sm dropdown-toggle"
              type="button"
              id="notificationDropdown"
              data-bs-toggle="dropdown"
            >
              <i className="fas fa-bell"></i>
              <span className="absolute top-0 left-full -translate-y-1/2 -translate-x-1/2 badge rounded-full bg-red-500 text-xs">
                7
              </span>
            </button>
            <ul className="dropdown-menu absolute right-0 mt-2 py-1 w-56 bg-white rounded-md shadow-lg z-50 hidden">
              <li>
                <a className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">
                  <i className="fas fa-trophy text-yellow-500 mr-2"></i> Production efficiency improved
                </a>
              </li>
              <li>
                <a className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">
                  <i className="fas fa-exclamation-triangle text-red-500 mr-2"></i> Procurement delays reported
                </a>
              </li>
              <li>
                <a className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i> Development milestones achieved
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown relative">
            <a
              href="#"
              className="d-block link-light no-underline dropdown-toggle flex items-center"
              id="userDropdown"
              data-bs-toggle="dropdown"
            >
              <img
                src="https://ui-avatars.com/api/?name=KPI+Manager&background=random"
                alt="Admin"
                width="36"
                height="36"
                className="rounded-full mr-2"
              />
              <span>KPI Manager</span>
            </a>
            <ul className="dropdown-menu absolute right-0 mt-2 py-1 w-48 bg-white rounded-md shadow-lg z-50 hidden">
              <li>
                <a className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">
                  <i className="fas fa-user mr-2"></i> Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">
                  <i className="fas fa-cog mr-2"></i> Settings
                </a>
              </li>
              <li>
                <hr className="dropdown-divider my-1 border-gray-200" />
              </li>
              <li>
                <a className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">
                  <i className="fas fa-sign-out-alt mr-2"></i> Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;