"use client"
import React, { useState } from 'react';
import { Star, Upload, Store, HandCoins, ChartLine, Calendar, PlusCircle, GraduationCap, Users, Bell, UserCircle, LogOut, Edit, FileText, ExternalLink, ChartBar, Receipt, History, CreditCard, CalendarPlus, CheckCircle, XCircle } from 'lucide-react';
import Image from 'next/image';

const BorrowerDashboard = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [trustScore, setTrustScore] = useState(4);
  const [loanProgress, setLoanProgress] = useState(80);
  const [loanAmount, setLoanAmount] = useState(1600);
  const [totalLoan, setTotalLoan] = useState(2000);
  const [monthsLeft, setMonthsLeft] = useState(4);
  const [toast, setToast] = useState({ show: false, message: '', isSuccess: true });
 
  // Sample transactions data
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      type: 'Monthly Payment',
      description: 'Payment 6 of 10',
      amount: 200,
      status: 'Due Soon',
      dueDate: 'April 15, 2025',
      isPaid: false,
      receipt: null,
      isDebit: true
    },
    {
      id: 2,
      type: 'Monthly Payment',
      description: 'Payment 7 of 10',
      amount: 200,
      status: 'Upcoming',
      dueDate: 'May 15, 2025',
      isPaid: false,
      receipt: null,
      isDebit: true
    },
    {
      id: 3,
      type: 'Monthly Payment',
      description: 'Payment 5 of 10',
      amount: 200,
      status: 'Paid',
      dueDate: 'March 15, 2025',
      paidDate: 'March 14, 2025',
      isPaid: true,
      receipt: 'receipt-123.pdf',
      isDebit: true
    },
    {
      id: 4,
      type: 'Business Income',
      description: 'Catering Service',
      amount: 550,
      status: 'Received',
      dueDate: 'March 10, 2025',
      paidDate: 'March 10, 2025',
      isPaid: true,
      receipt: 'invoice-550.pdf',
      isDebit: false
    }
  ]);

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfileImage(URL.createObjectURL(file));
      showToast('Profile image updated successfully!', true);
    }
  };

  const makePayment = (transactionId) => {
    showToast('Processing your payment...', true);
   
    setTimeout(() => {
      const updatedTransactions = transactions.map(transaction => {
        if (transaction.id === transactionId) {
          return {
            ...transaction,
            status: 'Paid',
            isPaid: true,
            paidDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
          };
        }
        return transaction;
      });
     
      setTransactions(updatedTransactions);
     
      // Update loan progress
      const newLoanAmount = loanAmount + 200;
      setLoanAmount(newLoanAmount);
      const newProgress = Math.round((newLoanAmount / totalLoan) * 100);
      setLoanProgress(newProgress);
      setMonthsLeft(monthsLeft - 1);
     
      showToast('Payment of $200 processed successfully!', true);
    }, 2000);
  };

  const showToast = (message, isSuccess = true) => {
    setToast({ show: true, message, isSuccess });
   
    setTimeout(() => {
      setToast({ show: false, message: '', isSuccess: true });
    }, 3000);
  };

  const uploadReceipt = (transactionId) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*,application/pdf';
    input.onchange = (e) => {
      if (e.target.files && e.target.files[0]) {
        const updatedTransactions = transactions.map(transaction => {
          if (transaction.id === transactionId) {
            return {
              ...transaction,
              receipt: e.target.files[0].name
            };
          }
          return transaction;
        });
       
        setTransactions(updatedTransactions);
        showToast('Receipt uploaded successfully!', true);
      }
    };
    input.click();
  };

  const addTransaction = () => {
    showToast('Transaction form opened. Please fill in the details.', true);
    // In a real application, this would open a form to add new transactions
  };

  return (
    <div className="bg-[white] text-white p-5 min-h-screen flex justify-center items-center text-sm">
      <div className=" w-full rounded-xl relative overflow-hidden bg-[#2c67f2] shadow-xl p-6">
        {/* Gradient border at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c5dfa] to-[#3498db]"></div>
       
        {/* Header */}
        
       
        {/* Business Profile */}
        <div className="flex items-start mb-8 bg-opacity-5 bg-[white] text-black rounded-lg p-5 border border-[#252945] relative overflow-hidden transition-all duration-300 hover:shadow-lg">
          {/* Border bottom gradient */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#7c5dfa] to-[#3498db]"></div>
         
          {/* Profile Image Section */}
          <div className="relative mr-5">
            {profileImage ? (
              <div className="w-20 h-20 rounded-lg overflow-hidden">
                <Image src={profileImage} alt="Business Logo" className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="w-20 h-20 bg-[#7c5dfa] rounded-lg flex items-center justify-center text-3xl text-white">
                <Store className="w-10 h-10" />
              </div>
            )}
            <div className="absolute -bottom-1 -right-1 bg-[#1e2139] rounded-full p-1 cursor-pointer hover:bg-[#252945] transition-colors"
                 onClick={() => document.getElementById('profileImageInput').click()}>
              <Upload className="w-4 h-4 text-[#7c5dfa]" />
              <input
                id="profileImageInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
          </div>
         
          <div className="flex-grow ">
            <h1 className="text-xl font-semibold mb-1">Maria&apos;s Bakery</h1>
            <p className="text-[#94a3b8] mb-2">Food & Beverage · Local Business</p>
            
           
            {/* Trust Score */}
            <div className="flex items-center mb-3">
              <span className="mr-2 font-medium">Trust Score:</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${star <= trustScore ? "text-[#ff8f00] fill-[#ff8f00]" : "text-[#252945]"}`}
                  />
                ))}
              </div>
            </div>
           
            <div className="flex sm:flex-row flex-col">
              <a href="#" className="flex items-center  hover:text-[white] hover:bg-opacity-10 hover:bg-[#2c67f2] transition-all duration-200 font-semibold mr-4 px-4 py-2 rounded-lg">
                <Edit className="w-4 h-4 mr-1" /> Edit Profile
              </a>
              <a href="#" className="flex items-center text-[white] text-lg hover:bg-opacity-10 bg-[#2c67f2] transition-all duration-200 font-semibold px-4 py-2 rounded-lg">
                <FileText className="w-4 h-4 mr-1" /> Apply For Loan
              </a>
            </div>
            



          </div>
        </div>
       
        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Current Loan Status Card */}
          <div className="rounded-lg bg-[#141625] p-5 border border-[#252945] transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] relative overflow-hidden">
            {/* Bottom border gradient */}
            <div className="absolute bottom-0 left-0 w-8 h-1 bg-gradient-to-r from-[#7c5dfa] to-[#3498db] transition-all duration-300 group-hover:w-full"></div>
           
            <h2 className="text-base mb-5 text-[#94a3b8] font-medium flex items-center">
              <HandCoins className="w-4 h-4 mr-2 text-[#7c5dfa]" /> Current Loan Status
            </h2>
            <div>
              <p className="text-2xl font-bold mb-2">${loanAmount} / ${totalLoan}</p>
              <p className="text-[#94a3b8] text-sm mb-2">{loanProgress}% Repaid · {monthsLeft} Months Left</p>
              <div className="w-full h-1 bg-[#252945] rounded overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#7c5dfa] to-[#3498db] rounded"
                  style={{ width: `${loanProgress}%` }}
                ></div>
              </div>
            </div>
            <div className="mt-4">
              <a href="#" className="text-[#7c5dfa] hover:text-[#9277ff] transition-colors cursor-pointer font-semibold flex items-center">
                <ExternalLink className="w-4 h-4 mr-1" /> View Payment Schedule
              </a>
            </div>
          </div>
         
          {/* Business Growth Card */}
          <div className="rounded-lg bg-[#141625] p-5 border border-[#252945] transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] relative overflow-hidden">
            {/* Bottom border gradient */}
            <div className="absolute bottom-0 left-0 w-8 h-1 bg-gradient-to-r from-[#7c5dfa] to-[#3498db] transition-all duration-300 group-hover:w-full"></div>
           
            <h2 className="text-base mb-5 text-[#94a3b8] font-medium flex items-center">
              <ChartLine className="w-4 h-4 mr-2 text-[#7c5dfa]" /> Business Growth
            </h2>
            <div>
              <p className="text-2xl font-bold mb-2">+12%</p>
              <p className="text-[#94a3b8] text-sm">Revenue Increase Since Funding</p>
            </div>
            <div className="mt-4">
              <a href="#" className="text-[#7c5dfa] hover:text-[#9277ff] transition-colors cursor-pointer font-semibold flex items-center">
                <ChartBar className="w-4 h-4 mr-1" /> View Full Report
              </a>
            </div>
          </div>
        </div>
       
        {/* Transaction Tracking */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-[#7c5dfa]" /> Transaction Tracking
            </h2>
            <button
              onClick={addTransaction}
              className="text-[#7c5dfa] hover:text-[#9277ff] transition-colors font-semibold flex items-center text-sm"
            >
              <PlusCircle className="w-4 h-4 mr-1" /> Add Transaction
            </button>
          </div>
         
          <div className="rounded-lg bg-[#141625] p-1 border border-[#252945]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-[#94a3b8] text-xs">
                    <th className="p-4">TRANSACTION</th>
                    <th className="p-4">AMOUNT</th>
                    <th className="p-4">STATUS</th>
                    <th className="p-4">DATE</th>
                    <th className="p-4">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr
                      key={transaction.id}
                      className="hover:bg-opacity-5 hover:bg-[#7c5dfa] transition-colors"
                    >
                      <td className="p-4">
                        <div className="flex flex-col">
                          <span className="font-semibold mb-1">{transaction.type}</span>
                          <span className="text-[#94a3b8] text-xs">{transaction.description}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`font-semibold text-base ${transaction.isDebit ? '' : 'text-[#42d27a]'}`}>
                          {transaction.isDebit ? '-' : '+'} ${transaction.amount}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold
                          ${transaction.status === 'Paid' || transaction.status === 'Received'
                            ? 'bg-opacity-15 bg-[#42d27a] text-[#42d27a]'
                            : transaction.status === 'Due Soon'
                              ? 'bg-opacity-15 bg-[#ff8f00] text-[#ff8f00]'
                              : transaction.status === 'Late'
                                ? 'bg-opacity-15 bg-[#ec5757] text-[#ec5757]'
                                : 'bg-opacity-15 bg-[#3498db] text-[#3498db]'
                          }`}
                        >
                          {transaction.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-col">
                          <span className="text-[#94a3b8] text-xs">
                            {transaction.isPaid ? 'Due Date:' : 'Due:'} {transaction.dueDate}
                          </span>
                          {transaction.isPaid && (
                            <span className="text-[#94a3b8] text-xs">
                              Paid: {transaction.paidDate}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        {transaction.isDebit && !transaction.isPaid ? (
                          <button
                            onClick={() => makePayment(transaction.id)}
                            className="flex items-center text-[#94a3b8] hover:text-[#7c5dfa] hover:bg-opacity-10 hover:bg-[#7c5dfa] transition-all duration-200 font-semibold px-3 py-1 rounded-lg text-sm"
                          >
                            <CreditCard className="w-4 h-4 mr-1" /> Pay Now
                          </button>
                        ) : transaction.receipt ? (
                          <div className="flex">
                            <a href="#" className="flex items-center text-[#7c5dfa] hover:text-[#9277ff] transition-colors mr-3 text-sm">
                              <Receipt className="w-4 h-4 mr-1" /> View Receipt
                            </a>
                          </div>
                        ) : transaction.isPaid ? (
                          <button
                            onClick={() => uploadReceipt(transaction.id)}
                            className="flex items-center text-[#94a3b8] hover:text-[#7c5dfa] hover:bg-opacity-10 hover:bg-[#7c5dfa] transition-all duration-200 font-semibold px-3 py-1 rounded-lg text-sm"
                          >
                            <Upload className="w-4 h-4 mr-1" /> Upload Receipt
                          </button>
                        ) : (
                          <span className="text-[#94a3b8] text-sm">
                            {Math.floor(Math.random() * 30) + 1} days left
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 text-right">
              <a href="#" className="text-[#7c5dfa] hover:text-[#9277ff] transition-colors cursor-pointer font-semibold flex items-center inline-flex">
                <History className="w-4 h-4 mr-1" /> View Transaction History
              </a>
            </div>
          </div>
        </div>
       
        {/* Apply for Funding Button */}
        <button
        onClick={addTransaction}
          className="w-full py-4 bg-[#7c5dfa] hover:bg-[#9277ff] border-none rounded-lg text-white cursor-pointer font-semibold text-center mb-8 transition-all duration-200 hover:translate-y-[-2px] hover:shadow-lg text-base"
        >
          <PlusCircle className="w-5 h-5 mr-2 inline" /> Add TRANSACTION
        </button>
       
        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Business Training Card */}
          <div className="rounded-lg bg-[#141625] p-5 border border-[#252945] flex flex-col justify-between h-40 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] relative overflow-hidden">
            {/* Bottom border gradient */}
            <div className="absolute bottom-0 left-0 w-8 h-1 bg-gradient-to-r from-[#7c5dfa] to-[#3498db] transition-all duration-300 group-hover:w-full"></div>
           
            <h2 className="text-base text-[#94a3b8] font-medium flex items-center">
              <GraduationCap className="w-4 h-4 mr-2 text-[#7c5dfa]" /> Business Training
            </h2>
            <p>Free financial literacy workshop this month</p>
            <div>
              <a href="#" className="text-[#7c5dfa] hover:text-[#9277ff] transition-colors cursor-pointer font-semibold flex items-center">
                <CalendarPlus className="w-4 h-4 mr-1" /> Register Now
              </a>
            </div>
          </div>
         
          {/* Community Marketplace Card */}
          <div className="rounded-lg bg-[#141625] p-5 border border-[#252945] flex flex-col justify-between h-40 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] relative overflow-hidden">
            {/* Bottom border gradient */}
            <div className="absolute bottom-0 left-0 w-8 h-1 bg-gradient-to-r from-[#7c5dfa] to-[#3498db] transition-all duration-300 group-hover:w-full"></div>
           
            <h2 className="text-base text-[#94a3b8] font-medium flex items-center">
              <Users className="w-4 h-4 mr-2 text-[#7c5dfa]" /> Community Marketplace
            </h2>
            <p>Connect with other local businesses</p>
            <div>
              <a href="#" className="text-[#7c5dfa] hover:text-[#9277ff] transition-colors cursor-pointer font-semibold flex items-center">
                <ExternalLink className="w-4 h-4 mr-1" /> Explore
              </a>
            </div>
          </div>
        </div>
       
        {/* Toast Notification */}
        {toast.show && (
          <div className={`fixed bottom-5 right-5 bg-[#1e2139] text-white p-4 rounded-lg shadow-lg flex items-center transition-all transform duration-300 border-l-4 ${toast.isSuccess ? 'border-[#42d27a]' : 'border-[#ff8f00]'}`}>
            {toast.isSuccess ? (
              <CheckCircle className="w-5 h-5 mr-3 text-[#42d27a]" />
            ) : (
              <XCircle className="w-5 h-5 mr-3 text-[#ff8f00]" />
            )}
            <span>{toast.message}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BorrowerDashboard;
