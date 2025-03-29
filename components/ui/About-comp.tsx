import React from "react";
import { Inter } from "next/font/google";

// Font imports
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const AboutPage = () => {
  return (
    <div className={`${inter.variable} bg-white text-white`} style={{ backgroundColor: 'rgb(39,39,42)' }}>
      {/* Page Heading */}
      <header
        className="w-full h-48 flex justify-center items-center"
        style={{
          background: 'linear-gradient(to bottom, rgb(88, 88, 99) 100%), rgb(39, 39, 42) 0% '
        }}
      >
        <h1 className="text-4xl font-bold underline decoration-indigo-50 decoration-2">About Us</h1>
      </header>

      {/* Main Content - Split Left (Text) and Right (Image) */}
      <main className="pt-16 pb-10 px-6 flex flex-col md:flex-row items-center max-w-7xl mx-auto">
        {/* Left Side - Text Box */}
        <div className="md:w-1/2 bg-stone-800 p-6 rounded-lg shadow-lg border border-gray-600 text-left">
          <h2 className="text-3xl font-bold text-indigo-100 mb-4">Who We Are</h2>
          <p className="text-lg mb-4">
            Welcome to our About page! We are a team of passionate individuals dedicated to making a positive
            impact in the world. Our goal is to create innovative solutions and provide valuable resources that
            empower individuals and organizations alike.
          </p>
          <p className="text-lg mb-4">
            Whether it's through technology, education, or community engagement, we aim to inspire and drive
            progress in everything we do. Join us on our journey to bring meaningful change to the world.
          </p>
          <h2 className="text-3xl font-bold text-indigo-100 mb-4">Our Vision</h2>
          <p className="text-lg">
            We envision a future where creativity, technology, and collaboration come together to solve some of
            the world's most pressing challenges. Through innovation and relentless dedication, we hope to
            create a lasting impact that will benefit generations to come.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="w-64 h-64 bg-stone-700 rounded-lg flex items-center justify-center overflow-hidden">
          <img 
  src="/images/ezekielprofiel.jpeg" 
  alt="About Us Image" 
  className="w-full h-full object-cover rounded-lg" 
/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
