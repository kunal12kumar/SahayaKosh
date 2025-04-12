// // in this we will store the information of borrower profile data
// import React, { useState } from 'react';
// import axios from 'axios';

// const BorrowerProfileForm = () => {
//   const [formData, setFormData] = useState({
//     userId: '',
//     alternativeCreditScore: '',
//     creditTier: 'starter',
//     businessInfo: {
//       businessName: '',
//       businessType: 'micro',
//       industry: '',
//       yearEstablished: '',
//       monthlyRevenue: '',
//       employeeCount: '',
//       businessRegistration: {
//         hasRegistration: false,
//         registrationNumber: '',
//         registrationDocument: ''
//       }
//     },
//     incomeStreams: [{
//       source: '',
//       amount: '',
//       frequency: 'monthly',
//       stability: 'stable'
//     }],
//     activeLoanCount: 0,
//     completedLoanCount: 0,
//     totalAmountBorrowed: 0,
//     onTimePaymentRate: 100,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     const keys = name.split('.');
//     let newForm = { ...formData };

//     // if (keys.length === 1) {
//       newForm[name] = type === 'checkbox' ? checked : value;
//     } else if (keys.length === 2) {
//       newForm[keys[0]][keys[1]] = type === 'checkbox' ? checked : value;
//     } else if (keys.length === 3) {
//       newForm[keys[0]][keys[1]][keys[2]] = type === 'checkbox' ? checked : value;
//     }

//     setFormData(newForm);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('/api/borrower-profile', formData);
//       alert('Profile created successfully!');
//       console.log(res.data);
//     } catch (error) {
//       console.error(error);
//       alert('Error creating profile.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl space-y-6">
//       <h2 className="text-2xl font-bold text-center">Borrower Profile Form</h2>

//       {/* User ID */}
//       <div>
//         <label className="block font-medium mb-1">User ID</label>
//         <input type="text" name="userId" value={formData.userId} onChange={handleChange}
//           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
//       </div>

//       {/* Credit Score */}
//       <div>
//         <label className="block font-medium mb-1">Alternative Credit Score (300 - 850)</label>
//         <input type="number" name="alternativeCreditScore" value={formData.alternativeCreditScore} onChange={handleChange}
//           min={300} max={850}
//           className="w-full px-4 py-2 border rounded-md" />
//       </div>

//       {/* Credit Tier */}
//       <div>
//         <label className="block font-medium mb-1">Credit Tier</label>
//         <select name="creditTier" value={formData.creditTier} onChange={handleChange}
//           className="w-full px-4 py-2 border rounded-md">
//           {["starter", "bronze", "silver", "gold", "platinum"].map(tier => (
//             <option key={tier} value={tier}>{tier}</option>
//           ))}
//         </select>
//       </div>

//       {/* Business Info */}
//       <fieldset className="border rounded p-4">
//         <legend className="text-lg font-semibold">Business Information</legend>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input type="text" name="businessInfo.businessName" value={formData.businessInfo.businessName} onChange={handleChange}
//             placeholder="Business Name" className="border px-4 py-2 rounded" />

//           <select name="businessInfo.businessType" value={formData.businessInfo.businessType} onChange={handleChange}
//             className="border px-4 py-2 rounded">
//             {["micro", "small", "medium"].map(type => (
//               <option key={type} value={type}>{type}</option>
//             ))}
//           </select>

//           <input type="text" name="businessInfo.industry" value={formData.businessInfo.industry} onChange={handleChange}
//             placeholder="Industry" className="border px-4 py-2 rounded" />

//           <input type="number" name="businessInfo.yearEstablished" value={formData.businessInfo.yearEstablished} onChange={handleChange}
//             placeholder="Year Established" className="border px-4 py-2 rounded" />

//           <input type="number" name="businessInfo.monthlyRevenue" value={formData.businessInfo.monthlyRevenue} onChange={handleChange}
//             placeholder="Monthly Revenue" className="border px-4 py-2 rounded" />

//           <input type="number" name="businessInfo.employeeCount" value={formData.businessInfo.employeeCount} onChange={handleChange}
//             placeholder="Employee Count" className="border px-4 py-2 rounded" />

//           <div className="flex items-center gap-2">
//             <input type="checkbox" name="businessInfo.businessRegistration.hasRegistration" checked={formData.businessInfo.businessRegistration.hasRegistration} onChange={handleChange} />
//             <label>Has Business Registration</label>
//           </div>

//           <input type="text" name="businessInfo.businessRegistration.registrationNumber" value={formData.businessInfo.businessRegistration.registrationNumber} onChange={handleChange}
//             placeholder="Registration Number" className="border px-4 py-2 rounded" />

//           <input type="text" name="businessInfo.businessRegistration.registrationDocument" value={formData.businessInfo.businessRegistration.registrationDocument} onChange={handleChange}
//             placeholder="Document URL" className="border px-4 py-2 rounded" />
//         </div>
//       </fieldset>

//       {/* Income Stream */}
//       <fieldset className="border rounded p-4">
//         <legend className="text-lg font-semibold">Income Stream</legend>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input type="text" name="incomeStreams.0.source" value={formData.incomeStreams[0].source} onChange={handleChange}
//             placeholder="Source" className="border px-4 py-2 rounded" />
//           <input type="number" name="incomeStreams.0.amount" value={formData.incomeStreams[0].amount} onChange={handleChange}
//             placeholder="Amount" className="border px-4 py-2 rounded" />

//           <select name="incomeStreams.0.frequency" value={formData.incomeStreams[0].frequency} onChange={handleChange}
//             className="border px-4 py-2 rounded">
//             {["daily", "weekly", "monthly", "quarterly", "annually"].map(f => (
//               <option key={f} value={f}>{f}</option>
//             ))}
//           </select>

//           <select name="incomeStreams.0.stability" value={formData.incomeStreams[0].stability} onChange={handleChange}
//             className="border px-4 py-2 rounded">
//             {["stable", "variable", "seasonal"].map(s => (
//               <option key={s} value={s}>{s}</option>
//             ))}
//           </select>
//         </div>
//       </fieldset>

//       {/* Loan Details */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <input type="number" name="activeLoanCount" value={formData.activeLoanCount} onChange={handleChange}
//           placeholder="Active Loan Count" className="border px-4 py-2 rounded" />
//         <input type="number" name="completedLoanCount" value={formData.completedLoanCount} onChange={handleChange}
//           placeholder="Completed Loan Count" className="border px-4 py-2 rounded" />
//         <input type="number" name="totalAmountBorrowed" value={formData.totalAmountBorrowed} onChange={handleChange}
//           placeholder="Total Amount Borrowed" className="border px-4 py-2 rounded" />
//         <input type="number" name="onTimePaymentRate" value={formData.onTimePaymentRate} onChange={handleChange}
//           placeholder="On-Time Payment Rate (%)" className="border px-4 py-2 rounded" />
//       </div>

//       {/* Submit */}
//       <div className="text-center">
//         <button type="submit" className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// };

// export default BorrowerProfileForm;
