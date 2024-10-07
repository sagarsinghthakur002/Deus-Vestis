
import React from 'react';

function Background() {
  return (
    <>
      {/* Full-screen background container */}
      <div className="fixed top-0 left-0 w-full h-full">
        
        {/* Semi-transparent overlay for better text contrast */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Centered large heading text with text-shadow */}
        <h1 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[13vw] md:text-[9vw] sm:text-[6vw] leading-none tracking-tighter font-semibold text-gray-700"
          style={{ textShadow: '2px 4px 6px rgba(0, 0, 0, 0.8)' }}
        >
          Deus Vestis
        </h1>

      </div>
    </>
  );
}

export default Background;
