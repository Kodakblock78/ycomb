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
        {/* Logo on the left */}
        <div className="text-white text-2xl font-bold">
          <span>Logo</span> {/* Replace with actual logo when implemented */}
        </div>

        {/* Navigation links on the right */}
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Navbar component */}
        <Navbar />
        
        {/* Main content */}
        <main>{children}</main> {/* Add padding-top to prevent content from being hidden behind the navbar */}
      </body>
    </html>
  );
}