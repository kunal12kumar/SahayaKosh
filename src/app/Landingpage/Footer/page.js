"use client"
import React from "react";
import { 
  FaHandHoldingUsd, 
  FaBusinessTime, 
  FaUserShield, 
  FaGraduationCap,
  FaInfoCircle, 
  FaQuestionCircle, 
  FaShieldAlt, 
  FaEnvelope,
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-200 py-16 px-5 font-inter">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">
        
        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-2xl text-blue-400 font-bold flex items-center gap-2">
            <span className="bg-blue-500/20 p-2 rounded-lg">
              <FaHandHoldingUsd className="text-blue-400" />
            </span>
            TrustLend
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Empowering underbanked individuals and MSMEs through transparent, 
            community-driven peer-to-peer lending solutions.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h4 className="text-yellow-400 text-lg font-semibold flex items-center gap-2">
            <FaBusinessTime />
            Services
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
                <FaHandHoldingUsd className="text-sm" />
                Micro Loans
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
                <FaBusinessTime className="text-sm" />
                MSME Funding
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
                <FaUserShield className="text-sm" />
                Trust Scores
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
                <FaGraduationCap className="text-sm" />
                Financial Education
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-yellow-400 text-lg font-semibold flex items-center gap-2">
            <FaInfoCircle />
            Quick Links
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
                <FaQuestionCircle className="text-sm" />
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
                <FaShieldAlt className="text-sm" />
                Terms & Privacy
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
                <HiOutlineMail className="text-sm" />
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h4 className="text-yellow-400 text-lg font-semibold flex items-center gap-2">
            <FaEnvelope />
            Newsletter
          </h4>
          <p className="text-slate-300">
            Get financial tips and new opportunities straight to your inbox.
          </p>
          <form className="space-y-3">
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                required 
                className="w-full px-4 py-3 pl-10 rounded-lg bg-slate-700/50 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" 
              />
              <HiOutlineMail className="absolute left-3 top-3.5 text-slate-400" />
            </div>
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-blue-500/20"
            >
              Subscribe
            </button>
          </form>
          
          {/* Social Media */}
          <div className="pt-2">
            <h5 className="text-slate-400 mb-3">Follow us</h5>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-slate-300 hover:text-blue-400 transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" aria-label="Twitter" className="text-slate-300 hover:text-sky-400 transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" aria-label="Instagram" className="text-slate-300 hover:text-pink-500 transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-slate-300 hover:text-blue-500 transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-2 pt-2 border-t border-slate-700/50 text-slate-400">
        <p>© {new Date().getFullYear()} TrustLend. All rights reserved.</p>
        <p className="mt-1 text-xs">Empowering communities through inclusive finance</p>
      </div>
    </footer>
  );
}