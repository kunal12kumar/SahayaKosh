// in this borrower

// pages/api/auth/signup.js (for Pages Router)
// Or: app/api/auth/signup/route.js (for App Router)

import connectDB from '@/lib/mongodb';
import Borrowwer from '@/models/Borrowwer';

// For App Router
export async function POST(request) {
  try {
    // Connect to the database
    await connectDB();
    
    // Extract user data from request body
    const { name, email, password } = await request.json();
    
    // Validate input
    if (!name || !email || !password) {
      return Response.json(
        { success: false, message: 'Please provide all required fields' },
        { status: 400 }
      );
    }
    
    // Check if user already exists
    const existingUser = await Borrowwer.findOne({ email });
    if (existingUser) {
      return Response.json(
        { success: false, message: 'Email already registered' },
        { status: 409 }
      );
    }
    
    // Create new user
    const user = await Borrowwer.create({
      name,
      email,
      password,
    });
    
    // Remove password from response
    const userData = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt
    };

    return Response.json(
      { success: true, message: 'User registered successfully', user: userData },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return Response.json(
      { success: false, message: 'Server error, please try again later' },
      { status: 500 }
    );
  }
}

