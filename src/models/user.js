// this will contain the sign up information for the borowwer and lender withe the option to select wheter he is borowwer or lender

import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  fullName: { 
    type: String, 
    required: true, 
    trim: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    trim: true, 
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"] 
  },
  phoneNumber: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  userType: { 
    type: String, 
    required: true, 
    enum: ["borrower", "lender", "admin"],
    default: "borrower" 
  },
  dateOfBirth: { 
    type: Date 
  },
  gender: { 
    type: String, 
    enum: ["male", "female", "other", "prefer_not_to_say"] 
  },
  location: {
    country: { type: String },
    region: { type: String },
    city: { type: String },
    address: { type: String },
    coordinates: {
      type: [Number], // [longitude, latitude]
      index: '2dsphere'
    }
  },
  languagePreference: { 
    type: String, 
    default: "English" 
  },
  communicationPreference: { 
    type: String, 
    enum: ["email", "sms", "whatsapp", "all"],
    default: "all" 
  },
  deviceInfo: {
    deviceType: { type: String },
    hasSmartphone: { type: Boolean },
    preferredChannel: { type: String }
  },
  idVerification: {
    idType: { type: String },
    idNumber: { type: String },
    verificationStatus: { 
      type: String, 
      enum: ["pending", "verified", "rejected"],
      default: "pending" 
    },
    verificationDate: { type: Date }
  },
  profileCompletionStatus: { 
    type: String, 
    enum: ["initial", "personal_complete", "verification_submitted", "basic_profile_complete", "financial_info_complete", "complete"],
    default: "initial" 
  },
  verificationCode: { 
    type: String 
  },
  verificationCodeExpiry: { 
    type: Date 
  },
  isVerified: { 
    type: Boolean, 
    default: false 
  },
  isActive: { 
    type: Boolean, 
    default: true 
  },
  resetPasswordToken: { 
    type: String 
  },
  resetPasswordExpires: { 
    type: Date 
  },
  lastLogin: { 
    type: Date 
  },
  activeSessions: [{
    deviceId: { type: String },
    deviceName: { type: String },
    lastActive: { type: Date },
    ipAddress: { type: String }
  }],
  referredBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  },
  referrals: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  }],
  kycStatus: { 
    type: String, 
    enum: ["not_started", "pending", "approved", "rejected"],
    default: "not_started" 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
}, { timestamps: true });

// Pre-save hook to hash password
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;