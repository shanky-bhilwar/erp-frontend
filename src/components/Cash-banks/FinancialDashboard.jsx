import React from 'react';

const FinancialDashboard = () => {
  return (
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cash Module */}
        <div className="bg-white rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
          <div className="bg-[#4361ee] text-white p-5 flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-xl">
              <i className="fas fa-wallet"></i>
            </div>
            <div>
              <div className="text-xl font-semibold">Cash Management</div>
              <div>Current cash positions</div>
            </div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-[#1d3557] my-2">$24,560.75</div>
            <div className="flex items-center gap-2 text-[#28a745] font-semibold text-sm">
              <i className="fas fa-arrow-up"></i>
              <span>+$1,240.50 (5.3%) this month</span>
            </div>

            <div className="mt-4">
              <h3 className="text-xs text-[#8d99ae] uppercase tracking-wider mb-3">
                Recent Cash Transactions
              </h3>
              <div className="flex justify-between py-2 border-b border-[#e9ecef]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#4cc9f0] text-white flex items-center justify-center text-xs">
                    <i className="fas fa-arrow-down"></i>
                  </div>
                  <div>
                    <div className="text-sm">Client Payment</div>
                    <div className="text-xs text-muted">Today, 10:30 AM</div>
                  </div>
                </div>
                <div className="font-semibold text-[#28a745] text-sm">+$2,500.00</div>
              </div>
              <div className="flex justify-between py-2 border-b border-[#e9ecef]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#f72585] text-white flex items-center justify-center text-xs">
                    <i className="fas fa-arrow-up"></i>
                  </div>
                  <div>
                    <div className="text-sm">Office Supplies</div>
                    <div className="text-xs text-muted">Yesterday, 3:45 PM</div>
                  </div>
                </div>
                <div className="font-semibold text-[#dc3545] text-sm">-$450.30</div>
              </div>
              <div className="flex justify-between py-2 border-b border-[#e9ecef]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#4cc9f0] text-white flex items-center justify-center text-xs">
                    <i className="fas fa-arrow-down"></i>
                  </div>
                  <div>
                    <div className="text-sm">Consulting Fee</div>
                    <div className="text-xs text-muted">May 28, 2024</div>
                  </div>
                </div>
                <div className="font-semibold text-[#28a745] text-sm">+$1,200.00</div>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="flex-1 py-2 px-4 rounded-lg bg-[#4361ee] text-white font-semibold border-none flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 text-sm">
                <i className="fas fa-plus"></i> Add Cash
              </button>
              <button className="flex-1 py-2 px-4 rounded-lg bg-transparent border border-[#4361ee] text-[#4361ee] font-semibold flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 text-sm">
                <i className="fas fa-exchange-alt"></i> Transfer
              </button>
            </div>
          </div>
        </div>

        {/* Banks Module */}
        <div className="bg-white rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
          <div className="bg-[#3a0ca3] text-white p-5 flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-xl">
              <i className="fas fa-university"></i>
            </div>
            <div>
              <div className="text-xl font-semibold">Bank Accounts</div>
              <div>All bank balances</div>
            </div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-[#1d3557] my-2">$187,320.40</div>
            <div className="flex items-center gap-2 text-[#dc3545] font-semibold text-sm">
              <i className="fas fa-arrow-down"></i>
              <span>-$3,450.20 (1.8%) this month</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-[#f8f9fa] p-3 rounded-xl text-center">
                <div className="text-xl font-bold text-[#1d3557]">$84,200.00</div>
                <div className="text-xs text-[#8d99ae] mt-1">Business Checking</div>
              </div>
              <div className="bg-[#f8f9fa] p-3 rounded-xl text-center">
                <div className="text-xl font-bold text-[#1d3557]">$63,120.40</div>
                <div className="text-xs text-[#8d99ae] mt-1">Savings Account</div>
              </div>
              <div className="bg-[#f8f9fa] p-3 rounded-xl text-center">
                <div className="text-xl font-bold text-[#1d3557]">$32,000.00</div>
                <div className="text-xs text-[#8d99ae] mt-1">Money Market</div>
              </div>
              <div className="bg-[#f8f9fa] p-3 rounded-xl text-center">
                <div className="text-xl font-bold text-[#1d3557]">$8,000.00</div>
                <div className="text-xs text-[#8d99ae] mt-1">Payroll Account</div>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-xs text-[#8d99ae] uppercase tracking-wider mb-3">
                Recent Bank Transactions
              </h3>
              <div className="flex justify-between py-2 border-b border-[#e9ecef]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#f72585] text-white flex items-center justify-center text-xs">
                    <i className="fas fa-arrow-up"></i>
                  </div>
                  <div>
                    <div className="text-sm">Vendor Payment</div>
                    <div className="text-xs text-muted">Today, 9:15 AM</div>
                  </div>
                </div>
                <div className="font-semibold text-[#dc3545] text-sm">-$5,200.00</div>
              </div>
              <div className="flex justify-between py-2 border-b border-[#e9ecef]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#4cc9f0] text-white flex items-center justify-center text-xs">
                    <i className="fas fa-arrow-down"></i>
                  </div>
                  <div>
                    <div className="text-sm">Wire Transfer</div>
                    <div className="text-xs text-muted">May 30, 2024</div>
                  </div>
                </div>
                <div className="font-semibold text-[#28a745] text-sm">+$12,000.00</div>
              </div>
              <div className="flex justify-between py-2 border-b border-[#e9ecef]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#f72585] text-white flex items-center justify-center text-xs">
                    <i className="fas fa-arrow-up"></i>
                  </div>
                  <div>
                    <div className="text-sm">Monthly Loan</div>
                    <div className="text-xs text-muted">May 28, 2024</div>
                  </div>
                </div>
                <div className="font-semibold text-[#dc3545] text-sm">-$3,250.00</div>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="flex-1 py-2 px-4 rounded-lg bg-[#3a0ca3] text-white font-semibold border-none flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 text-sm">
                <i className="fas fa-plus"></i> Add Account
              </button>
              <button className="flex-1 py-2 px-4 rounded-lg bg-transparent border border-[#3a0ca3] text-[#3a0ca3] font-semibold flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 text-sm">
                <i className="fas fa-sync-alt"></i> Reconcile
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default FinancialDashboard;