import React from 'react';
import Link from 'next/link'

// Functional Component
const   Contactpage = () => {
  return (
 
    <section
    className="w-screen h-screen flex justify-center items-start text-center p-20"
    style={{
      background: 'linear-gradient(to bottom, rgb(47, 13, 99) 5%, #27272a 20%)', 
    }}
     >
        <div className="relative z-10 w-full h-full flex">
        {/* Left side - Button with white box */}
        <div className="w-1/2 flex items-center justify-center px-4">
          {/* White box around the button */}
          <div className="w-full h-[80vh] bg-white rounded-lg flex items-center justify-center">
            <Link
              href="/about"
              className="px-4 py-2 bg-blue-700 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition"
            >
              Apply Today
            </Link>
          </div>
        </div>

        {/* Right side - Text */}
        <div className="w-1/2 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Take over
          </h1>
          <p className="text-lg mb-8 max-w-lg mx-auto">
            Start today and take control of your company's growth
          </p>
        </div>
      </div>

      {/* ColoredTextBlock Component */}
   

    </section>
  );
};

export default Contactpage;
