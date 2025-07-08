import React, { useEffect, useRef, useState } from 'react';
import * as Chart from 'chart.js';

const OpportunityDashboard = () => {
  const distributionChartRef = useRef(null);
  const trendChartRef = useRef(null);
  const matrixChartRef = useRef(null);
  const [activeTab, setActiveTab] = useState('category');

  // Chart instances
  const distributionChartInstance = useRef(null);
  const trendChartInstance = useRef(null);
  const matrixChartInstance = useRef(null);

  // Register Chart.js components
  useEffect(() => {
    Chart.Chart.register(...Chart.registerables);
  }, []);

  // Initialize charts
  useEffect(() => {
    // Distribution Chart - Bar Chart
    if (distributionChartRef.current) {
      const ctx = distributionChartRef.current.getContext('2d');
      
      if (distributionChartInstance.current) {
        distributionChartInstance.current.destroy();
      }

      distributionChartInstance.current = new Chart.Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Market Expansion', 'Product Innovation', 'Strategic Partnerships', 'Operational Efficiency', 'Customer Acquisition'],
          datasets: [{
            data: [12, 9, 7, 6, 8],
            backgroundColor: ['#4361ee', '#4cc9f0', '#4cc9f0', '#ffc107', '#f72585'],
            borderRadius: 4,
            borderSkipped: false,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 14,
              grid: {
                color: 'rgba(0,0,0,0.05)'
              },
              ticks: {
                stepSize: 2
              }
            },
            x: {
              grid: {
                display: false
              },
              ticks: {
                maxRotation: 0,
                minRotation: 0
              }
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    }

    // Trend Chart - Area Chart with two lines
    if (trendChartRef.current) {
      const ctx = trendChartRef.current.getContext('2d');
      
      if (trendChartInstance.current) {
        trendChartInstance.current.destroy();
      }

      trendChartInstance.current = new Chart.Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [{
            label: 'Opportunities Identified',
            data: [8, 12, 10, 15, 17, 21, 25],
            borderColor: '#4361ee',
            backgroundColor: 'rgba(67, 97, 238, 0.1)',
            tension: 0.4,
            fill: true,
            pointRadius: 4,
            pointHoverRadius: 6
          }, {
            label: 'Opportunities Implemented',
            data: [2, 4, 7, 8, 10, 12, 15],
            borderColor: '#4cc9f0',
            backgroundColor: 'rgba(76, 201, 240, 0.1)',
            tension: 0.4,
            fill: true,
            pointRadius: 4,
            pointHoverRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 25,
              grid: {
                color: 'rgba(0,0,0,0.05)'
              },
              ticks: {
                stepSize: 5
              }
            },
            x: {
              grid: {
                color: 'rgba(0,0,0,0.05)'
              }
            }
          },
          plugins: {
            legend: {
              display: true,
              position: 'top',
              align: 'start',
              labels: {
                usePointStyle: true,
                padding: 20,
                font: {
                  size: 12
                }
              }
            }
          }
        }
      });
    }

    // Matrix Chart - Scatter plot with different colors
    if (matrixChartRef.current) {
      const ctx = matrixChartRef.current.getContext('2d');
      
      if (matrixChartInstance.current) {
        matrixChartInstance.current.destroy();
      }

      matrixChartInstance.current = new Chart.Chart(ctx, {
        type: 'scatter',
        data: {
          datasets: [{
            label: 'High Impact',
            data: [
              {x: 85, y: 85},
              {x: 80, y: 75},
              {x: 90, y: 80}
            ],
            backgroundColor: '#f72585',
            pointRadius: 8,
            pointHoverRadius: 10
          }, {
            label: 'Medium Impact',
            data: [
              {x: 65, y: 70},
              {x: 60, y: 65},
              {x: 70, y: 60}
            ],
            backgroundColor: '#ffc107',
            pointRadius: 8,
            pointHoverRadius: 10
          }, {
            label: 'Low Impact',
            data: [
              {x: 45, y: 50},
              {x: 40, y: 45},
              {x: 50, y: 40}
            ],
            backgroundColor: '#4cc9f0',
            pointRadius: 8,
            pointHoverRadius: 10
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Probability (%)',
                font: {
                  size: 12
                }
              },
              min: 30,
              max: 100,
              grid: {
                color: 'rgba(0,0,0,0.05)'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Business Impact (%)',
                font: {
                  size: 12
                }
              },
              min: 30,
              max: 100,
              grid: {
                color: 'rgba(0,0,0,0.05)'
              }
            }
          },
          plugins: {
            legend: {
              display: true,
              position: 'top',
              align: 'end',
              labels: {
                usePointStyle: true,
                padding: 15,
                font: {
                  size: 11
                }
              }
            }
          }
        }
      });
    }

    // Cleanup function
    return () => {
      if (distributionChartInstance.current) {
        distributionChartInstance.current.destroy();
      }
      if (trendChartInstance.current) {
        trendChartInstance.current.destroy();
      }
      if (matrixChartInstance.current) {
        matrixChartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-800">
      <div className="flex mt-4 gap-6 px-4">
        {/* Left Column - 8/12 width */}
        <div className="w-2/3">
          {/* Opportunity Distribution Chart */}
          <div className="bg-white rounded-xl shadow-lg border-0 mb-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="bg-gray-50 bg-opacity-90 border-b border-gray-100 p-4 flex justify-between items-center">
              <span className="font-semibold text-lg">Opportunity Distribution</span>
              <div className="flex rounded overflow-hidden">
                <button 
                  className={`px-3 py-1 text-sm border ${activeTab === 'category' ? 'bg-gray-200 border-gray-300' : 'bg-white border-gray-300'} hover:bg-gray-100`}
                  onClick={() => setActiveTab('category')}
                >
                  By Category
                </button>
                <button 
                  className={`px-3 py-1 text-sm border-l-0 border ${activeTab === 'priority' ? 'bg-gray-200 border-gray-300' : 'bg-white border-gray-300'} hover:bg-gray-100`}
                  onClick={() => setActiveTab('priority')}
                >
                  By Priority
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="h-64 relative">
                <canvas ref={distributionChartRef}></canvas>
              </div>
            </div>
          </div>
          
          {/* Trend Analysis */}
          <div className="bg-white rounded-xl shadow-lg border-0 mb-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl mt-4">
            <div className="bg-gray-50 bg-opacity-90 border-b border-gray-100 p-4">
              <span className="font-semibold text-lg">Trend Analysis</span>
            </div>
            <div className="p-6">
              <div className="h-64 relative">
                <canvas ref={trendChartRef}></canvas>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column - 4/12 width */}
        <div className="w-1/3">
          {/* Opportunity Matrix */}
          <div className="bg-white rounded-xl shadow-lg border-0 mb-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="bg-gray-50 bg-opacity-90 border-b border-gray-100 p-4">
              <span className="font-semibold text-lg">Opportunity Impact Matrix</span>
            </div>
            <div className="p-6">
              <div className="h-64 relative">
                <canvas ref={matrixChartRef}></canvas>
              </div>
            </div>
          </div>
          
          {/* Top Segments */}
          <div className="bg-white rounded-xl shadow-lg border-0 mb-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl mt-4">
            <div className="bg-gray-50 bg-opacity-90 border-b border-gray-100 p-4">
              <span className="font-semibold text-lg">Top Opportunity Segments</span>
            </div>
            <div className="p-6">
              <div className="mb-3">
                <div className="flex justify-between mb-1">
                  <span>Market Expansion</span>
                  <span>32%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-md h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-md" style={{width: '32%'}}></div>
                </div>
              </div>
              <div className="mb-3">
                <div className="flex justify-between mb-1">
                  <span>Product Innovation</span>
                  <span>24%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-md h-2.5">
                  <div className="bg-blue-400 h-2.5 rounded-md" style={{width: '24%'}}></div>
                </div>
              </div>
              <div className="mb-3">
                <div className="flex justify-between mb-1">
                  <span>Strategic Partnerships</span>
                  <span>18%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-md h-2.5">
                  <div className="bg-cyan-400 h-2.5 rounded-md" style={{width: '18%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Operational Efficiency</span>
                  <span>15%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-md h-2.5">
                  <div className="bg-pink-500 h-2.5 rounded-md" style={{width: '15%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityDashboard;