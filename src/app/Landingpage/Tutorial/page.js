// tutorial page
"use client"
import React from "react";
import Image from "next/image";

const Tutorials = () => {
  return (
    <div className="w-[80%] min-h-screen mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-4">
        Welcome to Our Tutorial Hub
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Watch step-by-step guides to learn how to use the platform.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tutorial Card 1 */}
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
              alt="YouTube"
              className="h-6 w-auto"
            />
            <h3 className="text-lg font-semibold">How to Use the Platform</h3>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="rounded-lg w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID_1"
              allowFullScreen
            />
          </div>
        </div>

        {/* Tutorial Card 2 */}
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
              alt="YouTube"
              className="h-6 w-auto"
            />
            <h3 className="text-lg font-semibold">How to Apply for a Loan</h3>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="rounded-lg w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID_2"
              allowFullScreen
            />
          </div>
        </div>

        {/* Tutorial Card 3 */}
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
              alt="YouTube"
              className="h-6 w-auto"
            />
            <h3 className="text-lg font-semibold">How to Repay a Loan</h3>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="rounded-lg w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID_3"
              allowFullScreen
            />
          </div>
        </div>

        {/* Tutorial Card 4 */}
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
              alt="YouTube"
              className="h-6 w-auto"
            />
            <h3 className="text-lg font-semibold">How to Lend Money Safely</h3>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="rounded-lg w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID_4"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;