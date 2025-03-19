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
  const navItems = ["Home", "Partners", "Investors","Startup Jobs","About","contact"];

  return (
    <nav className="fixed inset-x-0 top-0 p-4 bg-white bg-opacity-10 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <span>Logo</span>
        </div>
        <ul className="flex space-x-6">
          {navItems.map((item, index) => {
            // If the item is "Home", set the link to "/"
            const linkHref = item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <li key={index}>
                <Link href={linkHref}>
                  <span className="text-white text-lg relative group">
                    {item}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};



import React from 'react';

const FooterComp = () => {
  return (
    <footer className="w-full h-[50vh] flex flex-col justify-center items-center p-2" style={{ background: 'linear-gradient(to bottom, rgb(39, 39, 42) 0%, rgb(43, 7, 98) 100%)' }}>
    <div className="w-full max-w-screen-xl mx-auto md:py-8 text-center">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">WREH Productions</span>
        </a>
        <ul className="flex flex-wrap justify-center text-sm font-medium text-gray-300">
          <li className="mx-4"><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li className="mx-4"><a href="#" className="hover:underline">Licensing</a></li>
          <li className="mx-4"><a href="#" className="hover:underline">Contact</a></li>
          <li className="mx-4"><a href="#" className="hover:underline">About</a></li>
          <li className="mx-4"><a href="#" className="hover:underline">Pages</a></li>
        </ul>
      </div>
      <hr className="my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-400">© 2025 <a href="#soon" className="hover:underline">Wreh Productions</a>. All Rights Reserved.</span>
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
        <FooterComp />
      </body>
    </html>
  );
}
