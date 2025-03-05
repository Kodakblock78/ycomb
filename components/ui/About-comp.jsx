import React from "react";
import { Inter, Roboto_Mono } from "next/font/google";

// Font imports
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const AboutPage = () => {
  return (
    <div className={`${inter.variable} bg-gray-900 text-white`}>
      {/* Page Heading */}
      <header
        className="w-full h-48 flex justify-center items-center"
        style={{ background: 'linear-gradient(to bottom, rgb(39, 39, 42) 0%, rgb(47, 13, 99) 100%)' }}
      >
        <h1 className="text-4xl font-bold">About Us</h1>
      </header>

      {/* Main Content */}
      <main className="pt-16 pb-10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-500 mb-4">Who We Are</h2>
          <p className="text-lg mb-4">
            Welcome to our About page! We are a team of passionate individuals dedicated to making a positive
            impact in the world. Our goal is to create innovative solutions and provide valuable resources that
            empower individuals and organizations alike.
          </p>
          <p className="text-lg mb-4">
            Whether it's through technology, education, or community engagement, we aim to inspire and drive
            progress in everything we do. Join us on our journey to bring meaningful change to the world.
          </p>

          <h2 className="text-3xl font-bold text-gray-500 mb-4">Our Vision</h2>
          <p className="text-lg">
            We envision a future where creativity, technology, and collaboration come together to solve some of
            the world's most pressing challenges. Through innovation and relentless dedication, we hope to
            create a lasting impact that will benefit generations to come.zzzzzz
          </p>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;