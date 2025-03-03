import React from 'react';

const FullScreenSection = () => {
  return (
    <section
      className="w-screen h-[500px] flex justify-center items-start text-center p-10"
      style={{
        background: 'linear-gradient(to bottom, #2f0d63 0%, #000 50%, #2f0d63 100%)', // Purple → Black → Purple
      }}
    >
      <div>
        <h1 className="text-4xl font-bold mb-4 text-white">Our top partners</h1>
        <p className="text-lg text-gray-300">
          a grid of company logos which describe when hovered over
        </p>
      </div>
    </section>
  );
};

export default FullScreenSection;
