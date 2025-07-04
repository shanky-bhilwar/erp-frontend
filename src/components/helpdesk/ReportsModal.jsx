import React from 'react';
import { X, Download } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ReportsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Sample data for charts
  const ticketData = [
    { name: 'Mon', created: 24, resolved: 19 },
    { name: 'Tue', created: 18, resolved: 15 },
    { name: 'Wed', created: 22, resolved: 18 },
    { name: 'Thu', created: 19, resolved: 22 },
    { name: 'Fri', created: 26, resolved: 19 },
    { name: 'Sat', created: 15, resolved: 14 },
  ];

  const agentPerformance = [
    { name: 'Robert Kim', satisfaction: 94 },
    { name: 'Sarah Lee', satisfaction: 89 },
    { name: 'John Doe', satisfaction: 87 },
    { name: 'Tina Davis', satisfaction: 85 },
  ];

  const statsData = [
    { name: 'Avg. Response Time', value: '4.2h' },
    { name: 'Avg. Resolution Time', value: '8.7h' },
    { name: 'First Contact Resolution', value: '68%' },
    { name: 'Satisfaction Rate', value: '94%' },
  ];

  return (
    <div className="fixed inset-0 bgOp flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl my-8">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-semibold">Helpdesk Reports</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        
        {/* Modal Body */}
        <div className="p-6 space-y-8">
          {/* Date Range and Report Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Date Range</h3>
              <select className="w-full p-2 border border-gray-300 rounded-md bg-white">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>This month</option>
                <option>Custom range</option>
              </select>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Report Type</h3>
              <select className="w-full p-2 border border-gray-300 rounded-md bg-white">
                <option>Performance Summary</option>
                <option>Ticket Analysis</option>
                <option>Agent Performance</option>
              </select>
            </div>
          </div>

          {/* Tickets Created/Resolved Chart */}
          <div>
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-6">
                <div className="w-4 h-4 bg-blue-500 mr-2"></div>
                <span className="text-sm">Tickets Created</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-cyan-400 mr-2"></div>
                <span className="text-sm">Tickets Resolved</span>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ticketData} barCategoryGap="30%">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6b7280' }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6b7280' }}
                    domain={[0, 30]}
                    ticks={[0, 5, 10, 15, 20, 25, 30]}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '6px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }} 
                  />
                  <Bar dataKey="created" fill="#3B82F6" name="Created" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="resolved" fill="#22D3EE" name="Resolved" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Agent Performance and Ticket Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Agent Performance */}
            <div>
              <h3 className="text-lg font-medium mb-4">Agent Performance</h3>
              <div className="space-y-3">
                {agentPerformance.map((agent, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <span className="text-sm font-medium">{agent.name}</span>
                    <span className="text-sm font-semibold">{agent.satisfaction}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ticket Statistics */}
            <div>
              <h3 className="text-lg font-medium mb-4">Ticket Statistics</h3>
              <div className="space-y-3">
                {statsData.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <span className="text-sm font-medium">{stat.name}</span>
                    <span className="text-sm font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end space-x-4 p-6 border-t">
          <button 
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Close
          </button>
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
          >
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>
    </div>
  );
};
export default ReportsModal;

// Demo wrapper to show the modal
// const App = () => {
//   const [isModalOpen, setIsModalOpen] = React.useState(true);

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <button 
//         onClick={() => setIsModalOpen(true)}
//         className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//       >
//         Open Reports Modal
//       </button>
      
//       <ReportsModal 
//         isOpen={isModalOpen} 
//         onClose={() => setIsModalOpen(false)} 
//       />
//     </div>
//   );
// };

// export default App;