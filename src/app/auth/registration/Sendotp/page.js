"use client"
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { FiMail, FiClock, FiRefreshCw } from 'react-icons/fi';

export default function OtpVerificationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [resendDisabled, setResendDisabled] = useState(true);
  const [countdown, setCountdown] = useState(60);

  // Handle OTP input changes
  const handleOtpChange = (index, value) => {
    if (/^\d*$/.test(value) ){ // Only allow numbers
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  // Handle paste from clipboard
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text/plain').trim();
    if (/^\d{4}$/.test(pasteData)) {
      const pasteArray = pasteData.split('');
      setOtp(pasteArray);
      document.getElementById('otp-3').focus();
    }
  };

  // Verify OTP
  const verifyOtp = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const otpCode = otp.join('');
      if (otpCode.length !== 4) {
        throw new Error('Please enter a complete 4-digit OTP');
      }

      const response = await axios.post('/api/auth/verify-otp', {
        email,
        otp: otpCode
      });

      if (response.data.success) {
        setSuccess('Verification successful! Redirecting...');
        // Store verification token if needed
        if (response.data.token) {
          localStorage.setItem('authToken', response.data.token);
        }
        // Redirect after 2 seconds
        setTimeout(() => {
          router.push(response.data.redirectUrl || '/dashboard');
        }, 2000);
      } else {
        throw new Error(response.data.message || 'Verification failed');
      }
    } catch (error) {
      console.error('OTP verification error:', error);
      setError(error.response?.data?.message || error.message || 'Verification failed. Please try again.');
      // Clear OTP on error
      setOtp(['', '', '', '']);
      document.getElementById('otp-0').focus();
    } finally {
      setIsSubmitting(false);
    }
  };

  // Resend OTP
  const resendOtp = async () => {
    setError('');
    setSuccess('');
    setResendDisabled(true);
    setCountdown(60);
    
    try {
      const response = await axios.post('/api/auth/resend-otp', { email });
      if (response.data.success) {
        setSuccess('New OTP sent to your email!');
      } else {
        throw new Error(response.data.message || 'Failed to resend OTP');
      }
    } catch (error) {
      console.error('Resend OTP error:', error);
      setError(error.response?.data?.message || error.message || 'Failed to resend OTP. Please try again.');
      setResendDisabled(false);
    }
  };

  // Countdown timer for resend button
  useEffect(() => {
    let timer;
    if (countdown > 0 && resendDisabled) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
      setResendDisabled(false);
    }
    return () => clearTimeout(timer);
  }, [countdown, resendDisabled]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Verify Your Email</h2>
          <div className="mt-4 flex items-center justify-center text-gray-600">
            <FiMail className="mr-2" />
            <p>We've sent a verification code to {email}</p>
          </div>
        </div>

        <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md text-sm">
              {success}
            </div>
          )}

          <form className="space-y-6" onSubmit={verifyOtp}>
            <div>
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                Enter 4-digit code
              </label>
              <div className="mt-2 flex justify-center space-x-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    className="w-14 h-14 text-center text-2xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    autoFocus={index === 0}
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
                {isSubmitting ? (
                  <>
                    <FiRefreshCw className="animate-spin mr-2" />
                    Verifying...
                  </>
                ) : (
                  'Verify'
                )}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600">
              Didn't receive code?{' '}
              <button
                type="button"
                onClick={resendOtp}
                disabled={resendDisabled}
                className={`font-medium ${
                  resendDisabled ? 'text-gray-400' : 'text-blue-600 hover:text-blue-500'
                }`}
              >
                {resendDisabled ? (
                  <span className="flex items-center justify-center">
                    <FiClock className="mr-1" /> Resend in {countdown}s
                  </span>
                ) : (
                  'Resend OTP'
                )}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}