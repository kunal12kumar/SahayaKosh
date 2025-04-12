// in this we will put the code for lenderdashboard 
"use client"
import { useState } from 'react';
import { ChevronRight, Bell, UserCircle, LogOut, DollarSign, AlertCircle, ArrowUpRight, PieChart, Users } from 'lucide-react';

export default function Dashboard() {
  const [activeInvestments, setActiveInvestments] = useState([
    { name: "Maria's Bakery", amount: 500, return: 10, monthsLeft: 4 },
    { name: "Carlos' Repair Shop", amount: 350, return: 8, monthsLeft: 2 },
    { name: "Sofia's Clothing Store", amount: 750, return: 11, monthsLeft: 8 },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <div className="w-[80%] mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-8">
        {/* Top Navigation Bar */}
        <div className="flex justify-between items-center bg-blue-600 text-white px-6 py-4">
          <div className="font-bold text-xl">LENDING HUB</div>
          <div className="flex space-x-4 items-center">
            <button className="flex items-center hover:text-blue-200">
              <Bell size={18} className="mr-1" />
              <span>Notifications</span>
            </button>
            <button className="flex items-center hover:text-blue-200">
              <UserCircle size={18} className="mr-1" />
              <span>Profile</span>
            </button>
            <button className="flex items-center hover:text-blue-200">
              <LogOut size={18} className="mr-1" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* User Greeting & Stats */}
        <div className="flex justify-between bg-blue-50 px-6 py-4 border-b border-blue-100">
          <div className="flex items-center">
            <div className="bg-blue-600 text-white h-12 w-12 rounded-full flex items-center justify-center text-lg font-semibold">
              RD
            </div>
            <div className="ml-3">
              <p className="text-gray-500">Hello,</p>
              <p className="font-semibold text-lg">Rosa</p>
            </div>
          </div>
          <div className="flex items-center text-gray-700">
            <div className="mr-6">
              <span className="font-medium text-blue-600">Activity Status:</span> Active
            </div>
            <div>
              <span className="font-medium text-blue-600">Total Impact:</span> 12 businesses
            </div>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Portfolio Overview */}
          <div className="border border-blue-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
              <PieChart size={20} className="mr-2 text-blue-600" />
              Portfolio Overview
            </h3>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Total invested</span>
                <span className="font-semibold">${3200}</span>
              </div>
              <div className="flex justify-between">
                <span>Avg return</span>
                <span className="font-semibold text-green-600">9.5%</span>
              </div>
            </div>
            <button className="mt-4 text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
              View Details
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Available Balance */}
          <div className="border border-blue-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
              <DollarSign size={20} className="mr-2 text-blue-600" />
              Available Balance
            </h3>
            <div className="text-2xl font-bold text-gray-800 mb-4">$800</div>
            <div className="flex space-x-3">
              <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                Withdraw
              </button>
              <button className="px-3 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 text-sm">
                Add Funds
              </button>
            </div>
          </div>

          {/* Active Investments */}
          <div className="border border-blue-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Active Investments</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="text-left text-gray-500 text-sm">
                    <th className="pb-2">Business</th>
                    <th className="pb-2">Amount</th>
                    <th className="pb-2">Return</th>
                    <th className="pb-2">Time Left</th>
                  </tr>
                </thead>
                <tbody>
                  {activeInvestments.map((investment, index) => (
                    <tr key={index} className="border-t border-gray-100">
                      <td className="py-3">{investment.name}</td>
                      <td className="py-3">${investment.amount}</td>
                      <td className="py-3 text-green-600">{investment.return}%</td>
                      <td className="py-3">{investment.monthsLeft} months left</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="mt-4 text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
              View All
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Browse Loan Opportunities */}
          <div className="md:col-span-2 border border-blue-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-blue-50">
            <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center font-medium">
              <AlertCircle size={18} className="mr-2" />
              Browse Loan Opportunities
            </button>
          </div>

          {/* Impact Report */}
          <div className="border border-blue-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
              <ArrowUpRight size={20} className="mr-2 text-blue-600" />
              Impact Report
            </h3>
            <p className="text-gray-600 mb-4">Track your contribution to community growth and development.</p>
            <button className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
              View Details
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Community Success */}
          <div className="border border-blue-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
              <Users size={20} className="mr-2 text-blue-600" />
              Community Success
            </h3>
            <p className="text-gray-600 mb-4">See how your investments have helped local entrepreneurs.</p>
            <button className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
              View Stories
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}