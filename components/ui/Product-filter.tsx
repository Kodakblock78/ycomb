"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button2";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/Checkbox";
import { X, Filter } from "lucide-react";
import { neon } from "@neondatabase/serverless"

const companies = [
  { name: "Company A", category: "Tech" },
  { name: "Company B", category: "Finance" },
  { name: "Company C", category: "Health" },
  { name: "Company D", category: "Tech" },
  { name: "Company E", category: "Finance" },
  { name: "Company F", category: "Health" },
  { name: "Company A", category: "Tech" },
  { name: "Company B", category: "Finance" },
  { name: "Company C", category: "Health" },
  { name: "Company D", category: "Tech" },
  { name: "Company E", category: "Finance" },
  { name: "Company F", category: "Health" },
];

const categories = ["Tech", "Finance", "Health"];

const CompaniesPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedCategories.length === 0 || selectedCategories.includes(company.category))
  );

  

  return (
    <div
      className="flex min-h-screen relative" // Add relative to the parent to allow z-index control
      style={{
        background: 'linear-gradient(to bottom, rgb(43, 7, 98) 0%, rgb(39, 39, 42) 100%)', // Gradient from white to black
        zIndex: 5, // Main content should also appear above the background gradient
      }}
    >
      {/* Sidebar */}
      <div
  className={`fixed top-20 left-0 h-full w-64 bg-gray-900 text-white p-5 mt-[20px] transition-transform duration-300 ease-in-out ${
    sidebarOpen ? "translate-x-0" : "-translate-x-full"
  } md:relative md:translate-x-0 md:ml-[84px]`} // Increased left margin for the sidebar
  style={{
    zIndex: 10, // Sidebar should be on top of the background
    borderRadius: '10px', // Apply border radius
    border: '1px solid white', // Apply a thin 1px white border
  }}
>

        <div className="flex justify-between items-center pb-4 border-b">
          <h2 className="text-xl font-bold">Filters</h2>
          <X className="cursor-pointer md:hidden" onClick={() => setSidebarOpen(false)} />
        </div>

        <div className="mt-5">
          <h3 className="text-lg font-semibold">Categories</h3>
          <div className="mt-2 space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center">
                <Checkbox
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                  className="mr-2"
                />
                {category}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="w-full p-5 mt-[57px] min-h-screen"
        style={{
          zIndex: 5, // Main content should also appear above the background gradient
        }}
      >
        <div className="flex justify-between items-center mb-5">
          <Input
            placeholder="Search companies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md"
          />

          <div className="flex justify-end items-center p-6">
            <p className="text-white text-xl mr-4">sort by</p>
            <select className="border-2 border-indigo-900 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="Default">Default</option>
              <option value="Launch date">Launch date</option>
            </select>
          </div>

          <Button className="md:hidden" onClick={() => setSidebarOpen(true)}>
            <Filter className="mr-2" /> Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCompanies.map((company, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-bold">{company.name}</h3>
              <p className="text-gray-600">{company.category}</p>
            </div>
          ))}
          {filteredCompanies.length === 0 && (
            <p className="col-span-full text-center text-gray-500">No companies found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompaniesPage;
