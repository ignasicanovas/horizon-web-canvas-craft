
import React from 'react';

const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-10 px-8 py-6">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex space-x-12">
          <a 
            href="#sobre-sabi" 
            className="text-black font-horizon font-bold text-lg hover:opacity-70 transition-opacity"
          >
            SOBRE SABI
          </a>
          <a 
            href="#el-cafe" 
            className="text-black font-horizon font-bold text-lg hover:opacity-70 transition-opacity"
          >
            EL CAFÉ
          </a>
          <a 
            href="#contacte" 
            className="text-black font-horizon font-bold text-lg hover:opacity-70 transition-opacity"
          >
            CONTACTE
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
