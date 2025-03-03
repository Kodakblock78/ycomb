import React from 'react';

const Help_block = () => {
  return (
    <section
      className="w-screen h-[450px] flex justify-center items-start text-center p-10"
      style={{
        backgroundColor: 'rgb(48, 8, 108)', // Solid background color
      }}
    >
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold mb-4 text-white">
          We help starting entrepeneurs 
        </h1>
        <br />

        {/* Grid container for the 4 blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Block 1 */}
          <div className="bg-white/10 p-6 rounded-lg text-gray-300 border-l-4 border-purple-500">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          {/* Block 2 */} 
          <div className="bg-white/10 p-6 rounded-lg text-gray-300 border-l-4 border-purple-500">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          {/* Block 3 */}
          <div className="bg-white/10 p-6 rounded-lg text-gray-300 border-l-4 border-purple-500">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          {/* Block 4 */}
          <div className="bg-white/10 p-6 rounded-lg text-gray-300 border-l-4 border-purple-500">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help_block;