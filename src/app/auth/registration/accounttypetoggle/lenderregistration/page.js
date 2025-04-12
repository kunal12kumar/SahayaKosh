// In this code we are taking the lender data 

"use client"
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiUser, FiMail, FiPhone, FiCalendar, FiDollarSign, FiLock } from 'react-icons/fi';
import axios from 'axios';

const LenderRegistrationForm = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [step, setStep] = useState('registration'); // 'registration', 'verification', 'complete'
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // First send registration data
      const response = await axios.post('/api/lenders/register', formData);
      
      if (response.status === 201) {
        setStep('verification');
      } else {
        throw new Error(response.data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setSubmitError(error.response?.data?.message || error.message || 'Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const otpCode = otp.join('');
      const response = await axios.post('/api/lenders/verify', {
        email: watch('email'),
        otp: otpCode
      });

      if (response.status === 200) {
        setStep('complete');
      } else {
        throw new Error(response.data.message || 'Verification failed');
      }
    } catch (error) {
      console.error('Verification error:', error);
      setSubmitError(error.response?.data?.message || error.message || 'Verification failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resendOtp = async () => {
    try {
      await axios.post('/api/lenders/resend-otp', { email: watch('email') });
      alert('OTP has been resent to your email');
    } catch (error) {
      console.error('Resend OTP error:', error);
      setSubmitError('Failed to resend OTP. Please try again.');
    }
  };

  if (step === 'verification') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Verify Your Email
          </h2>
          <p className="mt-2 text-center text-gray-600">
            We've sent a 4-digit code to {watch('email')}
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {submitError && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                {submitError}
              </div>
            )}
            
            <form className="space-y-6" onSubmit={verifyOtp}>
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                  Enter verification code
                </label>
                <div className="mt-1 flex justify-center space-x-3">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      className="appearance-none block w-12 h-12 px-3 py-2 border border-gray-300 rounded-md shadow-sm text-center text-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  ))}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Verifying...' : 'Verify'}
                </button>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Didn't receive code?{' '}
                  <button 
                    type="button" 
                    onClick={resendOtp}
                    disabled={isSubmitting}
                    className="text-blue-600 hover:text-blue-500 disabled:text-gray-400"
                  >
                    Resend code
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'complete') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="text-center">
            <div className="mx-auto bg-green-100 rounded-full h-24 w-24 flex items-center justify-center">
              <svg className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
              Registration Complete!
            </h2>
            <p className="mt-2 text-center text-gray-600">
              You have successfully registered as a lender. You can now log in to your account.
            </p>
          </div>
          <div className="mt-8">
            <button
              type="button"
              onClick={() => window.location.href = '/login'}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-6 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Register as a Lender
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Join our community of lenders and start investing
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {submitError && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {submitError}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Personal Information */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="text-gray-400" />
                </div>
                <input
                  {...register("fullName", { required: "Full name is required" })}
                  className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                />
              </div>
              {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>}
            </div>

            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiCalendar className="text-gray-400" />
                  </div>
                  <input
                    type="date"
                    {...register("dateOfBirth", { 
                      required: "Date of birth is required",
                      validate: value => {
                        const dob = new Date(value);
                        const today = new Date();
                        const age = today.getFullYear() - dob.getFullYear();
                        if (today.getMonth() < dob.getMonth() || 
                            (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
                          return age - 1 >= 18 || "You must be at least 18 years old";
                        }
                        return age >= 18 || "You must be at least 18 years old";
                      }
                    })}
                    className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                {errors.dateOfBirth && <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiPhone className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    {...register("mobileNumber", { 
                      required: "Mobile number is required",
                      pattern: {
                        value: /^[0-9]{10,15}$/,
                        message: "Invalid mobile number"
                      }
                    })}
                    className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="9876543210"
                  />
                </div>
                {errors.mobileNumber && <p className="mt-1 text-sm text-red-600">{errors.mobileNumber.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="text-gray-400" />
                </div>
                <input
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="john@example.com"
                />
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    {...register("password", { 
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters"
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                        message: "Must include uppercase, lowercase, and number"
                      }
                    })}
                    className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    {...register("confirmPassword", { 
                      required: "Please confirm your password",
                      validate: value => 
                        value === watch('password') || "Passwords do not match"
                    })}
                    className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Employment Status
              </label>
              <select
                {...register("employmentStatus", { required: "Employment status is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select an option</option>
                <option value="employed">Employed</option>
                <option value="self-employed">Self-employed</option>
                <option value="business-owner">Business Owner</option>
                <option value="retired">Retired</option>
                <option value="student">Student</option>
                <option value="other">Other</option>
              </select>
              {errors.employmentStatus && <p className="mt-1 text-sm text-red-600">{errors.employmentStatus.message}</p>}
            </div>

            {/* Bank Details */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900">Bank Account Details</h3>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bank Name
              </label>
              <input
                {...register("bankName", { required: "Bank name is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.bankName && <p className="mt-1 text-sm text-red-600">{errors.bankName.message}</p>}
            </div>

            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account Number
                </label>
                <input
                  {...register("accountNumber", { 
                    required: "Account number is required",
                    pattern: {
                      value: /^[0-9]{9,18}$/,
                      message: "Invalid account number"
                    }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.accountNumber && <p className="mt-1 text-sm text-red-600">{errors.accountNumber.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  IFSC Code
                </label>
                <input
                  {...register("ifscCode", { 
                    required: "IFSC code is required",
                    pattern: {
                      value: /^[A-Z]{4}0[A-Z0-9]{6}$/,
                      message: "Invalid IFSC code format"
                    }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.ifscCode && <p className="mt-1 text-sm text-red-600">{errors.ifscCode.message}</p>}
              </div>
            </div>

            {/* Investment Capacity */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Investment Capacity
              </label>
              <select
                {...register("investmentCapacity", { required: "Investment capacity is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select an option</option>
                <option value="under5k">Under $5,000</option>
                <option value="5k-25k">$5,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="over100k">Over $100,000</option>
              </select>
              {errors.investmentCapacity && <p className="mt-1 text-sm text-red-600">{errors.investmentCapacity.message}</p>}
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  {...register("terms", { 
                    required: "You must accept the terms and conditions"
                  })}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-gray-700">
                  I agree to the <a href="#" className="text-blue-600 hover:text-blue-500">Terms and Conditions</a> and <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>
                </label>
              </div>
            </div>
            {errors.terms && <p className="mt-1 text-sm text-red-600">{errors.terms.message}</p>}

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Registering...' : 'Register'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LenderRegistrationForm;