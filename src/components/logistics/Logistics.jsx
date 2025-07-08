import React, { useState } from 'react';
import { 
  Search, 
  Calendar, 
  Filter, 
  Plus, 
  ShoppingCart, 
  Package, 
  CheckCircle, 
  AlertTriangle,
  Truck,
  FileText,
  RefreshCw,
  BarChart3,
  Eye,
  Printer,
  Bell,
  User,
  ChevronDown,
  Settings
} from 'lucide-react';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [logisticsFilter, setLogisticsFilter] = useState('All Logistics');
  const [dateFilter, setDateFilter] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const orders = [
    {
      id: '#ORD-7852',
      customer: 'John Smith',
      date: 'Oct 12, 2023',
      amount: '$248.99',
      status: 'Processing',
      logistics: 'FedEx'
    },
    {
      id: '#ORD-7851',
      customer: 'Sarah Johnson',
      date: 'Oct 12, 2023',
      amount: '$112.50',
      status: 'Shipped',
      logistics: 'UPS'
    },
    {
      id: '#ORD-7849',
      customer: 'Michael Brown',
      date: 'Oct 11, 2023',
      amount: '$89.99',
      status: 'Pending',
      logistics: 'Not set'
    },
    {
      id: '#ORD-7845',
      customer: 'Emma Davis',
      date: 'Oct 10, 2023',
      amount: '$356.75',
      status: 'Delivered',
      logistics: 'DHL'
    },
    {
      id: '#ORD-7840',
      customer: 'Robert Wilson',
      date: 'Oct 9, 2023',
      amount: '$198.00',
      status: 'Delayed',
      logistics: 'FedEx'
    }
  ];

  const getStatusBadge = (status) => {
    const statusStyles = {
      'Processing': 'bg-yellow-100 text-yellow-800',
      'Shipped': 'bg-green-100 text-green-800',
      'Pending': 'bg-blue-100 text-blue-800',
      'Delivered': 'bg-green-100 text-green-800',
      'Delayed': 'bg-red-100 text-red-800'
    };
    return statusStyles[status] || 'bg-gray-100 text-gray-800';
  };

  const getLogisticsBadge = (logistics) => {
    const logisticsStyles = {
      'FedEx': 'bg-cyan-100 text-cyan-800',
      'UPS': 'bg-red-100 text-red-800',
      'DHL': 'bg-yellow-100 text-yellow-800',
      'Not set': 'bg-gray-100 text-gray-800'
    };
    return logisticsStyles[logistics] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-auto pb-35" onClick={() => setIsDropdownOpen(false)}>
      {/* Header */}
      <div className="bg-slate-700 text-white px-4 py-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center space-x-3 mb-4 sm:mb-0">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Package className="w-5 h-5 text-slate-700" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">Order & Shipment Dashboard</h1>
              <p className="text-slate-300 text-sm">Manage orders, shipments and logistics in one place</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="bg-slate-600 px-3 py-2 rounded-md text-sm flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Today</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="relative">
              <Bell className="w-6 h-6 text-slate-300" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </div>
            <div className="flex items-center space-x-2 relative">
              <div className="w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-slate-700" />
              </div>
              <span className="text-sm">Admin User</span>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="p-1 hover:bg-slate-600 rounded"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Profile</span>
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                  </button>
                  <hr className="my-2 border-gray-200" />
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                    <Settings className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 lg:p-6">
        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search orders..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <select 
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option>All Status</option>
                <option>Processing</option>
                <option>Shipped</option>
                <option>Pending</option>
                <option>Delivered</option>
                <option>Delayed</option>
              </select>
              <select 
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={logisticsFilter}
                onChange={(e) => setLogisticsFilter(e.target.value)}
              >
                <option>All Logistics</option>
                <option>FedEx</option>
                <option>UPS</option>
                <option>DHL</option>
              </select>
              <input
                type="date"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="xl:col-span-3">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <ShoppingCart className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">142</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">NEW ORDERS</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-4">
                  <Package className="w-6 h-6 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">87</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">TO SHIP</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">64</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">DELIVERED</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">8</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">DELAYED</div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-4 border-b flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-lg font-semibold text-gray-900 mb-2 sm:mb-0">Recent Orders</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>New Order</span>
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Logistics</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {orders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-blue-600 font-medium">{order.id}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{order.amount}</td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadge(order.status)}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getLogisticsBadge(order.logistics)}`}>
                            {order.logistics}
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex space-x-2">
                            <button className="p-1 text-gray-400 hover:text-gray-600">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-gray-600">
                              <Printer className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Plus className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-700">Create New Order</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <Truck className="w-4 h-4 text-gray-600" />
                  </div>
                  <span className="text-sm text-gray-700">Create Shipment</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <FileText className="w-4 h-4 text-gray-600" />
                  </div>
                  <span className="text-sm text-gray-700">Print Invoices</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <RefreshCw className="w-4 h-4 text-gray-600" />
                  </div>
                  <span className="text-sm text-gray-700">Process Returns</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-gray-600" />
                  </div>
                  <span className="text-sm text-gray-700">Sales Reports</span>
                </button>
              </div>
            </div>

            {/* Logistics Providers */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Logistics Providers</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Truck className="w-4 h-4 text-cyan-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">FedEx</div>
                    <div className="text-xs text-gray-500">12 shipments today</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <Package className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">UPS</div>
                    <div className="text-xs text-gray-500">8 shipments today</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Settings className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">DHL</div>
                    <div className="text-xs text-gray-500">5 shipments today</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
          {/* Shipment Management */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-2 mb-4">
              <Truck className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-900">Shipment Management</h3>
            </div>
            
            <div className="space-y-4">
              <div className="border-b pb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">#ORD-7852 - John Smith</span>
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Processing
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-3">2 items • $248.99 • 2.5kg</p>
                
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Logistics Provider</label>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-xs border border-gray-300 rounded-md hover:bg-gray-50">FedEx</button>
                    <button className="px-3 py-1 text-xs border border-gray-300 rounded-md hover:bg-gray-50">UPS</button>
                    <button className="px-3 py-1 text-xs border border-gray-300 rounded-md hover:bg-gray-50">DHL</button>
                    <button className="px-3 py-1 text-xs border border-gray-300 rounded-md hover:bg-gray-50">USPS</button>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Service</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>FedEx Ground</option>
                    <option>FedEx Express</option>
                    <option>FedEx Priority</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center space-x-2">
                    <Truck className="w-4 h-4" />
                    <span>Create Shipment</span>
                  </button>
                  <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 flex items-center justify-center space-x-2">
                    <Printer className="w-4 h-4" />
                    <span>Print Label</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Shipment Tracking */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-2 mb-4">
              <Package className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-900">Shipment Tracking</h3>
            </div>
            
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">#SHIP-48921 - Sarah Johnson</span>
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    In Transit
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-4">UPS • Tracking: 1Z8794W90345678901</p>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs text-gray-500">Progress</span>
                    <span className="text-xs text-gray-500">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
                
                {/* Tracking Steps */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-gray-900">Order Placed</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-gray-900">Processed</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Package className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-gray-900">Shipped</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <Truck className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-gray-500">In Transit</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <Settings className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-gray-500">Delivered</div>
                    </div>
                  </div>
                </div>
                
                {/* Map placeholder */}
                <div className="mt-4 bg-gray-100 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-600">Chicago, IL</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-600">New York, NY</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Package className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-600">790 miles</span>
                  </div>
                </div>
                
                {/* Latest Update */}
                <div className="mt-4 pt-3 border-t">
                  <div className="text-sm font-medium text-gray-900 mb-1">Latest Update</div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Package departed Chicago facility</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Oct 12, 2023 • 14:28 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Stats */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-2 mb-4">
              <BarChart3 className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-900">Shipping Stats</h3>
            </div>
            
            {/* Donut Chart */}
            <div className="relative mb-6">
              <svg className="w-48 h-48 mx-auto" viewBox="0 0 100 100">
                {/* FedEx - 42% */}
                <circle
                  cx="50"
                  cy="50"
                  r="25"
                  fill="transparent"
                  stroke="#3b82f6"
                  strokeWidth="10"
                  strokeDasharray="66 94"
                  strokeDashoffset="0"
                  transform="rotate(-90 50 50)"
                />
                {/* UPS - 28% */}
                <circle
                  cx="50"
                  cy="50"
                  r="25"
                  fill="transparent"
                  stroke="#ef4444"
                  strokeWidth="10"
                  strokeDasharray="44 116"
                  strokeDashoffset="-66"
                  transform="rotate(-90 50 50)"
                />
                {/* DHL - 18% */}
                <circle
                  cx="50"
                  cy="50"
                  r="25"
                  fill="transparent"
                  stroke="#f59e0b"
                  strokeWidth="10"
                  strokeDasharray="28 132"
                  strokeDashoffset="-110"
                  transform="rotate(-90 50 50)"
                />
                {/* USPS - 12% */}
                <circle
                  cx="50"
                  cy="50"
                  r="25"
                  fill="transparent"
                  stroke="#06b6d4"
                  strokeWidth="10"
                  strokeDasharray="19 141"
                  strokeDashoffset="-138"
                  transform="rotate(-90 50 50)"
                />
              </svg>
            </div>
            
            {/* Legend */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">FedEx</span>
                </div>
                <span className="text-sm font-medium text-gray-900">42%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">UPS</span>
                </div>
                <span className="text-sm font-medium text-gray-900">28%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">DHL</span>
                </div>
                <span className="text-sm font-medium text-gray-900">18%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">USPS</span>
                </div>
                <span className="text-sm font-medium text-gray-900">12%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;