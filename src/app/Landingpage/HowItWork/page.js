// this contain step by step that how it works
"use client"
import React from 'react';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">How It Works</h1>
          <p className="text-xl">A simple, transparent process for borrowers and lenders</p>
        </div>
      </div>

      {/* For Borrowers Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">For Borrowers</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <div className="bg-blue-100 text-blue-800 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold">1</div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Create Your Profile</h3>
              <p className="text-gray-700 mb-4">
                Sign up in minutes with basic information. Our alternative credit scoring system evaluates your creditworthiness using non-traditional metrics like utility payments, mobile money history, and community references.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 font-medium">Tip: The more complete your profile, the better we can assess your creditworthiness.</p>
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <div className="bg-blue-100 text-blue-800 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold">2</div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Get Matched with Lenders</h3>
              <p className="text-gray-700 mb-4">
                Our platform connects you with individual and institutional lenders who are interested in supporting borrowers like you. You&apos;ll see loan offers with different terms and interest rates.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Choose from multiple offers</li>
                <li>See lender ratings and reviews</li>
                <li>Select terms that work for your situation</li>
              </ul>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <div className="bg-blue-100 text-blue-800 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold">3</div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Receive Funds & Build Credit</h3>
              <p className="text-gray-700 mb-4">
                Once your loan is approved, funds are deposited directly into your account through our secure escrow system. As you make timely repayments, you build your credit history on our platform.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Flexible Repayment</h4>
                  <p className="text-gray-700">Align payments with your income schedule (weekly, bi-weekly, monthly)</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Credit Building</h4>
                  <p className="text-gray-700">Each successful repayment increases your borrowing limit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* For Lenders Section */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">For Lenders</h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold">1</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">Set Up Your Lender Profile</h3>
                <p className="text-gray-700 mb-4">
                  Complete a simple registration process where you specify your lending preferences, risk tolerance, and desired return. Our system helps you diversify across borrower types.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold">2</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">Review Borrower Requests</h3>
                <p className="text-gray-700 mb-4">
                  Browse loan requests that match your criteria. Each borrower profile includes our alternative credit assessment, purpose of the loan, and community references when available.
                </p>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-blue-800 font-medium">Our risk assessment tools help you make informed decisions with clear risk ratings for each borrower.</p>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold">3</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">Fund Loans & Earn Returns</h3>
                <p className="text-gray-700 mb-4">
                  Fund loans either individually or through automated portfolio tools. Receive regular repayments with interest, and track your portfolio performance through our dashboard.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-blue-800 mb-2">Diversification Tools</h4>
                    <p className="text-gray-700">Spread risk across multiple borrowers automatically</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-blue-800 mb-2">Transparent Reporting</h4>
                    <p className="text-gray-700">Real-time updates on your portfolio performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Safety Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">Trust & Safety</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-600 text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Secure Escrow System</h3>
              <p className="text-gray-700">
                All loan funds are held in secure escrow accounts until borrowers meet verification requirements. Repayments are automatically processed through our secure payment system.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-600 text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Incremental Lending</h3>
              <p className="text-gray-700">
                Borrowers start with small loans and build their way up as they demonstrate reliability. This reduces risk for lenders while helping borrowers establish credit.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-600 text-3xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Community Guarantors</h3>
              <p className="text-gray-700">
                Borrowers can opt to have trusted community members or business associations vouch for them, adding an extra layer of accountability.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-600 text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Flexible Rescheduling</h3>
              <p className="text-gray-700">
                Our system allows for repayment schedule adjustments in case of genuine hardship, with transparent communication between all parties.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our growing community of borrowers and lenders creating financial opportunities together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-800 px-8 py-3 rounded-md font-medium hover:bg-blue-100 transition duration-300">
              Become a Borrower
            </button>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300">
              Become a Lender
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;