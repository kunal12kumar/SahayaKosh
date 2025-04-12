// in this we will choose which will 
// In this we will how is regestring for borowwer or lender
"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const RoleSelection = () => {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    // Add a slight delay for better UX
    setTimeout(() => {
      if (role === 'borrower') {
        router.push('/auth/registration/accounttypetoggle/borrowerregistration');
      } else {
        router.push('/auth/registration/accounttypetoggle/lenderregistration');
      }
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
       

        {/* Main Content */}
        <main className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">How would you like to join us?</h2>
            <p className="text-lg text-gray-600">
              Select your role to get started with your financial journey
            </p>
          </div>

          {/* Role Selection Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Borrower Card */}
            <div 
              className={`bg-white rounded-xl shadow-lg p-8 border-2 transition-all duration-300 cursor-pointer hover:shadow-xl hover:border-blue-500 ${
                selectedRole === 'borrower' ? 'border-blue-600 scale-105' : 'border-transparent'
              }`}
              onClick={() => handleRoleSelect('borrower')}
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">I want to borrow</h3>
                <p className="text-gray-600 mb-6">
                  Access affordable credit from individual lenders to meet your financial needs
                </p>
                <ul className="text-left text-gray-600 space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Competitive interest rates
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Flexible repayment terms
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    No hidden fees
                  </li>
                </ul>
                <button 
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedRole === 'borrower' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}
                >
                  Continue as Borrower
                </button>
              </div>
            </div>

            {/* Lender Card */}
            <div 
              className={`bg-white rounded-xl shadow-lg p-8 border-2 transition-all duration-300 cursor-pointer hover:shadow-xl hover:border-blue-500 ${
                selectedRole === 'lender' ? 'border-blue-600 scale-105' : 'border-transparent'
              }`}
              onClick={() => handleRoleSelect('lender')}
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">I want to lend</h3>
                <p className="text-gray-600 mb-6">
                  Earn attractive returns by funding creditworthy borrowers in our community
                </p>
                <ul className="text-left text-gray-600 space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Higher returns than savings accounts
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Diversify your investment portfolio
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Support financial inclusion
                  </li>
                </ul>
                <button 
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedRole === 'lender' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}
                >
                  Continue as Lender
                </button>
              </div>
            </div>
          </div>

          {/* Already have an account */}
          <div className="text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-blue-600 font-medium hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>By continuing, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a></p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <span className="sr-only">Security</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11V11.99z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <span className="sr-only">Trust</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <span className="sr-only">Help</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default RoleSelection;