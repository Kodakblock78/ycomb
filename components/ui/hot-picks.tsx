"use client";
import { Section } from "lucide-react";
import { useState } from "react";

const ClickableButtons = () => {
  const [clicked, setClicked] = useState<{ [key: number]: boolean }>({});

  const toggleClick = (index: number) => {
    setClicked((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
   
    <div className="flex gap-6 text-lg font-medium">
      {["Editor's Picks","popular"].map((text, index) => (
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
  return (
    <div className="flex flex-col items-center space-y-8 mt-[10vh]">
      <div className="text-7xl font-bold text-center">Explore our hot picks</div>
      <ClickableButtons />
    </div>
  );
};

export default PicksPage;
