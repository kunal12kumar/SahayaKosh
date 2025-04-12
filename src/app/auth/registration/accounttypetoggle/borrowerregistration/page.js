// In this we will take all the information about the borrowerregistraion 
"use client"
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiUpload, FiUser, FiMail, FiPhone, FiCalendar, FiHome, FiBriefcase, FiDollarSign, FiFileText } from 'react-icons/fi';

const BorrowerPersonalForm = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [sameAsCurrent, setSameAsCurrent] = useState(true);
  const [filePreviews, setFilePreviews] = useState({
    photo: null,
    aadhaarFront: null,
    aadhaarBack: null,
    pan: null,
    incomeProof: null
  });



  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreviews(prev => ({
          ...prev,
          [field]: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };


  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      // Add additional processing if needed
      const payload = {
        ...formData,
        documents: {
          ...formData.documents,
          // Convert file objects to base64 if needed
        },
        createdAt: new Date().toISOString()
      };

      // Using axios
      const response = await axios.post('/api/borrowers', payload);

      if (response.status === 201) {
        setSubmitSuccess(true);
        reset(); // Reset form after successful submission
      } else {
        throw new Error(response.data.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError(error.message || 'Failed to submit form');
    } finally {
      setIsSubmitting(false);
    }
  };


  const employmentStatus = watch("employmentStatus");

  return (
    <div className="max-w-4xl mx-auto p-6 my-12 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="text-gray-400" />
              </div>
              <input
                {...register("name.firstName", { required: "First name is required" })}
                className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="John"
              />
            </div>
            {errors.name?.firstName && <p className="mt-1 text-sm text-red-600">{errors.name.firstName.message}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Middle Name</label>
            <input
              {...register("name.middleName")}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Middle"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="text-gray-400" />
              </div>
              <input
                {...register("name.lastName", { required: "Last name is required" })}
                className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Doe"
              />
            </div>
            {errors.name?.lastName && <p className="mt-1 text-sm text-red-600">{errors.name.lastName.message}</p>}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-gray-400" />
              </div>
              <input
                type="email"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Invalid email address"
                  }
                })}
                className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="john@example.com"
              />
            </div>
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Primary Mobile*</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiPhone className="text-gray-400" />
              </div>
              <input
                type="tel"
                {...register("mobile.primary", { 
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10,15}$/,
                    message: "Invalid mobile number"
                  }
                })}
                className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="9876543210"
              />
            </div>
            {errors.mobile?.primary && <p className="mt-1 text-sm text-red-600">{errors.mobile.primary.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Mobile</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiPhone className="text-gray-400" />
              </div>
              <input
                type="tel"
                {...register("mobile.secondary", { 
                  pattern: {
                    value: /^[0-9]{10,15}$/,
                    message: "Invalid mobile number"
                  }
                })}
                className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="9876543210"
              />
            </div>
            {errors.mobile?.secondary && <p className="mt-1 text-sm text-red-600">{errors.mobile.secondary.message}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth*</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiCalendar className="text-gray-400" />
              </div>
              <input
                type="date"
                {...register("dob", { 
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
                className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {errors.dob && <p className="mt-1 text-sm text-red-600">{errors.dob.message}</p>}
          </div>
        </div>

        {/* Current Address */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <FiHome className="mr-2" /> Current Address
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Street*</label>
              <input
                {...register("address.current.street", { required: "Street is required" })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="123 Main St"
              />
              {errors.address?.current?.street && <p className="mt-1 text-sm text-red-600">{errors.address.current.street.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City*</label>
              <input
                {...register("address.current.city", { required: "City is required" })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Mumbai"
              />
              {errors.address?.current?.city && <p className="mt-1 text-sm text-red-600">{errors.address.current.city.message}</p>}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State*</label>
              <input
                {...register("address.current.state", { required: "State is required" })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Maharashtra"
              />
              {errors.address?.current?.state && <p className="mt-1 text-sm text-red-600">{errors.address.current.state.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code*</label>
              <input
                {...register("address.current.postalCode", { required: "Postal code is required" })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="400001"
              />
              {errors.address?.current?.postalCode && <p className="mt-1 text-sm text-red-600">{errors.address.current.postalCode.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country*</label>
              <input
                {...register("address.current.country", { required: "Country is required" })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                defaultValue="India"
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Permanent Address */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <FiHome className="mr-2" /> Permanent Address
            </h3>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="sameAsCurrent"
                checked={sameAsCurrent}
                onChange={() => setSameAsCurrent(!sameAsCurrent)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="sameAsCurrent" className="ml-2 block text-sm text-gray-700">
                Same as current address
              </label>
            </div>
          </div>
          
          {!sameAsCurrent && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Street*</label>
                  <input
                    {...register("address.permanent.street", { 
                      required: !sameAsCurrent && "Street is required"
                    })}
                    disabled={sameAsCurrent}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="123 Main St"
                  />
                  {errors.address?.permanent?.street && <p className="mt-1 text-sm text-red-600">{errors.address.permanent.street.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City*</label>
                  <input
                    {...register("address.permanent.city", { 
                      required: !sameAsCurrent && "City is required"
                    })}
                    disabled={sameAsCurrent}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Mumbai"
                  />
                  {errors.address?.permanent?.city && <p className="mt-1 text-sm text-red-600">{errors.address.permanent.city.message}</p>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State*</label>
                  <input
                    {...register("address.permanent.state", { 
                      required: !sameAsCurrent && "State is required"
                    })}
                    disabled={sameAsCurrent}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Maharashtra"
                  />
                  {errors.address?.permanent?.state && <p className="mt-1 text-sm text-red-600">{errors.address.permanent.state.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code*</label>
                  <input
                    {...register("address.permanent.postalCode", { 
                      required: !sameAsCurrent && "Postal code is required"
                    })}
                    disabled={sameAsCurrent}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="400001"
                  />
                  {errors.address?.permanent?.postalCode && <p className="mt-1 text-sm text-red-600">{errors.address.permanent.postalCode.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country*</label>
                  <input
                    {...register("address.permanent.country", { 
                      required: !sameAsCurrent && "Country is required"
                    })}
                    disabled={sameAsCurrent}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    defaultValue="India"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Employment Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <FiBriefcase className="mr-2" /> Employment Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Employment Status*</label>
              <select
                {...register("employmentStatus", { required: "Employment status is required" })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select status</option>
                <option value="employed">Employed</option>
                <option value="self-employed">Self-employed</option>
                <option value="unemployed">Unemployed</option>
                <option value="student">Student</option>
                <option value="retired">Retired</option>
                <option value="freelancer">Freelancer</option>
                <option value="business-owner">Business Owner</option>
              </select>
              {errors.employmentStatus && <p className="mt-1 text-sm text-red-600">{errors.employmentStatus.message}</p>}
            </div>
            
            {(employmentStatus === "employed" || employmentStatus === "business-owner") && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name*</label>
                <input
                  {...register("employmentDetails.companyName", { 
                    required: (employmentStatus === "employed" || employmentStatus === "business-owner") && "Company name is required"
                  })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="ABC Corp"
                />
                {errors.employmentDetails?.companyName && <p className="mt-1 text-sm text-red-600">{errors.employmentDetails.companyName.message}</p>}
              </div>
            )}
          </div>
          
          {employmentStatus === "employed" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title*</label>
                <input
                  {...register("employmentDetails.jobTitle", { 
                    required: employmentStatus === "employed" && "Job title is required"
                  })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Software Engineer"
                />
                {errors.employmentDetails?.jobTitle && <p className="mt-1 text-sm text-red-600">{errors.employmentDetails.jobTitle.message}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Employment Type*</label>
                <select
                  {...register("employmentDetails.employmentType", { 
                    required: employmentStatus === "employed" && "Employment type is required"
                  })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select type</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="contract">Contract</option>
                  <option value="temporary">Temporary</option>
                  <option value="internship">Internship</option>
                </select>
                {errors.employmentDetails?.employmentType && <p className="mt-1 text-sm text-red-600">{errors.employmentDetails.employmentType.message}</p>}
              </div>
            </div>
          )}
          
          {(employmentStatus === "employed" || employmentStatus === "business-owner") && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Employment Duration (months)*</label>
              <input
                type="number"
                {...register("employmentDetails.employmentDuration", { 
                  required: (employmentStatus === "employed" || employmentStatus === "business-owner") && "Employment duration is required",
                  min: {
                    value: 0,
                    message: "Duration must be positive"
                  }
                })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="12"
              />
              {errors.employmentDetails?.employmentDuration && <p className="mt-1 text-sm text-red-600">{errors.employmentDetails.employmentDuration.message}</p>}
            </div>
          )}
        </div>

        {/* Annual Income */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <FiDollarSign className="mr-2" /> Annual Income
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Amount (INR)*</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">₹</span>
                </div>
                <input
                  type="number"
                  {...register("annualIncome.amount", { 
                    required: "Income amount is required",
                    min: {
                      value: 0,
                      message: "Income must be positive"
                    }
                  })}
                  className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="500000"
                />
              </div>
              {errors.annualIncome?.amount && <p className="mt-1 text-sm text-red-600">{errors.annualIncome.amount.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Income Proof*</label>
              <div className="flex items-center">
                <label className="flex flex-col items-center px-4 py-2 bg-white text-blue-500 rounded-lg border border-blue-500 cursor-pointer hover:bg-blue-50">
                  <FiUpload className="mr-2" />
                  <span className="text-sm">Upload Document</span>
                  <input
                    type="file"
                    {...register("annualIncome.incomeProof", { 
                      required: "Income proof is required"
                    })}
                    onChange={(e) => handleFileChange(e, "incomeProof")}
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                </label>
                {filePreviews.incomeProof && (
                  <span className="ml-2 text-sm text-green-600">Document uploaded</span>
                )}
              </div>
              {errors.annualIncome?.incomeProof && <p className="mt-1 text-sm text-red-600">{errors.annualIncome.incomeProof.message}</p>}
            </div>
          </div>
        </div>

        {/* Documents Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <FiFileText className="mr-2" /> Documents
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Photo */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Photo*</label>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  {filePreviews.photo ? (
                    <img src={filePreviews.photo} alt="Preview" className="w-16 h-16 rounded-full object-cover border" />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                      <FiUser className="text-gray-400 text-xl" />
                    </div>
                  )}
                </div>
                <label className="flex flex-col items-center px-4 py-2 bg-white text-blue-500 rounded-lg border border-blue-500 cursor-pointer hover:bg-blue-50">
                  <FiUpload className="mr-2" />
                  <span className="text-sm">Upload Photo</span>
                  <input
                    type="file"
                    {...register("documents.photo", { required: "Photo is required" })}
                    onChange={(e) => handleFileChange(e, "photo")}
                    className="hidden"
                    accept=".jpg,.jpeg,.png"
                  />
                </label>
              </div>
              {errors.documents?.photo && <p className="mt-1 text-sm text-red-600">{errors.documents.photo.message}</p>}
            </div>
            
            {/* Aadhaar */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Aadhaar Card*</label>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Number*</label>
                  <input
                    {...register("documents.aadhaar.number", { 
                      required: "Aadhaar number is required",
                      pattern: {
                        value: /^[0-9]{12}$/,
                        message: "Invalid Aadhaar number (must be 12 digits)"
                      }
                    })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="123456789012"
                  />
                  {errors.documents?.aadhaar?.number && <p className="mt-1 text-sm text-red-600">{errors.documents.aadhaar.number.message}</p>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Front Side*</label>
                  <label className="flex flex-col items-center px-4 py-2 bg-white text-blue-500 rounded-lg border border-blue-500 cursor-pointer hover:bg-blue-50">
                    <FiUpload className="mr-2" />
                    <span className="text-sm">Upload Front</span>
                    <input
                      type="file"
                      {...register("documents.aadhaar.front", { required: "Aadhaar front is required" })}
                      onChange={(e) => handleFileChange(e, "aadhaarFront")}
                      className="hidden"
                      accept=".jpg,.jpeg,.png,.pdf"
                    />
                  </label>
                  {filePreviews.aadhaarFront && (
                    <span className="block mt-1 text-xs text-green-600">Front uploaded</span>
                  )}
                  {errors.documents?.aadhaar?.front && <p className="mt-1 text-sm text-red-600">{errors.documents.aadhaar.front.message}</p>}
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Back Side*</label>
                  <label className="flex flex-col items-center px-4 py-2 bg-white text-blue-500 rounded-lg border border-blue-500 cursor-pointer hover:bg-blue-50">
                    <FiUpload className="mr-2" />
                    <span className="text-sm">Upload Back</span>
                    <input
                      type="file"
                      {...register("documents.aadhaar.back", { required: "Aadhaar back is required" })}
                      onChange={(e) => handleFileChange(e, "aadhaarBack")}
                      className="hidden"
                      accept=".jpg,.jpeg,.png,.pdf"
                    />
                  </label>
                  {filePreviews.aadhaarBack && (
                    <span className="block mt-1 text-xs text-green-600">Back uploaded</span>
                  )}
                  {errors.documents?.aadhaar?.back && <p className="mt-1 text-sm text-red-600">{errors.documents.aadhaar.back.message}</p>}
                </div>
              </div>
            </div>
            
            {/* PAN
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">PAN Card*</label>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Number*</label>
                  <input
                    {...register("documents.pan.number", { 
                      required: "PAN number is required",
                      pattern: {
                        value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                        message: "Invalid PAN number (format: ABCDE1234F)"
                      }
                    })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="ABCDE1234F"
                  />
                  {errors.documents?.pan?.number && <p className="mt-1 text-sm text-red-600">{errors.documents.pan.number.message}</p>}
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Document*</label>
                  <label className="flex flex-col items-center px-4 py-2 bg-white text-blue-500 rounded-lg border border-blue-500 cursor-pointer hover:bg-blue-50">
                    <FiUpload className="mr-2" />
                    <span className="text-sm">Upload PAN</span>
                    <input
                      type="file"
                      {...register("documents.pan.document", { required: "PAN document is required" })}
                      onChange={(e) => handleFileChange(e, "pan")}
                      className="hidden"
                      accept=".jpg,.jpeg,.png,.pdf"
                    />
                  </label>
                  {filePreviews.pan && (
                    <span className="block mt-1 text-xs text-green-600">PAN uploaded</span>
                  )}
                  {errors.documents?.pan?.document && <p className="mt-1 text-sm text-red-600">{errors.documents.pan.document.message}</p>}
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-6">
        <Link href='/auth/registration/Sendotp'> <button
            type="submit"
            className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Submit Application
          </button>  </Link> 
        </div>
      </form>
    </div>
  );
};

export default BorrowerPersonalForm;