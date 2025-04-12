"use client"
import React, { useState, useEffect } from 'react';

const SignUpForm = () => {
  // State management
  const [accountType, setAccountType] = useState('individual');
  const [currentStep, setCurrentStep] = useState(1);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [lowBandwidth, setLowBandwidth] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [formData, setFormData] = useState({
    fullname: '',
    businessName: '',
    dob: '',
    mobile: '',
    email: '',
    password: '',
    businessType: '',
    employment: '',
    incomeSource: '',
    address: '',
    financialGoal: '',
    registrationNumber: '',
    yearsOperation: '',
    employees: '',
    monthlyRevenue: '',
    businessAddress: '',
    businessDescription: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle OTP input
  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  // Handle OTP backspace
  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  // Calculate password strength
  useEffect(() => {
    const password = formData.password;
    let strength = 0;
    
    if (password.length >= 8) strength += 1;
    if (password.match(/[a-z]+/)) strength += 1;
    if (password.match(/[A-Z]+/)) strength += 1;
    if (password.match(/[0-9]+/)) strength += 1;
    if (password.match(/[^a-zA-Z0-9]+/)) strength += 1;
    
    setPasswordStrength(strength);
  }, [formData.password]);

  // Navigation functions
  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  // Toggle account type
  const toggleAccountType = (type) => {
    setAccountType(type);
  };

  // Toggle low bandwidth mode
  const toggleLowBandwidth = () => {
    setLowBandwidth(!lowBandwidth);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    console.log('Form submitted:', formData);
    nextStep(); // Move to completion step
  };

  // Resend OTP
  const resendOtp = () => {
    alert('A new verification code has been sent to your mobile number');
  };

  // Simulate file upload
  const handleFileUpload = () => {
    alert('This would open a file selector in a real implementation');
  };

  return (
    <div className={`min-h-screen bg-gray-100 ${lowBandwidth ? 'bg-white' : ''}`}>
      <div className="sm:w-[70%] w-[90%]  mx-auto p-4">
        {/* Header */}
        
        {/* Main Card */}
        <div className={`bg-white rounded-xl shadow-md p-6 mb-6 ${lowBandwidth ? 'shadow-none p-4' : ''}`}>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Join Our Lending Community</h1>
          <p className="text-gray-500 mb-6">Connect directly with lenders and borrowers in a safe, transparent environment.</p>

          {/* Account Type Toggle */}
          <div className="flex justify-center mb-8">
            <button
              className={`px-8 py-3 border border-blue-600 ${accountType === 'individual' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} rounded-l-lg`}
              onClick={() => toggleAccountType('individual')}
            >
              Individual
            </button>
            <button
              className={`px-8 py-3 border border-blue-600 ${accountType === 'business' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} rounded-r-lg`}
              onClick={() => toggleAccountType('business')}
            >
              Business/MSME
            </button>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex flex-col items-center flex-1 relative">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${currentStep > step ? 'bg-green-500' : currentStep === step ? 'bg-blue-600' : 'bg-gray-300'} text-white font-bold relative z-10`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div 
                    className={`absolute top-4 left-1/2 right-0 h-1 ${currentStep >= step ? 'bg-blue-600' : 'bg-gray-300'} z-0`}
                  ></div>
                )}
                <span className={`text-sm ${currentStep === step ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>
                  {step === 1 && 'Basic Info'}
                  {step === 2 && 'Verification'}
                  {step === 3 && 'Profile'}
                  {step === 4 && 'Complete'}
                </span>
              </div>
            ))}
          </div>

          {/* Form Sections */}
          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div>
                <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                  <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="fullname">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    {accountType === 'business' ? (
                      <>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="businessName">
                          Business Name
                        </label>
                        <input
                          type="text"
                          id="businessName"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </>
                    ) : (
                      <>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="dob">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          id="dob"
                          name="dob"
                          value={formData.dob}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </>
                    )}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                  <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="mobile">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <p className="text-sm text-gray-500 mt-1">We'll send a verification code to this number</p>
                  </div>
                  <div className="w-full md:w-1/2">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                      Email Address {accountType === 'individual' && <span className="text-gray-400 text-sm">(Optional)</span>}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                    Create Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <div className="h-1 bg-gray-200 rounded-full mt-2 overflow-hidden">
                    <div 
                      className="h-full transition-all duration-300"
                      style={{
                        width: `${passwordStrength * 20}%`,
                        backgroundColor: passwordStrength <= 2 ? '#ef4444' : passwordStrength <= 3 ? '#f59e0b' : '#10b981'
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Use at least 8 characters with letters and numbers</p>
                </div>

                {accountType === 'business' && (
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="businessType">
                      Business Type
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a business type</option>
                      <option value="retail">Retail Shop</option>
                      <option value="service">Service Provider</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="agriculture">Agriculture</option>
                      <option value="food">Food & Beverage</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                )}

                <div className="flex items-center mt-6">
                  <input
                    type="checkbox"
                    id="low-bandwidth"
                    checked={lowBandwidth}
                    onChange={toggleLowBandwidth}
                    className="mr-2"
                  />
                  <label htmlFor="low-bandwidth" className="text-sm text-gray-500">
                    Enable low-bandwidth mode (text only)
                  </label>
                </div>

                <div className="flex justify-end mt-8">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Verification */}
            {currentStep === 2 && (
              <div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Mobile Verification</label>
                  <p className="text-sm text-gray-500 mb-3">Enter the 4-digit code sent to your mobile number</p>
                  <div className="flex space-x-2">
                    {[0, 1, 2, 3].map((index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        maxLength="1"
                        value={otp[index]}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    Didn't receive code?{' '}
                    <button type="button" onClick={resendOtp} className="text-blue-600 hover:underline">
                      Resend code
                    </button>
                  </p>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Identity Verification</label>
                  <p className="text-sm text-gray-500 mb-3">Please upload any government-issued ID (Driver's License, Voter ID, Passport)</p>
                  <div 
                    onClick={handleFileUpload}
                    className={`border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors ${lowBandwidth ? 'p-4' : ''}`}
                  >
                    <div className="text-3xl text-blue-600 mb-2">📁</div>
                    <p>Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-500 mt-1">Supported formats: JPG, PNG, PDF (Max 5MB)</p>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Profile Information */}
            {currentStep === 3 && (
              <div>
                {accountType === 'individual' ? (
                  <>
                    <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                      <div className="w-full md:w-1/2 mb-4 md:mb-0">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="employment">
                          Employment Status
                        </label>
                        <select
                          id="employment"
                          name="employment"
                          value={formData.employment}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select an option</option>
                          <option value="employed">Employed</option>
                          <option value="self-employed">Self-employed</option>
                          <option value="business-owner">Business Owner</option>
                          <option value="unemployed">Unemployed</option>
                          <option value="student">Student</option>
                          <option value="retired">Retired</option>
                        </select>
                      </div>
                      <div className="w-full md:w-1/2">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="incomeSource">
                          Primary Income Source
                        </label>
                        <select
                          id="incomeSource"
                          name="incomeSource"
                          value={formData.incomeSource}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select an option</option>
                          <option value="salary">Salary</option>
                          <option value="business">Business Income</option>
                          <option value="freelance">Freelance Work</option>
                          <option value="agriculture">Agriculture</option>
                          <option value="rental">Rental Income</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="address">
                        Residential Address
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                      <p className="text-sm text-gray-500 mt-1">If you don't have a formal address, please describe your location</p>
                    </div>

                    <div className="mb-6">
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="financialGoal">
                        What is your primary financial goal?
                      </label>
                      <select
                        id="financialGoal"
                        name="financialGoal"
                        value={formData.financialGoal}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select your goal</option>
                        <option value="emergency">Emergency Fund</option>
                        <option value="education">Education</option>
                        <option value="business">Start/Grow Business</option>
                        <option value="home">Home Purchase/Improvement</option>
                        <option value="debt">Debt Consolidation</option>
                        <option value="medical">Medical Expenses</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                      <div className="w-full md:w-1/2 mb-4 md:mb-0">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="registrationNumber">
                          Business Registration Number
                        </label>
                        <input
                          type="text"
                          id="registrationNumber"
                          name="registrationNumber"
                          value={formData.registrationNumber}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-sm text-gray-500 mt-1">If available. Not required for informal businesses.</p>
                      </div>
                      <div className="w-full md:w-1/2">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="yearsOperation">
                          Years in Operation
                        </label>
                        <select
                          id="yearsOperation"
                          name="yearsOperation"
                          value={formData.yearsOperation}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select an option</option>
                          <option value="<1">Less than 1 year</option>
                          <option value="1-3">1-3 years</option>
                          <option value="3-5">3-5 years</option>
                          <option value="5+">More than 5 years</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                      <div className="w-full md:w-1/2 mb-4 md:mb-0">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="employees">
                          Number of Employees
                        </label>
                        <select
                          id="employees"
                          name="employees"
                          value={formData.employees}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select an option</option>
                          <option value="1">Just me</option>
                          <option value="2-5">2-5 employees</option>
                          <option value="6-10">6-10 employees</option>
                          <option value="11-20">11-20 employees</option>
                          <option value="20+">More than 20 employees</option>
                        </select>
                      </div>
                      <div className="w-full md:w-1/2">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="monthlyRevenue">
                          Monthly Revenue Range
                        </label>
                        <select
                          id="monthlyRevenue"
                          name="monthlyRevenue"
                          value={formData.monthlyRevenue}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select an option</option>
                          <option value="<500">Less than $500</option>
                          <option value="500-2000">$500 - $2,000</option>
                          <option value="2000-5000">$2,000 - $5,000</option>
                          <option value="5000-10000">$5,000 - $10,000</option>
                          <option value="10000+">More than $10,000</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="businessAddress">
                        Business Address
                      </label>
                      <textarea
                        id="businessAddress"
                        name="businessAddress"
                        value={formData.businessAddress}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                    </div>

                    <div className="mb-6">
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="businessDescription">
                        Brief Business Description
                      </label>
                      <textarea
                        id="businessDescription"
                        name="businessDescription"
                        value={formData.businessDescription}
                        onChange={handleInputChange}
                        rows="3"
                        placeholder="Tell us what your business does"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                    </div>
                  </>
                )}

                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Complete Signup
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Completion */}
            {currentStep === 4 && (
              <div className="text-center py-8">
                <div className="text-6xl text-green-500 mb-6">✓</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Registration Successful!</h2>
                <p className="text-gray-600 mb-2">Your account has been created successfully.</p>
                <p className="text-gray-600 mb-8">What would you like to do next?</p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    type="button"
                    className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Complete Your Profile
                  </button>
                  <button
                    type="button"
                    className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Explore Platform
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Trust Badges */}
        <div className={`bg-white rounded-xl shadow-md p-6 text-center ${lowBandwidth ? 'shadow-none p-4' : ''}`}>
          <div className="flex justify-center gap-6 mb-6">
            <div className="flex flex-col items-center">
              <div className="text-2xl text-green-500 mb-1">🔒</div>
              <span className="text-xs text-gray-500">Bank-Level Security</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl text-green-500 mb-1">👥</div>
              <span className="text-xs text-gray-500">10,000+ Users</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl text-green-500 mb-1">✓</div>
              <span className="text-xs text-gray-500">Verified Platform</span>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            By signing up, you agree to our{' '}
            <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and{' '}
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;