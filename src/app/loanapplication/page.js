// in this we will add the database to store the information of loan 
"use client"
import { useState } from 'react';

export default function LoanApplication() {
    const [page, setPage] = useState('form'); // 'form' or 'review'
    const [loanPurpose, setLoanPurpose] = useState('business');
    const [loanAmount, setLoanAmount] = useState(2000);
    const [repaymentPeriod, setRepaymentPeriod] = useState('6 months');
    const [termsAgreed, setTermsAgreed] = useState(false);

    const handleNextPage = () => {
        setPage('review');
    };

    const handlePrevPage = () => {
        setPage('form');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your server
        alert('Loan application submitted successfully!');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            

            {/* Main Content */}
            <div className="container mx-auto p-6">
                <h1 className="text-2xl font-medium text-blue-700 mb-6">Apply for a Loan</h1>

                {/* Form Page */}
                {page === 'form' && (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <form>
                            <h2 className="text-lg font-medium text-blue-700 mb-6">Step 1: Loan Details</h2>

                            <div className="mb-6">
                                <label className="block text-gray-700 mb-3">What is this loan for?</label>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="business"
                                            name="loanPurpose"
                                            checked={loanPurpose === 'business'}
                                            onChange={() => setLoanPurpose('business')}
                                            className="h-4 w-4 text-blue-600"
                                        />
                                        <label htmlFor="business" className="ml-2 text-gray-700">Business expansion</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="equipment"
                                            name="loanPurpose"
                                            checked={loanPurpose === 'equipment'}
                                            onChange={() => setLoanPurpose('equipment')}
                                            className="h-4 w-4 text-blue-600"
                                        />
                                        <label htmlFor="equipment" className="ml-2 text-gray-700">Equipment purchase</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="inventory"
                                            name="loanPurpose"
                                            checked={loanPurpose === 'inventory'}
                                            onChange={() => setLoanPurpose('inventory')}
                                            className="h-4 w-4 text-blue-600"
                                        />
                                        <label htmlFor="inventory" className="ml-2 text-gray-700">Inventory/supplies</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="emergency"
                                            name="loanPurpose"
                                            checked={loanPurpose === 'emergency'}
                                            onChange={() => setLoanPurpose('emergency')}
                                            className="h-4 w-4 text-blue-600"
                                        />
                                        <label htmlFor="emergency" className="ml-2 text-gray-700">Emergency/personal</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="other"
                                            name="loanPurpose"
                                            checked={loanPurpose === 'other'}
                                            onChange={() => setLoanPurpose('other')}
                                            className="h-4 w-4 text-blue-600"
                                        />
                                        <label htmlFor="other" className="ml-2 text-gray-700">Other:</label>
                                        {loanPurpose === 'other' && (
                                            <input
                                                type="text"
                                                className="ml-2 border border-gray-300 rounded p-1 text-sm"
                                                placeholder="Please specify"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6 max-w-lg">
                                <label className="block text-gray-700 mb-3">How much do you need?</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={`$ ${loanAmount}`}
                                        onChange={(e) => {
                                            const value = e.target.value.replace(/[^0-9]/g, '');
                                            setLoanAmount(value);
                                        }}
                                        className="border border-gray-300 rounded p-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="mb-6 max-w-lg">
                                <label className="block text-gray-700 mb-3">Preferred repayment period</label>
                                <select
                                    value={repaymentPeriod}
                                    onChange={(e) => setRepaymentPeriod(e.target.value)}
                                    className="border border-gray-300 rounded p-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                >
                                    <option value="3 months">3 months</option>
                                    <option value="6 months">6 months</option>
                                    <option value="12 months">12 months</option>
                                    <option value="24 months">24 months</option>
                                    <option value="36 months">36 months</option>
                                </select>
                            </div>

                            {/* Step 2: Business Information */}

                            <div>
                                <h2 className="text-lg font-medium text-blue-800 my-4">Step 2: Business Information</h2>

                                <div className="mb-6">
                                    <label className="block text-gray-700 mb-2">Business Name</label>
                                    <input
                                        type="text"
                                        className="border border-gray-300 rounded p-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 mb-2">Business Type</label>
                                    <select
                                        className="border border-gray-300 rounded p-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    >
                                        <option value="">Select business type</option>
                                        <option value="sole_proprietorship">Sole Proprietorship</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="llc">LLC</option>
                                        <option value="corporation">Corporation</option>
                                        <option value="nonprofit">Non-profit</option>
                                    </select>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 mb-2">Years in Business</label>
                                    <input
                                        type="number"
                                        className="border border-gray-300 rounded p-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                        min="0"
                                        step="0.5"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 mb-2">Annual Revenue</label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-700">$</span>
                                        <input
                                            type="number"
                                            className="border border-gray-300 rounded p-2 pl-6 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>
                            </div>


                            {/* Step 3: Review & Submit */}

                           

                            <div className="p-4 bg-blue-50 rounded border border-blue-100 mb-6 max-w-2xl">
                                <p className="text-blue-800">
                                    Based on your profile, your estimated interest rate would be <span className="font-semibold">8-12% annually</span>.
                                </p>
                            </div>

                            <div className="flex justify-end mt-8">
                                <button
                                    type="button"
                                    onClick={handleNextPage}
                                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                                >
                                    Next: Business Information
                                </button>
                            </div>
                        </form>
                    </div>
                )}





                {/* Review Page */}
                {page === 'review' && (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <form onSubmit={handleSubmit}>
                            <h2 className="text-lg font-medium text-blue-700 mb-6">Step 3: Review Your Application</h2>

                            <div className="bg-blue-50 p-4 rounded border border-blue-100 mb-6 max-w-3xl">
                                <h3 className="font-medium text-blue-700 mb-3">Loan Details</h3>
                                <div className="grid grid-cols-2 gap-y-2">
                                    <div className="text-gray-700">Purpose:</div>
                                    <div className="font-medium text-gray-900">
                                        {loanPurpose === 'business' ? 'Business expansion' :
                                            loanPurpose === 'equipment' ? 'Equipment purchase' :
                                                loanPurpose === 'inventory' ? 'Inventory/supplies' :
                                                    loanPurpose === 'emergency' ? 'Emergency/personal' : 'Other'}
                                    </div>

                                    <div className="text-gray-700">Amount:</div>
                                    <div className="font-medium text-gray-900">${loanAmount}</div>

                                    <div className="text-gray-700">Repayment period:</div>
                                    <div className="font-medium text-gray-900">{repaymentPeriod}</div>

                                    <div className="text-gray-700">Interest rate:</div>
                                    <div className="font-medium text-gray-900">8-12% annually</div>
                                </div>
                            </div>




                            <div className="mb-6 max-w-3xl">
                                <p className="text-gray-700 mb-4">
                                    By submitting this application, you certify that all information provided is correct
                                    and you agree to our terms and conditions.
                                </p>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="agree"
                                        checked={termsAgreed}
                                        onChange={(e) => setTermsAgreed(e.target.checked)}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                    />
                                    <label htmlFor="agree" className="ml-2 text-gray-700">
                                        I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                                    </label>
                                </div>
                            </div>

                            <div className="flex justify-between mt-8 max-w-3xl">
                                <button
                                    type="button"
                                    onClick={handlePrevPage}
                                    className="text-gray-700 px-4 py-2 rounded hover:bg-gray-100"
                                >
                                    Back
                                </button>

                                <button
                                    type="submit"
                                    disabled={!termsAgreed}
                                    className={`px-6 py-2 rounded ${termsAgreed ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                                >
                                    Submit Application
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}