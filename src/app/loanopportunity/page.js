// In this lender will see the borowers who will need loan and other assests
"use client"
// pages/loan-opportunities.js
import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function LoanOpportunities() {
  const [opportunities, setOpportunities] = useState([
    {
      id: 1,
      businessName: "Jasmine's Cafe",
      ownerName: "Jasmine Rodriguez",
      category: "Food & Beverage",
      loanAmount: 2500,
      purpose: "Kitchen equipment upgrade to serve more customers",
      repaymentMonths: 6,
      interestRate: 9.5,
      location: "Phoenix, AZ",
      riskLevel: "Low",
      funded: 45,
      imageUrl: "/api/placeholder/80/80"
    },
    {
      id: 2,
      businessName: "Green Thumb Landscaping",
      ownerName: "Miguel Santos",
      category: "Home & Garden",
      loanAmount: 1800,
      purpose: "Purchase of new eco-friendly lawn equipment",
      repaymentMonths: 4,
      interestRate: 10.2,
      location: "Austin, TX",
      riskLevel: "Medium",
      funded: 25,
      imageUrl: "/api/placeholder/80/80"
    },
    {
      id: 3,
      businessName: "Tech Repair Pro",
      ownerName: "Sarah Johnson",
      category: "Technology",
      loanAmount: 3200,
      purpose: "Inventory expansion for phone parts and tools",
      repaymentMonths: 8,
      interestRate: 8.7,
      location: "Seattle, WA",
      riskLevel: "Low",
      funded: 62,
      imageUrl: "/api/placeholder/80/80"
    },
    {
      id: 4,
      businessName: "Artistic Boutique",
      ownerName: "Elena Martinez",
      category: "Retail",
      loanAmount: 1500,
      purpose: "Website development and online store setup",
      repaymentMonths: 5,
      interestRate: 9.0,
      location: "Miami, FL",
      riskLevel: "Medium",
      funded: 30,
      imageUrl: "/api/placeholder/80/80"
    },
    {
      id: 5,
      businessName: "Fresh Delivery Co.",
      ownerName: "Daniel Wilson",
      category: "Logistics",
      loanAmount: 4000,
      purpose: "Purchase of refrigerated delivery vehicle",
      repaymentMonths: 10,
      interestRate: 8.5,
      location: "Chicago, IL",
      riskLevel: "Medium",
      funded: 38,
      imageUrl: "/api/placeholder/80/80"
    }
  ]);

  const [filters, setFilters] = useState({
    category: "",
    minAmount: "",
    maxAmount: "",
    maxRepaymentMonths: ""
  });

  const filteredOpportunities = opportunities.filter(opp => {
    return (!filters.category || opp.category === filters.category) &&
      (!filters.minAmount || opp.loanAmount >= Number(filters.minAmount)) &&
      (!filters.maxAmount || opp.loanAmount <= Number(filters.maxAmount)) &&
      (!filters.maxRepaymentMonths || opp.repaymentMonths <= Number(filters.maxRepaymentMonths));
  });

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handleFundClick = (id) => {
    // In a real application, this would open a modal or navigate to a funding page
    alert(`Navigating to funding page for loan opportunity #${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
     
      {/* Header */}
     
      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Loan Opportunities</h2>
            <p className="text-gray-600">Fund small businesses and entrepreneurs in your community</p>
          </div>
         
          <Link href="/dashboard" className="text-blue-600 flex items-center">
            <span className="mr-1">←</span> Back to Dashboard
          </Link>
        </div>

        {/* Filters Section */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h3 className="text-lg font-medium mb-3">Filter Opportunities</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
              >
                <option value="">All Categories</option>
                <option value="Food & Beverage">Food & Beverage</option>
                <option value="Retail">Retail</option>
                <option value="Technology">Technology</option>
                <option value="Logistics">Logistics</option>
                <option value="Home & Garden">Home & Garden</option>
              </select>
            </div>
           
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Min Amount ($)</label>
              <input
                type="number"
                name="minAmount"
                value={filters.minAmount}
                onChange={handleFilterChange}
                placeholder="Min"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
              />
            </div>
           
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Max Amount ($)</label>
              <input
                type="number"
                name="maxAmount"
                value={filters.maxAmount}
                onChange={handleFilterChange}
                placeholder="Max"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
              />
            </div>
           
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Max Repayment (Months)</label>
              <input
                type="number"
                name="maxRepaymentMonths"
                value={filters.maxRepaymentMonths}
                onChange={handleFilterChange}
                placeholder="Months"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Loan Opportunities List */}
        <div className="space-y-4">
          {filteredOpportunities.length === 0 ? (
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <p className="text-gray-500">No loan opportunities match your filters.</p>
            </div>
          ) : (
            filteredOpportunities.map(opportunity => (
              <div key={opportunity.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start">
                    <img
                      src={opportunity.imageUrl}
                      alt={opportunity.businessName}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">{opportunity.businessName}</h3>
                          <p className="text-gray-600">Owner: {opportunity.ownerName}</p>
                          <div className="flex items-center mt-1 space-x-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{opportunity.category}</span>
                            <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">{opportunity.location}</span>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              opportunity.riskLevel === 'Low' ? 'bg-green-100 text-green-800' :
                              opportunity.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {opportunity.riskLevel} Risk
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-gray-800">${opportunity.loanAmount}</p>
                          <p className="text-gray-600 text-sm">{opportunity.repaymentMonths} months • {opportunity.interestRate}% interest</p>
                        </div>
                      </div>
                     
                      <div className="mt-4">
                        <h4 className="font-medium text-gray-800">Loan Purpose:</h4>
                        <p className="text-gray-600">{opportunity.purpose}</p>
                      </div>
                     
                      <div className="mt-4">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-gray-600">Funded: {opportunity.funded}%</span>
                          <span className="text-sm text-gray-600">${(opportunity.loanAmount * opportunity.funded / 100).toFixed(0)} of ${opportunity.loanAmount}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${opportunity.funded}%` }}
                          ></div>
                        </div>
                      </div>
                     
                      <div className="mt-6 flex justify-end">
                        <button
                          onClick={() => handleFundClick(opportunity.id)}
                          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium"
                        >
                          Fund This Business
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}