import React, { useState } from 'react';
import { Bell, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Menubar = ({ 
  userName = "John Doe", 
  onMenuChange = () => {},
  alertCount = 5 
}) => {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const mainMenuItems = [
    'Dashboard', 'POS', 'Inventory', 'Customers', 'Suppliers', 
    'HR', 'CRM', 'Sales', 'Projects', 'Support', 'Reports'
  ];

  const secondaryMenuItems = [
    'KPI', 'Intelligence', 'Marketing', 'Manufacturing', 'Logistics',
    'Ecommerce', 'Company setup', 'Future-Business', 'Chatbot', 'Helpdesk'
  ];

  const handleMenuClick = (item) => {
    console.log('clicked', item)
    setActiveMenu(item);
    setMobileMenuOpen(false);

    // Convert item to lowercase path like /pos, /inventory
    const path = `/${item.toLowerCase().replace(/\s+/g, '-')}`;

    // Optional: check for user access control
    // if (!hasAccessTo(item)) {
    //   return alert("This module is not available in your plan.");
    // }

    navigate(path);
  };


  const MenuButton = ({ item, isActive, onClick }) => (
    <button
      onClick={() => onClick(item)}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
        isActive
          ? 'bg-[rgba(255,255,255,0.25)] text-white shadow-sm'
          : 'bg-[rgba(255,255,255,0.15)] text-white text-opacity-90 hover:bg-[rgba(255,255,255,0.20)]'
      }`}
    >
      {item}
    </button>
  );

  return (
    <nav style={{ backgroundColor: '#3c5989' }} className="text-white shadow-lg py-2">
      {/* Top Bar */}
      <div className="hidden lg:flex items-start justify-between px-6 pt-4 pb-2">
        {/* Left: Logo + Welcome */}
        <div className="flex flex-col w-60">
          <h1 className="text-xl font-bold">Enterprise ERP</h1>
          <p className="text-sm text-white text-opacity-70">Business Management System</p>
          <div className="mt-2 bg-[rgba(255,255,255,0.25)] px-3 py-2 rounded-lg font-medium text-sm text-white shadow-sm w-fit">
            Welcome, {userName}
          </div>
        </div>

        {/* Center: Main + Secondary Menus */}
        <div className="flex-1 flex flex-col items-center space-y-2">
          <div className="flex flex-wrap justify-center gap-2">
            {mainMenuItems.map((item) => (
              <MenuButton
                key={item}
                item={item}
                isActive={activeMenu === item}
                onClick={handleMenuClick}
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {secondaryMenuItems.map((item) => (
              <MenuButton
                key={item}
                item={item}
                isActive={activeMenu === item}
                onClick={handleMenuClick}
              />
            ))}
          </div>
        </div>

        {/* Right: Alerts */}
        <div className="flex items-center justify-end w-60">
          <button className="relative bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full transition-transform duration-200 transform hover:scale-105 shadow-md group will-change-transform">
            <div className="flex items-center space-x-2">
              <Bell className="w-4 h-4" />
              <span className="text-sm font-medium">Alerts ({alertCount})</span>
            </div>
            <span className="absolute inset-0 rounded-full bg-red-400 opacity-0 group-hover:opacity-100 
                            animate-ping duration-1000 group-hover:duration-1000"></span>
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold">Enterprise ERP</h1>
              <p className="text-xs text-white text-opacity-70">Business Management System</p>
            </div>
          </div>
          <div>
            <button className="relative bg-red-500 hover:bg-red-600 px-3 py-1 rounded-full transition-transform duration-200 transform hover:scale-105 shadow-md group">
              <div className="flex items-center space-x-1">
                <Bell className="w-4 h-4" />
                <span className="text-xs font-medium">({alertCount})</span>
              </div>
              <span className="absolute inset-0 rounded-full bg-red-400 opacity-0 group-hover:opacity-100 
                            animate-ping duration-1000 group-hover:duration-1000"></span>
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <>
            <div className="mt-4 bg-[rgba(255,255,255,0.25)] px-3 py-2 rounded-lg font-medium text-sm text-white shadow-sm">
              Welcome, {userName}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {mainMenuItems.map((item) => (
                <MenuButton
                  key={item}
                  item={item}
                  isActive={activeMenu === item}
                  onClick={handleMenuClick}
                />
              ))}
              {secondaryMenuItems.map((item) => (
                <MenuButton
                  key={item}
                  item={item}
                  isActive={activeMenu === item}
                  onClick={handleMenuClick}
                />
              ))}
            </div>

            <div className="mt-4 text-sm text-white text-opacity-70 font-medium text-center">
              smart POS
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Menubar;
