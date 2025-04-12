"use client"
import React, { useState } from 'react';
import axios from 'axios';

const calculatePasswordStrength = (password) => {
  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^a-zA-Z0-9]/.test(password)) strength++;
  return strength;
};

const getStrengthColor = (strength) => {
  if (strength <= 2) return 'bg-red-500';
  if (strength <= 3) return 'bg-amber-500';
  return 'bg-emerald-500';
};

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
    lowBandwidth: false,
    passwordVisible: false,
  });

  const [passwordStrength, setPasswordStrength] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    const updatedForm = { ...formData, [name]: newValue };
    setFormData(updatedForm);

    if (name === 'password') {
      setPasswordStrength(calculatePasswordStrength(newValue));
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('api/authenticate/login', {
        email: formData.email,
        password: formData.password,
      });

      alert('Login successful!');
      console.log(res.data);
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen py-6 flex flex-col justify-center sm:py-12 ${formData.lowBandwidth ? 'bg-white' : 'bg-gray-100'}`}>
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="max-w-md w-full mx-auto">
          <div className={`${formData.lowBandwidth ? '' : 'bg-white shadow-md rounded-lg p-8'}`}>
            <div className="mb-6 text-center">
              <h1 className="text-2xl font-semibold text-gray-800 mb-2">Welcome Back</h1>
              <p className="text-gray-500">Sign in to access your account</p>
            </div>

            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 font-medium text-gray-700">Password</label>
                <div className="relative">
                  <input
                    type={formData.passwordVisible ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, passwordVisible: !formData.passwordVisible })}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {formData.passwordVisible ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
                {formData.password && (
                  <div className="h-1 w-full bg-gray-200 mt-2 rounded overflow-hidden">
                    <div className={`h-full ${getStrengthColor(passwordStrength)}`} style={{ width: `${passwordStrength * 20}%` }}></div>
                  </div>
                )}
                <p className="text-xs text-gray-500 mt-1">Use at least 8 characters with letters and numbers</p>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">Remember me</label>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800">Forgot password?</a>
              </div>

              <p className="text-sm text-center text-gray-500">
                Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
              </p>
              <p className="mt-4 text-xs text-gray-500">
                By signing in, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
              </p>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 my-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>


            </form>
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
