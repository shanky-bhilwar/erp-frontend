import React, { useMemo } from 'react';
import {
  Calendar, ShoppingCart, FileText, User, Truck,
  BarChart2, DollarSign, Package, CreditCard, TrendingUp
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const BusinessDashboard = ({
  userName = "Administrator",
  activeMenu = "Dashboard",
  activeSubMenu = "Dashboard"
}) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const getHeaderTitle = () => {
    if (activeSubMenu === activeMenu) return `${activeMenu} Overview`;
    return `${activeMenu} > ${activeSubMenu}`;
  };

  const getPerformanceData = () => {
    const baseData = [
      { label: "Revenue", value: "$42.8K", icon: DollarSign, color: "text-blue-600", bgColor: "bg-blue-50", borderColor: "border-l-4 border-blue-600" },
      { label: "Orders", value: "1,248", icon: ShoppingCart, color: "text-purple-600", bgColor: "bg-purple-50", borderColor: "border-l-4 border-purple-600" }
    ];

    switch (activeMenu) {
      case 'POS':
        return [
          ...baseData,
          { label: "Today's Sales", value: "$8,742", icon: CreditCard, color: "text-green-600", bgColor: "bg-green-50", borderColor: "border-l-4 border-green-600" },
          { label: "Avg. Order", value: "$142", icon: TrendingUp, color: "text-amber-600", bgColor: "bg-amber-50", borderColor: "border-l-4 border-amber-600" }
        ];
      case 'Inventory':
        return [
          ...baseData,
          { label: "Low Stock", value: "24 items", icon: Package, color: "text-red-600", bgColor: "bg-red-50", borderColor: "border-l-4 border-red-600" },
          { label: "Stock Value", value: "$182K", icon: DollarSign, color: "text-emerald-600", bgColor: "bg-emerald-50", borderColor: "border-l-4 border-emerald-600" }
        ];
      default:
        return [
          ...baseData,
          { label: "Expenses", value: "$18.2K", icon: FileText, color: "text-green-600", bgColor: "bg-green-50", borderColor: "border-l-4 border-green-600" },
          { label: "Profit", value: "$24.6K", icon: BarChart2, color: "text-red-600", bgColor: "bg-red-50", borderColor: "border-l-4 border-red-600" }
        ];
    }
  };

  const getChartData = () => {
    switch (activeSubMenu) {
      case 'Sales Analytics':
        return [
          { month: 'Jan', value: 15000 },
          { month: 'Feb', value: 18000 },
          { month: 'Mar', value: 16000 },
          { month: 'Apr', value: 19000 },
          { month: 'May', value: 25000 },
          { month: 'Jun', value: 28000 },
          { month: 'Jul', value: 32000 },
          { month: 'Aug', value: 35000 },
          { month: 'Sep', value: 38000 },
          { month: 'Oct', value: 42000 }
        ];
      case 'Inventory Management':
        return [
          { month: 'Jan', stock: 4200 },
          { month: 'Feb', stock: 3800 },
          { month: 'Mar', stock: 4100 },
          { month: 'Apr', stock: 3900 },
          { month: 'May', stock: 4500 },
          { month: 'Jun', stock: 4800 },
          { month: 'Jul', stock: 5200 },
          { month: 'Aug', stock: 5500 },
          { month: 'Sep', stock: 5800 },
          { month: 'Oct', stock: 6200 }
        ];
      default:
        return [
          { month: 'Jan', value: 15000 },
          { month: 'Feb', value: 18000 },
          { month: 'Mar', value: 16000 },
          { month: 'Apr', value: 19000 },
          { month: 'May', value: 25000 },
          { month: 'Jun', value: 28000 },
          { month: 'Jul', value: 32000 },
          { month: 'Aug', value: 35000 },
          { month: 'Sep', value: 38000 },
          { month: 'Oct', value: 42000 }
        ];
    }
  };

  const performanceData = useMemo(() => getPerformanceData(), [activeMenu]);
  const chartData = useMemo(() => getChartData(), [activeSubMenu]);
  const chartKey = activeSubMenu === 'Inventory Management' ? 'stock' : 'value';

  const recentActivities = [
    {
      icon: ShoppingCart,
      title: "New Order Received",
      description: "Order #ORD-1024 from Tech Solutions Inc.",
      time: "10:24 AM",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: FileText,
      title: "Invoice Generated",
      description: "Invoice #INV-2058 for $1,850.00",
      time: "9:45 AM",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: User,
      title: "New Customer Added",
      description: "Global Enterprises Ltd.",
      time: "9:12 AM",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Truck,
      title: "Shipment Delivered",
      description: "Order #ORD-1021 to ABC Corporation",
      time: "Yesterday",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    }
  ];

  const pendingTasks = [
    { task: "Approve monthly financial reports", priority: "High", priorityColor: "bg-red-100 text-red-700" },
    { task: "Review inventory levels", priority: "Medium", priorityColor: "bg-yellow-100 text-yellow-700" },
    { task: "Follow up with suppliers", priority: "High", priorityColor: "bg-red-100 text-red-700" },
    { task: "Schedule team meeting", priority: "Low", priorityColor: "bg-green-100 text-green-700" },
    { task: "Update CRM records", priority: "Medium", priorityColor: "bg-yellow-100 text-yellow-700" }
  ];

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen overflow-y-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
            {getHeaderTitle()}
          </h1>
          <p className="text-gray-500">
            {activeSubMenu === 'Dashboard'
              ? `Welcome back, ${userName}! Here's what's happening today.`
              : `Viewing ${activeSubMenu.toLowerCase()} data and analytics`}
          </p>
        </div>
        <div className="flex items-center space-x-2 text-gray-600 bg-white px-3 py-2 rounded-lg shadow-sm">
          <Calendar className="w-5 h-5" />
          <span className="text-sm md:text-base font-medium">{currentDate}</span>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
        {/* Metrics */}
        <div className="xl:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-5 h-full">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Key Metrics</h2>
            <div className="space-y-4">
              {performanceData.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className={`${item.bgColor} ${item.borderColor} p-4 rounded-lg flex items-start space-x-3`}>
                    <div className="p-2 rounded-md bg-white">
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <p className={`text-xl font-bold ${item.color}`}>{item.value}</p>
                      <p className="text-sm text-gray-600">{item.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="xl:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-5 h-full">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              {activeSubMenu === 'Inventory Management' ? 'Stock Levels' : 'Sales Trend'}
            </h2>
            <div className="h-64 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Line type="monotone" dataKey={chartKey} stroke="#3B82F6" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="w-full md:col-span-2 lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-4 md:p-5 h-full">
            <h2 className="text-base md:text-lg font-semibold text-gray-700 mb-4">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3"
                >
                  <div
                    className={`p-2 rounded-lg flex-shrink-0 ${activity.iconBg} ${activity.iconColor}`}
                  >
                    <activity.icon className="w-4 h-4" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start flex-wrap">
                      <div className="pr-2">
                        <p className="text-sm font-medium text-gray-800 break-words">
                          {activity.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-1 break-words whitespace-normal">
                          {activity.description}
                        </p>
                      </div>
                      <span className="text-xs text-gray-400 ml-auto whitespace-nowrap">
                        {activity.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* Tasks */}
        <div className="xl:col-span-4">
          <div className="bg-white rounded-xl shadow-sm p-5">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              {activeMenu === 'HR' ? 'Employee Tasks' : 'Pending Actions'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {pendingTasks.map((task, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <input type="checkbox" className="w-4 h-4 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">{task.task}</p>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${task.priorityColor}`}>
                      {task.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDashboard;
