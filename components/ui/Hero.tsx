import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{ backgroundImage: "url('/images/panorama-3106487_1920.jpg')" }}
      ></div>

      <div className="relative z-10 w-full h-full flex">
        {/* Left side - Button with white box */}
        <div className="w-1/2 flex items-center justify-center px-4">
          {/* White box around the button */}
          <div className="w-80 h-[300px] bg-white rounded-lg flex items-center justify-center">
            <Link
              href="/about"
              className="px-4 py-2 bg-blue-700 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition"
            >
              Apply Today
            </Link>
          </div>
        </div>

        {/* Right side - Text */}
        <div className="w-1/2 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Take over
          </h1>
          <p className="text-lg mb-8 max-w-lg mx-auto">
            Start today and take control of your company's growth
          </p>
        </div>
      </div>

      {/* ColoredTextBlock Component */}
    </section>
  );
};

export default HeroSection;