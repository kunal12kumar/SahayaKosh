import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  userType: {
    type: String,
    required: true,
    enum: ['borrower', 'lender']
  },
  accountType: {
    type: String,
    required: true,
    enum: ['individual', 'business']
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isVerified: {
    email: {
      type: Boolean,
      default: false
    },
    identity: {
      type: Boolean,
      default: false
    }
  },
  verificationCode: {
    type: String,
    default: null
  },
  registrationStage: {
    type: String,
    enum: ['basic', 'verification', 'profile', 'complete'],
    default: 'basic'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { discriminatorKey: 'accountType' });

// Password hashing middleware
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Match password method
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Verification code generator
userSchema.methods.generateVerificationCode = function() {
  const code = Math.floor(1000 + Math.random() * 9000).toString();
  this.verificationCode = code;
  return code;
};

// Avoid re-declaring model during hot-reloading in Next.js
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
