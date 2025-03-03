import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

// Font imports
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Navbar = () => {
  const navItems = ["Home", "About", "Companies", "Startup Jobs", "Find a Co-founder", "Library"];

  return (
    <nav className="fixed inset-x-0 top-0 p-4 bg-white bg-opacity-10 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <span>Logo</span>
        </div>
        <ul className="flex space-x-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>
                <span className="text-white text-lg hover:text-cyan-950">{item}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

import React from 'react';

const FooterComp = () => {
  return (
    <footer
      className="w-full h-scree flex flex-col justify-center items-center p-4"
      style={{
        background: 'linear-gradient(to bottom,rgb(39, 39, 42) 0%,rgb(43, 7, 98) 100%)', // Zinc → Purple gradient
      }}
    >
      <div className="w-full max-w-screen-xl mx-auto md:py-8 text-center">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              WREH Productions
            </span>
          </a>
          <ul className="flex flex-wrap justify-center text-sm font-medium text-gray-300">
            {['Privacy Policy', 'Licensing', 'Contact', 'About', 'Pages'].map((item, index) => (
              <li key={index} className="mx-4">
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-400">
          © 2025{' '}
          <a href="#soon" className="hover:underline">
            Wreh Productions
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main>{children}</main>
        <FooterComp /> {/* Footer is now within the same file */}
      </body>
    </html>
  );
}
