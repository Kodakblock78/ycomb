"use client";

import React, { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ComboboxDemo } from "@/components/ui/combobox";
import PostGrid from "./grid-hotPicks"; 

const ClickableButtons = () => {
  const [clicked, setClicked] = useState<{ [key: number]: boolean }>({});

  const toggleClick = (index: number) => {
    setClicked((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="flex gap-6 text-lg font-medium">
      {["Editor's Picks", "Popular"].map((text, index) => (
        <p
          key={index}
          className={`rounded-full px-6 py-3 border-2 border-black cursor-pointer transition 
          ${clicked[index] ? "bg-black text-white" : "bg-white text-black"}
          hover:bg-gray-400 hover:text-black`}
          onClick={() => toggleClick(index)}
        >
          {text}
        </p>
      ))}
    </div>
  );
};

const PicksPage = () => {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <div className="bg-grey-200 min-h-screen">
      <div className="flex flex-col items-center space-y-8 mt-[10vh]">
        <div className="text-7xl font-bold text-center">Explore our hot picks</div>
        <ClickableButtons />
      </div>

      {/* Popover Calendar & Dropdown (Side by Side, Aligned Properly) */}
      <div className="flex justify-end items-center gap-x-4 mt-20 mr-6">
        {/* Popover Calendar */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-[240px] pl-3 text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              {date ? date.toDateString() : "Pick a date"}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
          </PopoverContent>
        </Popover>

        {/* Dropdown Component */}
        <div className="w-[200px]">
          <ComboboxDemo />
        </div>
      </div>

      {/* ✅ Correct PostGrid Component Usage */}
      <PostGrid />
    </div>
  );
};
export default PicksPage;
