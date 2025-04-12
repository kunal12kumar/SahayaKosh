// In this we will store the information 
import mongoose from "mongoose";

const borrowerPersonalSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true,
    unique: true 
  },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true }
  },
  email: { 
    type: String, 
    required: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  mobile: {
    primary: { 
      type: String, 
      required: true,
      match: [/^[0-9]{10,15}$/, 'Please fill a valid mobile number']
    },
    secondary: { 
      type: String,
      match: [/^[0-9]{10,15}$/, 'Please fill a valid mobile number']
    }
  },
  dob: { 
    type: Date, 
    required: true,
    validate: {
      validator: function(value) {
        // Validate that dob is at least 18 years ago
        return value <= new Date(new Date().setFullYear(new Date().getFullYear() - 18));
      },
      message: 'Borrower must be at least 18 years old'
    }
  },
  address: {
    current: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true, default: "India" }
    },
    permanent: {
      sameAsCurrent: { type: Boolean, default: true },
      street: { type: String },
      city: { type: String },
      state: { type: String },
      postalCode: { type: String },
      country: { type: String }
    }
  },
  employmentStatus: {
    type: String,
    required: true,
    enum: [
      "employed", 
      "self-employed", 
      "unemployed", 
      "student", 
      "retired", 
      "freelancer", 
      "business-owner"
    ]
  },
  employmentDetails: {
    companyName: { type: String },
    jobTitle: { type: String },
    employmentType: { 
      type: String,
      enum: ["full-time", "part-time", "contract", "temporary", "internship"]
    },
    employmentDuration: { type: Number } // in months
  },
  annualIncome: {
    amount: { type: Number, required: true },
    currency: { type: String, default: "INR" },
    incomeProof: { type: String } // URL to document
  },
  documents: {
    photo: { type: String }, // URL to photo
    aadhaar: {
      number: { type: String },
      front: { type: String }, // URL to document
      back: { type: String } // URL to document
    },
    pan: {
      number: { type: String },
      document: { type: String } // URL to document
    },
    additionalDocuments: [{
      type: { type: String }, // e.g., "voter-id", "passport", "driving-license"
      number: { type: String },
      document: { type: String } // URL to document
    }]
  },
  verificationStatus: {
    email: { type: Boolean, default: false },
    mobile: { type: Boolean, default: false },
    aadhaar: { type: Boolean, default: false },
    pan: { type: Boolean, default: false },
    overall: { type: Boolean, default: false }
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

// Indexes for faster lookup
borrowerPersonalSchema.index({ userId: 1 });
borrowerPersonalSchema.index({ email: 1 });
borrowerPersonalSchema.index({ mobile: 1 });
borrowerPersonalSchema.index({ 'address.current.city': 1 });
borrowerPersonalSchema.index({ 'address.current.state': 1 });
borrowerPersonalSchema.index({ employmentStatus: 1 });
borrowerPersonalSchema.index({ 'documents.aadhaar.number': 1 });
borrowerPersonalSchema.index({ 'documents.pan.number': 1 });

const BorrowerPersonal = mongoose.models.BorrowerPersonal || mongoose.model("BorrowerPersonal", borrowerPersonalSchema);
export default BorrowerPersonal;