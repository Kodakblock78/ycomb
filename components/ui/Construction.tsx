import React from 'react';

const UnderConstruction = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[rgb(39,39,42)] text-white text-center p-6">
      <h1 className="text-5xl font-extrabold mb-4">🚧 Under Construction 🚧</h1>
      <p className="text-lg mb-6">We are working hard to bring you something awesome. Stay tuned!</p>
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-500"></div>
    </div>
  );
};

export default UnderConstruction;
