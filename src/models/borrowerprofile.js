// in this we will store the informaiton of the borrower this is the schema profile 
import mongoose from "mongoose";

const borrowerProfileSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true,
    unique: true 
  },
  alternativeCreditScore: { 
    type: Number,
    min: 300,
    max: 850
  },
  creditTier: { 
    type: String, 
    enum: ["starter", "bronze", "silver", "gold", "platinum"],
    default: "starter" 
  },
  businessInfo: {
    businessName: { type: String },
    businessType: { 
      type: String, 
      enum: ["micro", "small", "medium"] 
    },
    industry: { type: String },
    yearEstablished: { type: Number },
    monthlyRevenue: { type: Number },
    employeeCount: { type: Number },
    businessRegistration: {
      hasRegistration: { type: Boolean, default: false },
      registrationNumber: { type: String },
      registrationDocument: { type: String } // URL to document
    }
  },
  financialHistory: {
    utilityPayments: [{
      type: { type: String },
      provider: { type: String },
      accountNumber: { type: String },
      paymentHistory: [{
        date: { type: Date },
        amount: { type: Number },
        onTime: { type: Boolean }
      }]
    }],
    mobileMoneyTransactions: [{
      provider: { type: String },
      accountNumber: { type: String },
      transactionVolume: { type: Number }, // Monthly average
      transactionFrequency: { type: Number } // Monthly average
    }]
  },
  incomeStreams: [{
    source: { type: String },
    amount: { type: Number },
    frequency: { 
      type: String, 
      enum: ["daily", "weekly", "monthly", "quarterly", "annually"] 
    },
    stability: { 
      type: String, 
      enum: ["stable", "variable", "seasonal"] 
    }
  }],
  communityVouching: [{
    voucherUserId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User' 
    },
    relationship: { type: String },
    trustScore: { 
      type: Number,
      min: 1,
      max: 10 
    },
    dateVouched: { type: Date },
    isActive: { type: Boolean, default: true }
  }],
  creditLimit: {
    current: { type: Number, default: 0 },
    nextTier: { type: Number },
    upgradeRequirements: [{ type: String }]
  },
  riskProfile: {
    overallRisk: { 
      type: String, 
      enum: ["low", "medium", "high"] 
    },
    incomeStability: { 
      type: Number,
      min: 1,
      max: 10 
    },
    businessSustainability: { 
      type: Number,
      min: 1,
      max: 10 
    },
    communityTrust: { 
      type: Number,
      min: 1,
      max: 10 
    }
  },
  educationModulesCompleted: [{
    moduleId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'EducationModule' 
    },
    completionDate: { type: Date },
    score: { type: Number }
  }],
  activeLoanCount: { 
    type: Number, 
    default: 0 
  },
  completedLoanCount: { 
    type: Number, 
    default: 0 
  },
  totalAmountBorrowed: { 
    type: Number, 
    default: 0 
  },
  onTimePaymentRate: { 
    type: Number, 
    default: 100 
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

// Index for faster lookup
borrowerProfileSchema.index({ userId: 1 });
borrowerProfileSchema.index({ alternativeCreditScore: 1 });
borrowerProfileSchema.index({ 'businessInfo.industry': 1 });

const BorrowerProfile = mongoose.models.BorrowerProfile || mongoose.model("BorrowerProfile", borrowerProfileSchema);
export default BorrowerProfile;