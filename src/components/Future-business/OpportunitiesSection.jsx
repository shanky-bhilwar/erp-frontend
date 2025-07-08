import React, { useState, useRef } from 'react';
import { X, FileText, Share2, Play, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const OpportunitiesSection = () => {
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sliderRef = useRef(null);

  const opportunities = [
    {
      id: 1,
      title: "AI-Powered Customer Service",
      priority: "High Priority",
      priorityColor: "bg-red-500",
      headerColor: "bg-blue-600",
      description: "Implement AI chatbots to enhance customer support efficiency and reduce response times by 40%.",
      estimatedValue: "$850K",
      roiTime: "6 months",
      probability: "82%",
      tags: ["Technology", "Customer Experience", "AI"],
      fullDescription: "Implement AI chatbots to enhance customer support efficiency and reduce response times by 40%. This solution will leverage natural language processing to handle common inquiries, freeing human agents for complex issues.",
      metrics: {
        customerSatisfaction: "+22%",
        ticketsResolved: "+40%",
        agentProductivity: "+35%",
        supportCosts: "-28%"
      },
      risks: {
        implementation: { level: "Medium", width: "60%", color: "bg-yellow-500" },
        marketAcceptance: { level: "Low", width: "25%", color: "bg-green-500" },
        competitiveResponse: { level: "High", width: "80%", color: "bg-red-500" }
      },
      timeline: [
        { phase: "Phase 1: Research & Planning", description: "Identify requirements, select platform, and develop implementation strategy", duration: "Month 1" },
        { phase: "Phase 2: Development & Integration", description: "Build and integrate AI solution with existing systems", duration: "Months 2-3" },
        { phase: "Phase 3: Testing & Deployment", description: "Pilot testing, refinement, and full deployment", duration: "Month 4" },
        { phase: "Phase 4: Optimization & Scaling", description: "Monitor performance, optimize, and scale solution", duration: "Months 5-6" }
      ],
      team: [
        { name: "John Doe", role: "Project Lead", initials: "JD", color: "bg-blue-600" },
        { name: "Sarah Lee", role: "Data Scientist", initials: "SL", color: "bg-cyan-500" },
        { name: "Robert Kim", role: "Tech Lead", initials: "RK", color: "bg-green-500" },
        { name: "Tina Davis", role: "Customer Success", initials: "TD", color: "bg-yellow-500" }
      ],
      actions: [
        "Form cross-functional implementation team",
        "Secure $150K budget for initial development",
        "Pilot program with 3 key customer segments",
        "Develop metrics dashboard for tracking",
        "Create training program for support agents"
      ]
    },
    {
      id: 2,
      title: "Asian Market Expansion",
      priority: "Medium Priority",
      priorityColor: "bg-yellow-500",
      headerColor: "bg-cyan-500",
      description: "Expand operations to Southeast Asia to capture emerging market growth opportunities.",
      estimatedValue: "$1.2M",
      roiTime: "18 months",
      probability: "65%",
      tags: ["Market Expansion", "International", "Growth"],
      fullDescription: "Expand operations to Southeast Asia to capture emerging market growth opportunities. This strategic expansion will establish our presence in high-growth markets including Singapore, Thailand, and Vietnam.",
      metrics: {
        marketPenetration: "+35%",
        revenueGrowth: "+65%",
        customerBase: "+180%",
        operationalCosts: "+45%"
      },
      risks: {
        implementation: { level: "High", width: "75%", color: "bg-red-500" },
        marketAcceptance: { level: "Medium", width: "50%", color: "bg-yellow-500" },
        competitiveResponse: { level: "Medium", width: "55%", color: "bg-yellow-500" }
      },
      timeline: [
        { phase: "Phase 1: Market Research", description: "Comprehensive market analysis and regulatory compliance study", duration: "Months 1-3" },
        { phase: "Phase 2: Partnership Development", description: "Establish local partnerships and distribution channels", duration: "Months 4-8" },
        { phase: "Phase 3: Pilot Launch", description: "Launch in Singapore with limited product range", duration: "Months 9-12" },
        { phase: "Phase 4: Full Expansion", description: "Scale to Thailand and Vietnam markets", duration: "Months 13-18" }
      ],
      team: [
        { name: "Maria Chen", role: "Regional Director", initials: "MC", color: "bg-purple-600" },
        { name: "David Wong", role: "Market Analyst", initials: "DW", color: "bg-indigo-500" },
        { name: "Lisa Park", role: "Operations Lead", initials: "LP", color: "bg-pink-500" },
        { name: "Alex Kumar", role: "Partnership Manager", initials: "AK", color: "bg-orange-500" }
      ],
      actions: [
        "Conduct comprehensive market research",
        "Secure $2M expansion budget",
        "Establish legal entity in Singapore",
        "Recruit local management team",
        "Develop localized marketing strategy"
      ]
    },
    {
      id: 3,
      title: "Supply Chain Optimization",
      priority: "High Priority",
      priorityColor: "bg-red-500",
      headerColor: "bg-green-500",
      description: "Implement blockchain for supply chain transparency and reduce operational costs by 15%.",
      estimatedValue: "$560K",
      roiTime: "8 months",
      probability: "78%",
      tags: ["Operations", "Blockchain", "Efficiency"],
      fullDescription: "Implement blockchain for supply chain transparency and reduce operational costs by 15%. This initiative will create an immutable record of all supply chain transactions, improving traceability and reducing fraud.",
      metrics: {
        costReduction: "-15%",
        transparencyImprovement: "+90%",
        deliveryTime: "-20%",
        qualityScore: "+25%"
      },
      risks: {
        implementation: { level: "Medium", width: "60%", color: "bg-yellow-500" },
        marketAcceptance: { level: "Low", width: "30%", color: "bg-green-500" },
        competitiveResponse: { level: "Low", width: "35%", color: "bg-green-500" }
      },
      timeline: [
        { phase: "Phase 1: Technology Selection", description: "Evaluate blockchain platforms and select optimal solution", duration: "Months 1-2" },
        { phase: "Phase 2: Pilot Implementation", description: "Deploy blockchain solution for key suppliers", duration: "Months 3-5" },
        { phase: "Phase 3: Full Rollout", description: "Extend to all supply chain partners", duration: "Months 6-7" },
        { phase: "Phase 4: Optimization", description: "Fine-tune processes and maximize efficiency gains", duration: "Month 8" }
      ],
      team: [
        { name: "James Liu", role: "Blockchain Lead", initials: "JL", color: "bg-emerald-600" },
        { name: "Emma Rodriguez", role: "Supply Chain Manager", initials: "ER", color: "bg-teal-500" },
        { name: "Michael Johnson", role: "Systems Integrator", initials: "MJ", color: "bg-lime-500" },
        { name: "Sophie Zhang", role: "Data Analyst", initials: "SZ", color: "bg-green-600" }
      ],
      actions: [
        "Select blockchain technology platform",
        "Engage key suppliers in pilot program",
        "Develop smart contracts for transactions",
        "Create training program for staff",
        "Establish KPI measurement framework"
      ]
    },
    {
      id: 4,
      title: "Sustainability Product Line",
      priority: "Medium Priority",
      priorityColor: "bg-yellow-500",
      headerColor: "bg-yellow-500",
      description: "Develop eco-friendly product line to meet growing consumer demand for sustainable options.",
      estimatedValue: "$720K",
      roiTime: "12 months",
      probability: "58%",
      tags: ["Product", "Sustainability", "Innovation"],
      fullDescription: "Develop eco-friendly product line to meet growing consumer demand for sustainable options. This new product line will feature biodegradable materials and carbon-neutral production processes.",
      metrics: {
        marketShare: "+12%",
        brandPerception: "+40%",
        sustainabilityScore: "+85%",
        productionCosts: "+18%"
      },
      risks: {
        implementation: { level: "Medium", width: "65%", color: "bg-yellow-500" },
        marketAcceptance: { level: "Medium", width: "45%", color: "bg-yellow-500" },
        competitiveResponse: { level: "High", width: "70%", color: "bg-red-500" }
      },
      timeline: [
        { phase: "Phase 1: R&D and Design", description: "Develop sustainable materials and product designs", duration: "Months 1-4" },
        { phase: "Phase 2: Testing and Certification", description: "Obtain sustainability certifications and quality testing", duration: "Months 5-7" },
        { phase: "Phase 3: Production Setup", description: "Establish sustainable manufacturing processes", duration: "Months 8-10" },
        { phase: "Phase 4: Market Launch", description: "Launch products with comprehensive marketing campaign", duration: "Months 11-12" }
      ],
      team: [
        { name: "Rachel Green", role: "Product Manager", initials: "RG", color: "bg-amber-600" },
        { name: "Tom Wilson", role: "Sustainability Expert", initials: "TW", color: "bg-yellow-600" },
        { name: "Nina Patel", role: "R&D Lead", initials: "NP", color: "bg-orange-600" },
        { name: "Carlos Santos", role: "Manufacturing Lead", initials: "CS", color: "bg-yellow-700" }
      ],
      actions: [
        "Conduct consumer demand research",
        "Partner with sustainable material suppliers",
        "Obtain environmental certifications",
        "Develop eco-friendly packaging",
        "Create sustainability marketing campaign"
      ]
    },
    {
      id: 5,
      title: "Healthcare Analytics Platform",
      priority: "High Priority",
      priorityColor: "bg-red-500",
      headerColor: "bg-red-500",
      description: "Develop predictive analytics platform for healthcare providers to improve patient outcomes.",
      estimatedValue: "$1.5M",
      roiTime: "14 months",
      probability: "72%",
      tags: ["Healthcare", "Analytics", "SaaS"],
      fullDescription: "Develop predictive analytics platform for healthcare providers to improve patient outcomes. This AI-powered platform will analyze patient data to predict health risks and recommend preventive measures.",
      metrics: {
        patientOutcomes: "+45%",
        costSavings: "+30%",
        diagnosticAccuracy: "+60%",
        physicianEfficiency: "+35%"
      },
      risks: {
        implementation: { level: "High", width: "70%", color: "bg-red-500" },
        marketAcceptance: { level: "Medium", width: "50%", color: "bg-yellow-500" },
        competitiveResponse: { level: "High", width: "75%", color: "bg-red-500" }
      },
      timeline: [
        { phase: "Phase 1: Platform Development", description: "Build core analytics engine and ML models", duration: "Months 1-6" },
        { phase: "Phase 2: Clinical Testing", description: "Pilot with select healthcare providers", duration: "Months 7-10" },
        { phase: "Phase 3: Regulatory Approval", description: "Obtain necessary healthcare certifications", duration: "Months 11-12" },
        { phase: "Phase 4: Commercial Launch", description: "Full market launch and customer acquisition", duration: "Months 13-14" }
      ],
      team: [
        { name: "Dr. Sarah Kim", role: "Clinical Director", initials: "SK", color: "bg-red-600" },
        { name: "Ahmed Hassan", role: "AI Engineer", initials: "AH", color: "bg-rose-600" },
        { name: "Jennifer Liu", role: "Data Scientist", initials: "JL", color: "bg-pink-600" },
        { name: "Mark Thompson", role: "Product Manager", initials: "MT", color: "bg-red-700" }
      ],
      actions: [
        "Secure healthcare partnerships",
        "Obtain HIPAA compliance certification",
        "Develop clinical validation studies",
        "Create physician training programs",
        "Establish data security protocols"
      ]
    },
    {
      id: 6,
      title: "Subscription Model Transition",
      priority: "Low Priority",
      priorityColor: "bg-green-500",
      headerColor: "bg-gray-500",
      description: "Shift from one-time purchases to subscription model for increased recurring revenue.",
      estimatedValue: "$420K",
      roiTime: "10 months",
      probability: "45%",
      tags: ["Revenue Model", "Customer Retention"],
      fullDescription: "Shift from one-time purchases to subscription model for increased recurring revenue. This transition will provide more predictable revenue streams and improved customer lifetime value.",
      metrics: {
        recurringRevenue: "+120%",
        customerRetention: "+55%",
        lifetimeValue: "+80%",
        acquisitionCost: "+25%"
      },
      risks: {
        implementation: { level: "Low", width: "35%", color: "bg-green-500" },
        marketAcceptance: { level: "High", width: "85%", color: "bg-red-500" },
        competitiveResponse: { level: "Medium", width: "50%", color: "bg-yellow-500" }
      },
      timeline: [
        { phase: "Phase 1: Model Design", description: "Design subscription tiers and pricing strategy", duration: "Months 1-2" },
        { phase: "Phase 2: Platform Development", description: "Build subscription management system", duration: "Months 3-5" },
        { phase: "Phase 3: Customer Migration", description: "Migrate existing customers to new model", duration: "Months 6-8" },
        { phase: "Phase 4: Optimization", description: "Optimize pricing and features based on data", duration: "Months 9-10" }
      ],
      team: [
        { name: "Patricia Wong", role: "Revenue Operations", initials: "PW", color: "bg-gray-600" },
        { name: "Kevin Brown", role: "Customer Success", initials: "KB", color: "bg-slate-600" },
        { name: "Lisa Chen", role: "Product Manager", initials: "LC", color: "bg-zinc-600" },
        { name: "Ryan Martinez", role: "Data Analyst", initials: "RM", color: "bg-stone-600" }
      ],
      actions: [
        "Analyze customer usage patterns",
        "Design tiered subscription model",
        "Develop customer retention strategy",
        "Create subscription management system",
        "Plan customer communication strategy"
      ]
    }
  ];

  const openModal = (opportunity) => {
    setSelectedOpportunity(opportunity);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOpportunity(null);
  };

  const getPriorityBadgeStyle = (priorityColor) => {
    const colorMap = {
      'bg-red-500': 'bg-red-100 text-red-600',
      'bg-yellow-500': 'bg-yellow-100 text-yellow-600',
      'bg-green-500': 'bg-green-100 text-green-600'
    };
    return colorMap[priorityColor] || 'bg-gray-100 text-gray-600';
  };

  const getRiskBarColor = (risk) => {
    return risk.color || 'bg-gray-500';
  };

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="">
      <div className="container mx-auto px-4 py-8 ">
        {/* Section Title */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-800 relative pb-4 border-b border-gray-200">
            Identified Business Opportunities
            <div className="absolute bottom-0 left-0 w-12 h-1 bg-blue-600 rounded-full"></div>
          </h3>
        </div>

        {/* Slider Container */}
        <div className="relative ">
          {/* Navigation Buttons */}
          <button 
            onClick={slideLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>
          
          <button 
            onClick={slideRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>

          {/* Opportunity Cards Slider */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide gap-4 pb-4 px-5 pt-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {opportunities.map((opportunity) => (
              <div
                key={opportunity.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden flex-shrink-0 w-72"
                onClick={() => openModal(opportunity)}
              >
                {/* Card Header */}
                <div className={`${opportunity.headerColor} text-white p-3`}>
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-sm leading-tight">{opportunity.title}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getPriorityBadgeStyle(opportunity.priorityColor)}`}>
                      {opportunity.priority.split(' ')[0]}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{opportunity.description}</p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div>
                      <div className="text-xs text-gray-500">Value</div>
                      <div className="font-bold text-sm">{opportunity.estimatedValue}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">ROI</div>
                      <div className="font-bold text-sm">{opportunity.roiTime}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Probability</div>
                      <div className="font-bold text-sm">{opportunity.probability}</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {opportunity.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {opportunity.tags.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                        +{opportunity.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 py-8 mt-12">
          <p className="mb-2">Business Opportunity Dashboard • Data-Driven Insights for Strategic Growth</p>
          <p>© 2023 DataScience Analytics Inc. All rights reserved.</p>
        </footer>
      </div>

      {/* Modal */}
      {isModalOpen && selectedOpportunity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold">{selectedOpportunity.title}</h3>
              <button
                onClick={closeModal}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <div className="mb-6">
                    <h5 className="text-xl font-semibold mb-3">Opportunity Overview</h5>
                    <p className="text-gray-700 mb-4">
                      {selectedOpportunity.fullDescription}
                    </p>
                    
                    {/* Metrics Badges */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-sm text-gray-600">Estimated Value</div>
                        <div className="font-bold text-lg text-blue-600">{selectedOpportunity.estimatedValue}</div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-sm text-gray-600">ROI Time</div>
                        <div className="font-bold text-lg text-blue-600">{selectedOpportunity.roiTime}</div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-sm text-gray-600">Probability</div>
                        <div className="font-bold text-lg text-blue-600">{selectedOpportunity.probability}</div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-sm text-gray-600">Implementation</div>
                        <div className="font-bold text-lg text-blue-600">3 months</div>
                      </div>
                    </div>

                    {/* Timeline */}
                    {selectedOpportunity.timeline && (
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold mb-4">Implementation Timeline</h5>
                        <div className="space-y-4">
                          {selectedOpportunity.timeline.map((item, index) => (
                            <div key={index} className="relative pl-8 pb-4">
                              <div className="absolute left-0 top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                              {index < selectedOpportunity.timeline.length - 1 && (
                                <div className="absolute left-2 top-6 w-0.5 h-full bg-gray-200"></div>
                              )}
                              <h6 className="font-semibold text-gray-800">{item.phase}</h6>
                              <p className="text-gray-600 text-sm mb-1">{item.description}</p>
                              <small className="text-gray-500">{item.duration}</small>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Chart Placeholder */}
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold mb-3">Data Insights</h5>
                      <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                        <div className="text-gray-500">Chart would be rendered here</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Key Metrics */}
                  {selectedOpportunity.metrics && (
                    <div className="bg-white border rounded-lg p-4 shadow-sm">
                      <h5 className="font-semibold mb-3">Key Metrics</h5>
                      <div className="space-y-3">
                        {Object.entries(selectedOpportunity.metrics).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                            <span className={`font-bold ${value.startsWith('+') ? 'text-green-600' : value.startsWith('-') ? 'text-red-600' : 'text-blue-600'}`}>
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Risk Analysis */}
                  {selectedOpportunity.risks && (
                    <div className="bg-white border rounded-lg p-4 shadow-sm">
                      <h5 className="font-semibold mb-3">Risk Analysis</h5>
                      <div className="space-y-3">
                        {Object.entries(selectedOpportunity.risks).map(([key, risk]) => (
                          <div key={key}>
                            <div className="flex justify-between mb-1">
                              <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                              <span className="text-sm">{risk.level}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${getRiskBarColor(risk)}`}
                                style={{ width: risk.width }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Recommended Actions */}
                  {selectedOpportunity.actions && (
                    <div className="bg-white border rounded-lg p-4 shadow-sm">
                      <h5 className="font-semibold mb-3">Recommended Actions</h5>
                      <div className="space-y-2">
                        {selectedOpportunity.actions.map((action, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                            <span className="text-sm">{action}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Team Section */}
              {selectedOpportunity.team && (
                <div className="mt-6">
                  <h5 className="text-lg font-semibold mb-4">Opportunity Team</h5>
                  <div className="flex flex-wrap gap-6">
                    {selectedOpportunity.team.map((member, index) => (
                      <div key={index} className="text-center">
                        <div className={`w-16 h-16 ${member.color} rounded-full flex items-center justify-center text-white font-bold text-lg mb-2`}>
                          {member.initials}
                        </div>
                        <div className="font-medium">{member.name}</div>
                        <small className="text-gray-500">{member.role}</small>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-6 py-4 flex flex-wrap gap-3">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-colors">
                <FileText size={16} className="mr-2" />
                Download Report
              </button>
              <button className="flex items-center px-4 py-2 border border-blue-300 text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
                <Share2 size={16} className="mr-2" />
                Share Opportunity
              </button>
              <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                <Play size={16} className="mr-2" />
                Initiate Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OpportunitiesSection;