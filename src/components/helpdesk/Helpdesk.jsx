import React, {useState} from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Search, Plus, Bell, Settings, User, Clock, CheckCircle, AlertCircle, FileText } from 'lucide-react';
import NewTicketModal from './NewTicketModal';
import AddArticleModal from './AddArticleModal';
import AssignTicketModal from './AssignTicketModal';
import ReportsModal from './ReportsModal';

const HelpDesk = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [isReportsModalOpen, setIsReportsModalOpen] = useState(false);
  const chartData = [
    { name: 'Mon', responseTime: 4.5, resolutionTime: 9.2 },
    { name: 'Tue', responseTime: 4.2, resolutionTime: 8.8 },
    { name: 'Wed', responseTime: 3.8, resolutionTime: 8.5 },
    { name: 'Thu', responseTime: 3.6, resolutionTime: 8.2 },
    { name: 'Fri', responseTime: 3.4, resolutionTime: 7.9 },
    { name: 'Sat', responseTime: 3.2, resolutionTime: 7.6 },
  ];

  const tickets = [
    { id: '#1256', subject: 'Payment gateway not working', customer: 'Global Tech', priority: 'High', status: 'Open', color: 'border-l-red-500' },
    { id: '#1255', subject: 'Report generation issue', customer: 'Finance Dept', priority: 'Medium', status: 'In Progress', color: 'border-l-yellow-500' },
    { id: '#1254', subject: 'User account creation', customer: 'HR Department', priority: 'Low', status: 'Resolved', color: 'border-l-green-500' },
    { id: '#1253', subject: 'Inventory sync problem', customer: 'Warehouse', priority: 'Medium', status: 'Closed', color: 'border-l-yellow-500' },
    { id: '#1252', subject: 'System downtime', customer: 'Operations', priority: 'High', status: 'Open', color: 'border-l-red-500' },
  ];

  const recentActivities = [
    { id: 1, name: 'MJ Mark Johnson', action: 'resolved ticket #1245', time: '2 minutes ago' },
    { id: 2, name: 'SL Sarah Lee', action: 'added new KB article', time: '1 hour ago' },
    { id: 3, name: 'RK Robert Kim', action: 'assigned ticket #1248', time: '3 hours ago' },
    { id: 4, name: 'TD Tina Davis', action: 'updated settings', time: '5 hours ago' },
  ];

  const quickActions = [
    { 
      id: 1, 
      name: 'New Ticket', 
      icon: <Plus className="h-5 w-5" />,
      action: () => setIsModalOpen(true)
    },
    { 
      id: 2, 
      name: 'Add Article', 
      icon: <FileText className="h-5 w-5" />,
      action: () => setIsArticleModalOpen(true)
    },
    { 
      id: 3, 
      name: 'Assign Ticket', 
      icon: <User className="h-5 w-5" />,
      action: () => setIsAssignModalOpen(true)
    },
    { 
      id: 4, 
      name: 'View Reports', 
      icon: <FileText className="h-5 w-5" />,
      action: () => setIsReportsModalOpen(true)
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open': return 'bg-blue-100 text-blue-800';
      case 'In Progress': return 'bg-cyan-100 text-cyan-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
      case 'Closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 pb-40">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20 h-16">
        <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Settings className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-semibold text-gray-900">ERP Helpdesk</h1>
            </div>
            <div className="flex flex-wrap items-center gap-4 justify-end">
              <div className="relative">
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-48 sm:w-64 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button onClick={() => setIsModalOpen(true)}
               className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                <Plus className="h-4 w-4 mr-2" />
                New Ticket
              </button>
              <div className="relative">
                <Bell className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">JD</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">John Doe</p>
                  <p className="text-xs text-gray-500">Administrator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className='flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-8' style={{ height: 'calc(100vh - 4rem)' }}>
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> */}
        {/* Dashboard Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Helpdesk Dashboard</h2>
          <p className="text-gray-600">Welcome back, Administrator. Here's your daily overview</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Tickets</p>
                <p className="text-3xl font-bold text-gray-900">142</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Pending Tickets</p>
                <p className="text-3xl font-bold text-gray-900">24</p>
              </div>
              <div className="bg-cyan-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-cyan-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Resolved Today</p>
                <p className="text-3xl font-bold text-gray-900">98</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Urgent Tickets</p>
                <p className="text-3xl font-bold text-gray-900">8</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <AlertCircle className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Recent Tickets */}
          <div className="lg:col-span-2 flex flex-col ">
            <div className="bg-white rounded-xl shadow-sm flex-1 flex flex-col">
                <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">Recent Tickets</h3>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View All</button>
                </div>
                </div>
                <div className="overflow-x-auto flex-1">
                <table className="w-full">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {tickets.map((ticket, index) => (
                        <tr key={index} className={`hover:bg-gray-50 border-l-4 ${ticket.color}`}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-medium">{ticket.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ticket.subject}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{ticket.customer}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(ticket.priority)}`}>
                            {ticket.priority}
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(ticket.status)}`}>
                            {ticket.status}
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View</button>
                        </td>
                        </tr>
                    ))}
                    {/* Add empty row to fill remaining space if needed */}
                    {tickets.length < 5 && (
                        <tr className="flex-1">
                        <td colSpan="6" className="h-full"></td>
                        </tr>
                    )}
                    </tbody>
                </table>
                </div>
            </div>
            </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Ticket Status */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ticket Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600">Open</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">42%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '42%' }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600">In Progress</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">28%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '28%' }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600">Resolved</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">25%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600">Closed</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">5%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gray-500 h-2 rounded-full" style={{ width: '5%' }}></div>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">4.2h</p>
                  <p className="text-xs text-gray-600">Avg. Response</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">8.7h</p>
                  <p className="text-xs text-gray-600">Avg. Resolution</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-600">94%</p>
                  <p className="text-xs text-gray-600">Satisfaction</p>
                </div>
              </div>

              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <XAxis 
                      dataKey="name" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6B7280' }}
                    />
                    <YAxis hide />
                    <Line 
                      type="monotone" 
                      dataKey="responseTime" 
                      stroke="#3B82F6" 
                      strokeWidth={2}
                      dot={{ r: 4, fill: '#3B82F6' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="resolutionTime" 
                      stroke="#EC4899" 
                      strokeWidth={2}
                      dot={{ r: 4, fill: '#EC4899' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="flex justify-center space-x-4 mt-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-600">Response Time (hrs)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-600">Resolution Time (hrs)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-medium">
                      {activity.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.name} {activity.action}
                    </p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action) => (
                <button
                  key={action.id}
                  onClick={action.action}
                  className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="bg-blue-100 p-3 rounded-full mb-2">
                    {action.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-900">{action.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <NewTicketModal
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      <AddArticleModal
        isOpen={isArticleModalOpen}
        onClose={() => setIsArticleModalOpen(false)}
      />
      <AssignTicketModal
        isOpen={isAssignModalOpen}
        onClose={() => setIsAssignModalOpen(false)}
      />
      <ReportsModal
        isOpen={isReportsModalOpen}
        onClose={() => setIsReportsModalOpen(false)}
      />
      {/* </div> */}
    </div>
  );
};

export default HelpDesk;