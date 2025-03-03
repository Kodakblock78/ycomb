import React from 'react';
import Link from "next/link";

const FullScreenSection = () => {
  return (
    <section
      className="w-screen h-[500px] flex justify-center items-start text-center p-20"
      style={{
        background: 'linear-gradient(to bottom, rgb(47, 13, 99) 5%, #27272a 20%)', 
      }}
    >
      <div className="flex flex-wrap md:flex-nowrap justify-between items-start w-full max-w-4xl gap-10">
        {/* Left Box */}
        <div className="w-80 h-80 bg-white rounded-lg flex flex-col items-center justify-center relative">
          <Link
            href="/about"
            className="absolute bottom-4 px-10 py-3 bg-blue-700 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Go to the investors page
          </Link>
        </div>

        {/* Right Box - Inverted */}
        <div className="w-80 h-80 bg-white rounded-lg flex flex-col-reverse items-center justify-center relative">
          <Link
            href="/about"
            className="absolute top-4 px-10 py-3 bg-red-700 text-white text-lg font-semibold rounded-lg hover:bg-red-600 transition"
          >
            Join as a startup
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FullScreenSection;
