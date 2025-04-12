// This page contain all the information about the website means it is about us page 
"use client"
import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">About Our Platform</h1>
          <p className="text-xl">Empowering underbanked individuals and MSMEs through accessible credit solutions</p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              We're building a peer-to-peer lending platform that bridges the gap between underbanked individuals, small businesses, and lenders who want to make a difference.
            </p>
            <p className="text-gray-700">
              Traditional banking systems often exclude those who need financial support the most. We're changing that by creating an inclusive, transparent, and community-driven lending ecosystem.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Financial inclusion" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">The Problem We Solve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-3xl mb-4">🏦</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Lack of Access</h3>
              <p className="text-gray-700">Many individuals and small businesses can't get loans through conventional banks</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Outdated Systems</h3>
              <p className="text-gray-700">Traditional credit scores don't capture the full financial picture</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-3xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Complex Procedures</h3>
              <p className="text-gray-700">Current processes intimidate those with limited financial literacy</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Trust Deficit</h3>
              <p className="text-gray-700">Borrowers and lenders struggle to trust each other without established systems</p>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">Our Innovative Approach</h2>
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Alternative Credit Scoring</h3>
            <p className="text-gray-700 mb-4">
              We evaluate creditworthiness using non-traditional metrics like utility payment history, micro-transaction records, business metrics, and community vouching.
            </p>
            <p className="text-gray-700">
              This allows us to serve those who are financially responsible but excluded by traditional systems.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Credit scoring" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Trust-Building Mechanisms</h3>
            <p className="text-gray-700 mb-4">
              Our platform includes escrow systems, transparent fees, incremental lending, and public reputation systems to create trust between all parties.
            </p>
            <p className="text-gray-700">
              Borrowers start small and build their credit history gradually through successful repayments.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Trust building" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-4xl">👨‍💼</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">John Smith</h3>
              <p className="text-blue-600 font-medium mb-2">Founder & CEO</p>
              <p className="text-gray-700">15+ years in fintech and financial inclusion</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-4xl">👩‍💻</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Maria Garcia</h3>
              <p className="text-blue-600 font-medium mb-2">CTO</p>
              <p className="text-gray-700">Expert in inclusive technology solutions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-4xl">👨‍🌾</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Kwame Osei</h3>
              <p className="text-blue-600 font-medium mb-2">Community Director</p>
              <p className="text-gray-700">Deep roots in local business communities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Inclusion</h3>
            <p className="text-gray-700">We believe everyone deserves access to fair financial services, regardless of their background or circumstances.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Transparency</h3>
            <p className="text-gray-700">No hidden fees, no complex terms - just clear, honest communication.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Community</h3>
            <p className="text-gray-700">We're building a network where trust is earned and shared for mutual benefit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;