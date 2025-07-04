import React, { useState } from 'react';
import { 
  BarChart3, FileText, Quote, Receipt, Package, Truck, Users, User, DollarSign,
  Grid3X3
} from 'lucide-react';

const DashboardSidebar = ({ activeMenu = 'Dashboard', activeSubMenu = 'Dashboard', onItemClick = () => {} }) => {
  const [selectedItem, setSelectedItem] = useState(activeSubMenu);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    onItemClick(item);
  };

  const sections = [
    {
      title: "SALES & FINANCE",
      items: [
        { name: "Dashboard", icon: BarChart3 },
        { name: "Create Invoice", icon: FileText },
        { name: "Manage Quotations", icon: Quote },
        { name: "Process Receipts", icon: Receipt }
      ]
    },
    {
      title: "OPERATIONS",
      items: [
        { name: "Inventory Management", icon: Package },
        { name: "Order Fulfillment", icon: Truck },
        { name: "Supplier Orders", icon: Users }
      ]
    },
    {
      title: "HUMAN RESOURCES",
      items: [
        { name: "Attendance", icon: User },
        { name: "Payroll", icon: DollarSign }
      ]
    }
  ];

  const SectionItem = ({ item, isActive }) => {
    const IconComponent = item.icon;
    return (
      <button
        onClick={() => handleItemClick(item.name)}
        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 group relative overflow-hidden ${
          isActive ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
        }`}
      >
        {isActive && (
          <span className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-r"></span>
        )}
        <div className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
          <IconComponent className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}`} />
        </div>
        <span className={`text-sm relative transition-all duration-300 ${isActive ? 'translate-x-0' : 'group-hover:translate-x-1'}`}>
          {item.name}
        </span>
        {!isActive && (
          <span className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-30 rounded-lg transition-opacity duration-300 -z-10"></span>
        )}
      </button>
    );
  };

  return (
    <div className="w-80 bg-white shadow-lg h-full overflow-y-auto border-r border-gray-200">
      <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-white">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Grid3X3 className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Quick Access</h2>
            <p className="text-xs text-gray-500">{activeMenu} Module</p>
          </div>
        </div>
      </div>

      <div className="p-4 pb-8">
        {sections.map((section, index) => (
          <div key={index} className="mb-8 last:mb-0">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-4 flex items-center">
              <span className="bg-gray-200 h-px flex-1 mr-3"></span>
              {section.title}
              <span className="bg-gray-200 h-px flex-1 ml-3"></span>
            </h3>
            <div className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <SectionItem key={itemIndex} item={item} isActive={selectedItem === item.name} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50">
        <p className="text-xs text-center text-gray-500">Enterprise ERP v2.0</p>
      </div>
    </div>
  );
};

export default DashboardSidebar;
