// IN this we will put the review section which will move infinity

"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div
      className="h-[40rem] rounded-md flex flex-col text-2xl font-bold  antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
    {
      "title": "This platform gave me a chance to grow my small business without jumping through traditional bank hoops. It felt personal, not corporate.",
      "name": "Ravi Kumar",
      "designation": "Local Shop Owner"
    },
    {
      "title": "Finally, a lending system that understands trust is built through community, not paperwork.",
      "name": "Ayesha Patel",
      "designation": "Home Entrepreneur"
    },
    {
      "title": "As a first-time lender, I felt secure and informed every step of the way. It's simple, transparent, and impactful.",
      "name": "Sunil Desai",
      "designation": "Freelancer"
    },
    {
      "title": "I never thought getting a loan could be this straightforward. No hidden charges, no confusion—just real support.",
      "name": "Meena Joshi",
      "designation": "Vegetable Vendor"
    },
    {
      "title": "This platform bridged the gap between my dream and reality. I got funds for my tailoring shop when no bank would even respond.",
      "name": "Rukhsar Ansari",
      "designation": "Tailor & Business Owner"
    },
    {
      "title": "What stood out the most was the human touch. I felt seen, heard, and supported throughout the process.",
      "name": "Harish Naik",
      "designation": "Small-Scale Farmer"
    },
    {
      "title": "I lent a small amount just to try it out, and now I’m a regular. The transparency makes it easy to trust.",
      "name": "Anjali Verma",
      "designation": "Teacher & Micro-Investor"
    },
    {
      "title": "Our community needed a platform like this. It’s helping people rise without pushing them into debt traps.",
      "name": "Mahesh Bhandari",
      "designation": "Local Community Leader"
    },
    {
      "title": "I was skeptical at first, but the process was smooth and open. Now I’ve borrowed and repaid twice!",
      "name": "Nagma Shaikh",
      "designation": "Home-Based Baker"
    }
  ];
