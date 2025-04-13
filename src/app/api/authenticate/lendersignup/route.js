// import { NextResponse } from "next/server";
// import User from "@/models/userModel";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import { connect } from "@/dbconfig/dbconfig"; // Ensure DB connection

// export async function POST(req) {
//     await connect(); // Ensure MongoDB connection

//     try {
//         const { email, password } = await req.json();

//         // Email validation
//         const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         if (!emailPattern.test(email)) {
//             return NextResponse.json({ success: false, message: "Invalid email format" }, { status: 400 });
//         }

//         // Password validation
//         const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//         if (!passwordPattern.test(password)) {
//             return NextResponse.json({ 
//                 success: false, 
//                 message: "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character." 
//             }, { status: 400 });
//         }

//         // Check if user exists
//         const existingUser = await User.findOne({ email });
//         if (!existingUser) {
//             return NextResponse.json({ success: false, message: "User does not exist with this email" }, { status: 400 });
//         }

//         // Check if user is verified
//         if (!existingUser.isVarified) {
//             return NextResponse.json({ success: false, message: "Kindly verify your account first" }, { status: 402 });
//         }

//         // Validate password
//         const isPasswordValid = await bcrypt.compare(password, existingUser.password);
//         if (!isPasswordValid) {
//             return NextResponse.json({ success: false, message: "Invalid password" }, { status: 400 });
//         }

//         // Generate JWT Token
//         const SECRET_KEY = process.env.SECRET_KEY;
//         const token = jwt.sign({ id: existingUser._id, email }, SECRET_KEY, { expiresIn: "1h" });

//         // ✅ Set token in HTTP-only cookie
//         const response = NextResponse.json({
//             success: true,
//             message: "Sign In Successful",
//         });

//         response.cookies.set("token", token, {
//             httpOnly: true, // 🔒 Prevent access via JavaScript
//             secure: process.env.NODE_ENV === "production", // 🔒 Secure in production (HTTPS)
//             sameSite: "Strict", // 🔒 CSRF protection
//             maxAge: 60 * 60, // ⏳ Expires in 1 hour
//         });

//         return response;

//     } catch (error) {
//         console.error("Authentication failed:", error);
//         return NextResponse.json({ success: false, message: "Authentication failed" }, { status: 401 });
//     }
// }